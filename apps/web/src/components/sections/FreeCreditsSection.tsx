import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function FreeCreditsSection() {
  return (
    <section id="free-credits" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          วิธีรับเครดิต $300 จาก Google Cloud
        </h2>
        <Badge variant="secondary" className="mb-6">
          ข้อเสนออาจเปลี่ยนแปลงตามภูมิภาค/นโยบาย – กรุณาตรวจสอบหน้าโปรโมชั่นปัจจุบัน
        </Badge>

        <ol className="space-y-4 text-foreground">
          <li>
            1) สมัคร Free Trial ที่ {" "}
            <a
              href="https://cloud.google.com/free"
              target="_blank"
              rel="noreferrer"
              className="underline inline-flex items-center gap-1"
            >
              cloud.google.com/free <ExternalLink className="h-4 w-4" />
            </a>
          </li>
          <li>2) ยืนยันตัวตน (บัตร/การชำระเงิน) เพื่อเปิดใช้งานเครดิตทดลองใช้งาน</li>
          <li>3) สร้าง Project + เปิด Billing โดยผูกกับเครดิตทดลองใช้งาน</li>
          <li>4) เปิดใช้บริการที่ต้องการ เช่น Vertex AI หรือ Google AI Studio (Gemini)</li>
          <li>
            5) สร้าง API Key ใน Google AI Studio แล้วตั้งค่าในระบบนี้:
            <div className="mt-2 p-3 bg-muted rounded-md text-sm">
              - ฝั่ง Backend (zrender-ai-app): ตั้งค่า `.env` เป็น <code>API_KEY=YOUR_GEMINI_API_KEY</code>
              <br />- ฝั่ง Production (Cloudflare): ตั้งค่าเป็น Secret/Env ตามที่ใช้งานจริง
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}