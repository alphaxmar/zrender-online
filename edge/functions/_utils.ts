// edge/functions/_utils.ts
export const cors = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Authorization,Content-Type"
  }
};

export function ok(data: any, extra: Record<string,string> = {}) {
  return new Response(JSON.stringify(data), { 
    status: 200, 
    headers: { 
      "content-type":"application/json", 
      ...cors.headers, 
      ...extra 
    }
  });
}

export function err(status: number, message: string) {
  return new Response(JSON.stringify({ ok:false, message }), { 
    status, 
    headers: { 
      "content-type":"application/json", 
      ...cors.headers 
    }
  });
}

export async function getSupabaseUser(req: Request, env: any) {
  const auth = req.headers.get('Authorization') || '';
  if (!auth.startsWith('Bearer ')) return null;
  
  // ตรวจเฉพาะว่ามี token; ฝั่งจริงควร verify JWT กับ Supabase JWKS
  const token = auth.slice(7);
  
  // shortcut: ส่งต่อให้ Supabase Admin API ตรวจ (แนะนำสำหรับ Edge)
  try {
    const r = await fetch(`${env.SUPABASE_URL}/auth/v1/user`, {
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'apikey': env.SUPABASE_ANON_KEY 
      }
    });
    
    if (!r.ok) return null;
    return await r.json(); // มี user.id, email ฯลฯ
  } catch (error) {
    console.error('Error verifying user:', error);
    return null;
  }
}