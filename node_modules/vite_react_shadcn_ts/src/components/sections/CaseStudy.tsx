import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap, TrendingUp } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";

interface CaseStudyProps {
  onCreateClick: () => void;
}

const CaseStudy = ({ onCreateClick }: CaseStudyProps) => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              กรณีศึกษาจริง
            </h2>
            <p className="text-xl text-muted-foreground">
              สตูดิโอ ABC ลดเวลาทำงาน 70% ด้วย ZRENDER AI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Story */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  ปัญหา
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  สตูดิโอสถาปัตย์ ABC ใช้เวลาทำภาพ rendering นานถึง 2-3 วันต่อ 1 โปรเจกต์ 
                  ทำให้ลูกค้ารอนาน และเสียโอกาสในการปิดดีลหลายครั้ง
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  วิธีทำ 3 ขั้นตอน
                </h3>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      1
                    </span>
                    <span className="text-muted-foreground">
                      อัปโหลดภาพห้องเปล่าหรือ floor plan
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      2
                    </span>
                    <span className="text-muted-foreground">
                      เลือกสไตล์ที่ต้องการ (Muji, Modern, Tropical)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      3
                    </span>
                    <span className="text-muted-foreground">
                      ได้ 3 เวอร์ชันพร้อม Before/After ภายใน 1 นาที
                    </span>
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  ผลลัพธ์
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <Clock className="h-6 w-6 text-primary mb-2" />
                    <p className="text-2xl font-bold text-foreground">60 วิ</p>
                    <p className="text-sm text-muted-foreground">เวลาทำงาน</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <Zap className="h-6 w-6 text-primary mb-2" />
                    <p className="text-2xl font-bold text-foreground">3 เครดิต</p>
                    <p className="text-sm text-muted-foreground">ต่อโปรเจกต์</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <TrendingUp className="h-6 w-6 text-primary mb-2" />
                    <p className="text-2xl font-bold text-foreground">70%</p>
                    <p className="text-sm text-muted-foreground">ลดเวลา</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={onCreateClick}
                size="lg"
                className="w-full"
              >
                ทำแบบนี้ให้ฉัน
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right: Before/After */}
            <div className="rounded-2xl overflow-hidden border-2 border-border shadow-2xl">
              <BeforeAfterSlider
                beforeImage={before1}
                afterImage={after1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
