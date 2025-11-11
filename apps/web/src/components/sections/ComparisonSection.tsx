import { Check, Clock, MessageSquare } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          ZRENDER AI vs V-Ray (แนวคิดและการใช้งาน)
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          สรุปจากคู่มือ: เปรียบเทียบแนวทาง Generative AI (สั่งด้วยภาษา) กับ Physics-Based Ray Tracing (สร้างตามหลักฟิสิกส์)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border-2 border-border bg-background">
            <h3 className="text-2xl font-bold mb-3">Generative AI (ZRENDER AI)</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><MessageSquare className="h-5 w-5 text-primary mt-0.5"/><span>สั่งงานด้วยภาษา/Prompt ได้ทันที</span></li>
              <li className="flex items-start gap-3"><Clock className="h-5 w-5 text-primary mt-0.5"/><span>ความเร็วสูง เหมาะกับการลองหลายเวอร์ชัน</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5"/><span>ไม่ต้องเตรียมวัสดุ/Maps (Diffuse, Bump, Reflection) ละเอียด</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 text-primary mt-0.5"/><span>เหมาะกับงานคอนเซ็ปต์/ปรับสไตล์/ทำ Before–After เร็ว</span></li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border-2 border-border bg-background">
            <h3 className="text-2xl font-bold mb-3">V-Ray / Ray Tracing</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><Check className="h-5 w-5 text-muted-foreground mt-0.5"/><span>อิงหลักฟิสิกส์ ให้ผลลัพธ์สมจริงระดับ Production</span></li>
              <li className="flex items-start gap-3"><Clock className="h-5 w-5 text-muted-foreground mt-0.5"/><span>ต้องเซ็ตอัพละเอียด (วัสดุ, แสง, กล้อง) ใช้เวลามากกว่า</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 text-muted-foreground mt-0.5"/><span>ต้องเตรียม Maps/Materials และทักษะเชิงเทคนิค</span></li>
              <li className="flex items-start gap-3"><Check className="h-5 w-5 text-muted-foreground mt-0.5"/><span>เหมาะกับงาน Final Render คุณภาพสูงเมื่อพร้อมข้อมูลครบ</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}