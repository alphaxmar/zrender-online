// edge/functions/referral.ts
import { cors, ok, err, getSupabaseUser } from './_utils';

export const onRequestOptions: PagesFunction = async () => new Response('ok', { headers: cors.headers });

export const onRequestPost: PagesFunction = async (ctx) => {
  const { env, request } = ctx;
  
  try {
    const user = await getSupabaseUser(request, env);
    if (!user) return err(401, "Unauthorized");

    const { referral_code } = await request.json();
    
    if (!referral_code) {
      return err(400, "referral_code_required");
    }

    // เรียก Supabase RPC สำหรับ claim referral
    const response = await fetch(`${env.SUPABASE_URL}/rest/v1/rpc/claim_referral`, {
      method: 'POST',
      headers: {
        'apikey': env.SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        user_id: user.id, 
        code: referral_code 
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Referral claim failed:', errorText);
      return err(400, "invalid_referral_code_or_already_used");
    }

    const result = await response.json();
    return ok({ 
      ok: true, 
      message: "Referral claimed successfully",
      credits_awarded: result.credits_awarded || 0
    });
    
  } catch (error) {
    console.error('Referral API error:', error);
    return err(500, "internal_server_error");
  }
};