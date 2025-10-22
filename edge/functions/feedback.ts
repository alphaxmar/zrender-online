// edge/functions/feedback.ts
import { cors, ok, err, getSupabaseUser } from './_utils';

export const onRequestOptions: PagesFunction = async () => new Response('ok', { headers: cors.headers });

export const onRequestPost: PagesFunction = async (ctx) => {
  const { env, request } = ctx;
  
  try {
    const user = await getSupabaseUser(request, env);
    if (!user) return err(401, "Unauthorized");

    const { type, message, rating, metadata } = await request.json();
    
    if (!type || !message) {
      return err(400, "type_and_message_required");
    }

    // บันทึก feedback ลง Supabase
    const response = await fetch(`${env.SUPABASE_URL}/rest/v1/feedback`, {
      method: 'POST',
      headers: {
        'apikey': env.SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        user_id: user.id,
        type,
        message,
        rating: rating || null,
        metadata: metadata || {},
        created_at: new Date().toISOString()
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Feedback save failed:', errorText);
      return err(500, "failed_to_save_feedback");
    }

    return ok({ 
      ok: true, 
      message: "Feedback submitted successfully" 
    });
    
  } catch (error) {
    console.error('Feedback API error:', error);
    return err(500, "internal_server_error");
  }
};