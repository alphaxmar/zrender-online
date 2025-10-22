// edge/functions/render.ts
import { cors, ok, err, getSupabaseUser } from './_utils';

export const onRequestOptions: PagesFunction = async () => new Response('ok', { headers: cors.headers });

export const onRequestPost: PagesFunction = async (ctx) => {
  const { env, request } = ctx;
  
  try {
    const user = await getSupabaseUser(request, env);
    if (!user) return err(401, "Unauthorized");

    const { feature, payload, request_id } = await request.json();

    // หักเครดิต: เรียกไปที่ Supabase Edge Function หรือ REST RPC ก็ได้
    // (แนะนำให้คุณมี endpoint ฝั่ง Supabase ที่รันด้วย Service Role เพื่อบันทึก transaction แบบ idempotent)
    const credit = await fetch(`${env.SUPABASE_URL}/rest/v1/rpc/spend_credit`, {
      method: 'POST',
      headers: {
        'apikey': env.SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        uid: user.id, 
        delta: -1, 
        reason: `render:${feature}`, 
        request_id 
      })
    });
    
    if (!credit.ok) {
      console.error('Credit deduction failed:', await credit.text());
      return err(402, "insufficient_credits_or_tx_error");
    }

    // Proxy ไป Google AI Studio/Cloud Run
    const r = await fetch(`${env.RENDER_BACKEND_URL}/render`, {
      method: 'POST',
      headers: { 
        'content-type':'application/json', 
        'x-user-id': user.id 
      },
      body: JSON.stringify({ feature, payload })
    });

    if (!r.ok) {
      console.error('Backend error:', r.status, await r.text());
      return err(502, "backend_error");
    }
    
    const result = await r.json();
    return ok({ ok: true, ...result });
    
  } catch (error) {
    console.error('Render API error:', error);
    return err(500, "internal_server_error");
  }
};