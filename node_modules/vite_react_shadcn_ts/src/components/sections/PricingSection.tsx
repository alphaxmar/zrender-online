import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PricingSectionProps {
  onStartClick: () => void;
}

const plans = [
  {
    name: "Free",
    price: "ฟรี",
    period: "",
    description: "เหมาะสำหรับทดลองใช้งาน",
    features: [
      "20 เครดิตเริ่มต้น",
      "Basic rendering",
      "มีลายน้ำ",
      "คุณภาพ Standard",
      "Support พื้นฐาน"
    ],
    cta: "เริ่มใช้ฟรี",
    popular: false
  },
  {
    name: "Pro",
    price: "฿990",
    period: "/เดือน",
    description: "เหมาะสำหรับฟรีแลนซ์และสตูดิโอเล็ก",
    features: [
      "200 เครดิต/เดือน",
      "ลบลายน้ำได้",
      "High Quality rendering",
      "แก้ไขไม่จำกัด",
      "Priority support",
      "Advanced features"
    ],
    cta: "เริ่มใช้ Pro",
    popular: true
  },
  {
    name: "Studio",
    price: "฿2,990",
    period: "/เดือน",
    description: "เหมาะสำหรับทีมและสตูดิโอใหญ่",
    features: [
      "เครดิตไม่จำกัด",
      "โฟลเดอร์ทีม",
      "สิทธิ์ใช้งานเชิงพาณิชย์",
      "API Access",
      "SLA 99.9%",
      "Dedicated support",
      "Custom training"
    ],
    cta: "ติดต่อเรา",
    popular: false
  }
];

const PricingSection = ({ onStartClick }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            เลือกแพ็คเกจที่เหมาะกับคุณ
          </h2>
          <p className="text-xl text-muted-foreground">
            เริ่มฟรี แล้วอัปเกรดทีหลัง
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
          ทุกแพ็คเกจไม่ผูกมัด ยกเลิกได้ทุกเมื่อ
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
