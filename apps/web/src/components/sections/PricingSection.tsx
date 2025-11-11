import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PricingSectionProps {
  onStartClick: () => void;
}

const plans = [
  {
    name: "คอร์สใช้งาน + เครดิต $300",
    price: "ฟรี",
    period: "",
    description:
      "สอนใช้งานทีละขั้น และแนะแนวรับเครดิต $300 จาก Google Cloud (ขึ้นกับเงื่อนไขข้อเสนอปัจจุบัน)",
    features: [
      "บทเรียนแบบลงมือทำ (Before/After, Inpaint, Video)",
      "ตั้งค่า Google AI Studio และสร้าง API Key",
      "แนะแนวรับเครดิต $300 อย่างถูกต้อง",
      "ไม่มีบอกรายเดือน • ใช้เท่าที่ต้องการ",
    ],
    cta: "เริ่มเรียนรู้",
    popular: true,
  },
];

const PricingSection = ({ onStartClick }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            เรียนรู้การใช้งาน + วิธีรับเครดิต $300
          </h2>
          <p className="text-xl text-muted-foreground">
            ไม่มีการบอกรายเดือน — เริ่มฟรีและใช้เครดิตจาก Google Cloud
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                plan.popular
                  ? "border-primary bg-card shadow-[0_0_40px_hsl(var(--primary)/0.2)] scale-105"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                  ยอดนิยม
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={onStartClick}
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          ข้อเสนอเครดิตอาจเปลี่ยนตามนโยบาย Google/ภูมิภาค — กรุณาตรวจสอบหน้าโปรโมชันล่าสุด
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
