import { CheckCircle } from "lucide-react";

export default function TutorialSection() {
  return (
    <section id="tutorial" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          บทเรียนแบบลงมือทำ
        </h2>
        <p className="text-muted-foreground mb-10">
          ทำตามทีละขั้น ตั้งแต่อัปโหลดภาพต้นทาง → เลือกสไตล์ → ปรับเฉพาะจุดด้วย Inpaint → ส่งออกไฟล์คุณภาพงานจริง
        </p>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            เริ่มแบบเร็ว: อัปโหลดห้องเปล่า → เลือกสไตล์ → ได้ Before/After 3 เวอร์ชัน
          </li>
          <li className="flex gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Inpaint สำหรับเฟอร์นิเจอร์/วัสดุ/แสง ให้ตรงโจทย์ลูกค้า
          </li>
          <li className="flex gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            Upscale + Export เพื่อพรีเซนต์/ส่งงาน
          </li>
          <li className="flex gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            สร้างวิดีโอไฮไลต์งานสำหรับโซเชียล/พอร์ตโฟลิโอ
          </li>
        </ul>
      </div>
    </section>
  );
}