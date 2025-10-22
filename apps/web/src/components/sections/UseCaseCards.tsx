import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, GraduationCap, ArrowRight } from "lucide-react";

interface UseCaseCardsProps {
  onStartClick: () => void;
}

const useCases = [
  {
    icon: Building2,
    title: "เอเจนซียูนิตมือสอง",
    benefit: "ทำภาพขายไวขึ้น 3×",
    description: "แปลงห้องเปล่าเป็นภาพ staging สวยงามในไม่กี่วินาที ทำให้ขายได้เร็วขึ้นและราคาดีขึ้น",
    color: "from-primary/10 to-primary/5"
  },
  {
    icon: TrendingUp,
    title: "สตูดิโอสถาปัตย์",
    benefit: "ลดรอบแก้คอนเซปต์ 50%",
    description: "นำเสนอแนวคิดหลายเวอร์ชันให้ลูกค้าได้เลือกเร็วขึ้น ลดเวลาแก้ไขกลับไปกลับมา",
    color: "from-accent/10 to-accent/5"
  },
  {
    icon: GraduationCap,
    title: "นักศึกษา/ผู้สอน",
    benefit: "ทำพอร์ต/ตัวอย่างในคลิกเดียว",
    description: "สร้างภาพประกอบงานนำเสนอและพอร์ตโฟลิโอได้อย่างรวดเร็ว ประหยัดเวลาและค่าใช้จ่าย",
    color: "from-secondary/20 to-secondary/5"
  }
];

const UseCaseCards = ({ onStartClick }: UseCaseCardsProps) => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ใครได้ประโยชน์อะไร
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-border bg-gradient-to-br hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`
              }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <useCase.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-lg font-semibold text-primary mb-4">
                {useCase.benefit}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <Button 
                variant="ghost"
                onClick={onStartClick}
                className="w-full group-hover:bg-primary/10"
              >
                เริ่มแบบนี้
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseCards;
