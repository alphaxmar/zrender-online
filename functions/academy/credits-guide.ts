import { cors, err, getSupabaseUser } from "../_utils";

export const onRequestOptions: PagesFunction = async () =>
  new Response("ok", { headers: { ...cors.headers } });

export const onRequestGet: PagesFunction = async (ctx) => {
  const { request } = ctx;
  const user = await getSupabaseUser(request, (ctx as any).env);
  if (!user) return err(401, "Unauthorized");

  const headers = new Headers({
    "content-type": "text/html; charset=utf-8",
    "X-Robots-Tag": "noindex, nofollow",
    ...cors.headers,
  });

  const html = `<!doctype html>
  <html lang="th">
    <head>
      <meta charset="utf-8" />
      <meta name="robots" content="noindex,nofollow" />
      <title>คู่มือรับเครดิต $300</title>
      <style>
        body { font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu; line-height:1.6; padding:24px; max-width: 760px; margin: 0 auto; }
        h1,h2 { color:#111; }
        .note { background:#f6f7f9; padding:12px 16px; border-radius:8px; border:1px solid #e5e7eb; }
        ol { padding-left: 1.2rem; }
        code { background:#eef2ff; padding:2px 6px; border-radius:6px; }
      </style>
    </head>
    <body>
      <h1>วิธีรับเครดิตเริ่มต้น $300 (สมาชิก)</h1>
      <p class="note">ข้อเสนออาจเปลี่ยนตามภูมิภาค/นโยบาย — โปรดตรวจสอบหน้าโปรโมชั่นล่าสุด</p>

      <h2>ขั้นตอน</h2>
      <ol>
        <li>สมัคร Free Trial ที่ <a href="https://cloud.google.com/free" target="_blank" rel="noreferrer">cloud.google.com/free</a></li>
        <li>ยืนยันตัวตนและเปิด Billing ให้ผูกกับเครดิตทดลองใช้งาน</li>
        <li>เปิดบริการ Vertex AI หรือ Google AI Studio (Gemini)</li>
        <li>สร้าง API Key ใน Google AI Studio</li>
        <li>ตั้งค่าในระบบนี้:<br />
          <code>API_KEY=YOUR_GEMINI_API_KEY</code> (ฝั่ง Backend) และตั้งค่า Secret/Env ใน Production ตามแนวทางของคุณ
        </li>
      </ol>

      <h2>เชิงเทคนิคและคำแนะนำ</h2>
      <ul>
        <li>อย่าเผยแพร่ลิงก์หรือรายละเอียดเต็มในพื้นที่สาธารณะ</li>
        <li>ใช้ Presets/Cheatsheet จากคอร์สเพื่อเริ่มงานแบบเร็ว</li>
        <li>ตรวจสอบการใช้งานตามนโยบายของผู้ให้บริการคลาวด์</li>
      </ul>

      <p>หากมีคำถาม โปรดติดต่อทีม Support ภาษาไทย (จันทร์–ศุกร์ 9:00–18:00)</p>
    </body>
  </html>`;

  return new Response(html, { headers });
};