import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

interface DemoStripProps {
  onCreateClick: () => void;
}

const demos = [
  {
    before: before1,
    after: after1,
    caption: "Muji Living 34 วิ • 1 เครดิต"
  },
  {
    before: before2,
    after: after2,
    caption: "Tropical Facade 41 วิ • 1 เครดิต"
  },
  {
    before: before3,
    after: after3,
    caption: "Modern Interior 38 วิ • 1 เครดิต"
  }
];

const DemoStrip = ({ onCreateClick }: DemoStripProps) => {
  return (
    <section id="examples" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            แสดงผลลัพธ์ที่น่าทึ่ง
          </h2>
          <p className="text-xl text-muted-foreground">
            เลื่อนเพื่อเปรียบเทียบภาพก่อนและหลังใช้ AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <div 
              key={index}
              className="animate-fade-in space-y-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-[400px] rounded-xl overflow-hidden border border-border">
                <BeforeAfterSlider
                  beforeImage={demo.before}
                  afterImage={demo.after}
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{demo.caption}</p>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={onCreateClick}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  สร้างแบบนี้
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoStrip;
