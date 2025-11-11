import { Lightbulb, ListChecks, Wand2 } from "lucide-react";

export default function ManualHighlightsSection() {
  return (
    <section id="manual-highlights" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          สาระสำคัญจากคู่มือ ZRENDER AI
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          โฟกัสเวิร์กโฟลว์และแนวทางปฏิบัติ: เรนเดอร์ Before–After, ปรับเฉพาะจุดด้วย Inpaint, Style Transfer, วิดีโอ และพื้นฐานวัสดุ
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border-2 border-border bg-card">
            <Wand2 className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold mt-4">Quickstart</h3>
            <p className="text-muted-foreground mt-2">อัปโหลดภาพ → เลือกสไตล์ → ได้ 3 เวอร์ชัน พร้อม Before/After ในไม่กี่วินาที</p>
          </div>

          <div className="p-8 rounded-2xl border-2 border-border bg-card">
            <ListChecks className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold mt-4">Inpaint & Materials</h3>
            <p className="text-muted-foreground mt-2">ปรับเฟอร์นิเจอร์/วัสดุ/แสงเฉพาะจุด และเข้าใจภาพรวม Maps (Diffuse, Bump, Reflection)</p>
          </div>

          <div className="p-8 rounded-2xl border-2 border-border bg-card">
            <Lightbulb className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold mt-4">Workflow & Video</h3>
            <p className="text-muted-foreground mt-2">สรุปเวิร์กโฟลว์จากคู่มือ และสร้างวิดีโอไฮไลต์งานสำหรับโซเชียล/พอร์ตโฟลิโอ</p>
          </div>
        </div>
      </div>
    </section>
  );
}