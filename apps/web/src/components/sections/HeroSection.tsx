import { Button } from "@/components/ui/button";
import { Sparkles, Play } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";

interface HeroSectionProps {
  onStartClick: () => void;
  isProcessing?: boolean;
}

const HeroSection = ({ onStartClick, isProcessing }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
              เรนเดอร์ก่อน–หลังใน{" "}
              <span className="relative inline-block">
                <span className="relative z-10">60 วิ</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/30 -rotate-1"></span>
              </span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              สอนใช้งานทีละขั้น + แนะแนวรับเครดิต $300 จาก Google Cloud เพื่อเริ่มต้นแบบคุ้มค่า
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                size="lg"
                onClick={onStartClick}
                disabled={isProcessing}
                className="text-lg px-8 py-6 shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                {isProcessing ? "กำลังเชื่อมต่อ..." : "เริ่มเรียนรู้ฟรี"}
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
              onClick={() => document.getElementById("free-credits")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="mr-2 h-5 w-5" />
                ดูวิธีรับเครดิต $300
              </Button>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary">
                <span className="text-2xl">★★★★★</span>
                <span className="text-sm text-muted-foreground">
                  คะแนนเฉลี่ย 4.7 (จากสตูดิโอ 1,200+ โปรเจกต์)
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                ไม่ต้องใส่บัตร • ลบลายน้ำได้เมื่ออัปเกรด
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl border-2 border-border bg-card p-4 shadow-2xl">
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

export default HeroSection;
