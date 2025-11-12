import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

interface PricingSectionProps {
  onStartClick: () => void;
}

const plans = [
  {
    name: "คอร์สมาตรฐาน",
    price: "฿4,900",
    period: "จ่ายครั้งเดียว",
    description: "เหมาะสำหรับผู้เริ่มต้นและมืออาชีพที่ต้องการลงมือทำทันที",
    features: [
      "คอร์สออนไลน์เต็มรูปแบบ 10+ โมดูล",
      "เวิร์กโฟลว์: Before/After, Inpaint, Video, Style Transfer",
      "แนะแนวรับเครดิตเริ่มต้น $300",
      "คู่มือ + Prompt Cheatsheet + Presets",
      "อัปเดตคอร์สฟรีตลอดปี",
      "ชุมชน + Support พื้นฐาน",
    ],
    cta: "สมัครคอร์ส 4,900 บาท",
    popular: false,
  },
  {
    name: "คอร์สโปร (แนะนำ)",
    price: "฿9,900",
    period: "จ่ายครั้งเดียว",
    description: "เหมาะสำหรับผู้ที่ต้องการโค้ชส่วนตัวและทรัพยากรระดับโปร",
    features: [
      "ทุกอย่างในคอร์สมาตรฐาน",
      "Private Training 1:1 (60 นาที) หรือกลุ่มเล็ก",
      "VIP Support + Priority Q&A",
      "Templates/Presets Pro Pack",
      "Workshop พิเศษ / Live Q&A รายเดือน",
      "Certificate + Portfolio Review",
    ],
    cta: "สมัครคอร์สโปร 9,900 บาท",
    popular: true,
  },
];

const PricingSection = ({ onStartClick }: PricingSectionProps) => {
  const { t } = useI18n();
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("pricing_title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("pricing_desc")}
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
                  {index === 0 ? t("pricing_plan_standard") : t("pricing_plan_pro")}
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
                {index === 0 ? t("pricing_plan_standard_cta") : t("pricing_plan_pro_cta")}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          * ข้อเสนอเครดิตอาจเปลี่ยนตามนโยบาย Google/ภูมิภาค — กรุณาตรวจสอบหน้าโปรโมชันล่าสุด<br/>
          * ขณะนี้ยังไม่รองรับการออกใบกำกับภาษี
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
