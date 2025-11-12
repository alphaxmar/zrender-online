import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, GraduationCap, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface UseCaseCardsProps {
  onStartClick: () => void;
}

const useCasesBase = [
  { icon: Building2, titleKey: "usecase1_title", benefitKey: "usecase1_benefit", descKey: "usecase1_desc", color: "from-primary/10 to-primary/5" },
  { icon: TrendingUp, titleKey: "usecase2_title", benefitKey: "usecase2_benefit", descKey: "usecase2_desc", color: "from-accent/10 to-accent/5" },
  { icon: GraduationCap, titleKey: "usecase3_title", benefitKey: "usecase3_benefit", descKey: "usecase3_desc", color: "from-secondary/20 to-secondary/5" },
];

const UseCaseCards = ({ onStartClick }: UseCaseCardsProps) => {
  const { t } = useI18n();
  const useCases = useCasesBase.map(u => ({
    ...u,
    title: t(u.titleKey as any),
    benefit: t(u.benefitKey as any),
    description: t(u.descKey as any),
  }));
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("usecase_title")}
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
                {t("usecase_button")}
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
