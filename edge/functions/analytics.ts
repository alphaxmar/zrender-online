// edge/functions/analytics.ts
import { cors, ok, err, getSupabaseUser } from './_utils';

export const onRequestOptions: PagesFunction = async () => new Response('ok', { headers: cors.headers });

export const onRequestPost: PagesFunction = async (ctx) => {
  const { env, request } = ctx;
  
  try {
    // Analytics อาจไม่จำเป็นต้อง auth เสมอไป (สำหรับ anonymous events)
    const user = await getSupabaseUser(request, env);
    
    const { events } = await request.json();
    
    if (!events || !Array.isArray(events)) {
      return err(400, "events_array_required");
    }

    // เตรียม events สำหรับบันทึก
    const analyticsEvents = events.map(event => ({
      user_id: user?.id || null,
      event_name: event.name,
      event_data: event.data || {},
      timestamp: event.timestamp || new Date().toISOString(),
      session_id: event.session_id || null,
      user_agent: request.headers.get('user-agent') || null,
      ip_address: request.headers.get('cf-connecting-ip') || 
                  request.headers.get('x-forwarded-for') || 
                  'unknown'
    }));

    // บันทึกลง Supabase (หรือส่งต่อไป BigQuery ในอนาคต)
    const response = await fetch(`${env.SUPABASE_URL}/rest/v1/analytics_events`, {
      method: 'POST',
      headers: {
        'apikey': env.SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(analyticsEvents)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Analytics save failed:', errorText);
      // ไม่ return error เพราะ analytics ไม่ควรทำให้ user experience เสีย
      console.warn('Analytics failed but continuing...');
    }

    return ok({ 
      ok: true, 
      message: "Analytics events processed",
      events_count: events.length
    });
    
  } catch (error) {
    console.error('Analytics API error:', error);
    // ไม่ return error เพราะ analytics ไม่ควรทำให้ user experience เสีย
    return ok({ 
      ok: true, 
      message: "Analytics events processed (with errors)",
      error: error.message
    });
  }
};