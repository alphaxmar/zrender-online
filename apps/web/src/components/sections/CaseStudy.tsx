import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap, TrendingUp } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import { useI18n } from "@/lib/i18n";

interface CaseStudyProps {
  onCreateClick: () => void;
}

const CaseStudy = ({ onCreateClick }: CaseStudyProps) => {
  const { t } = useI18n();
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("case_title")}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("case_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Story */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {t("case_problem_title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("case_problem_desc")}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {t("case_steps_title")}
                </h3>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      1
                    </span>
                    <span className="text-muted-foreground">
                      {t("case_step1")}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      2
                    </span>
                    <span className="text-muted-foreground">
                      {t("case_step2")}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      3
                    </span>
                    <span className="text-muted-foreground">
                      {t("case_step3")}
                    </span>
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {t("case_results_title")}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <Clock className="h-6 w-6 text-primary mb-2" />
                    <p className="text-2xl font-bold text-foreground">60 วิ</p>
                    <p className="text-sm text-muted-foreground">{t("case_metric_time_label")}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <Zap className="h-6 w-6 text-primary mb-2" />
                    <p className="text-2xl font-bold text-foreground">$300</p>
                    <p className="text-sm text-muted-foreground">{t("case_metric_credit_label")}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <TrendingUp className="h-6 w-6 text-primary mb-2" />
                    <p className="text-2xl font-bold text-foreground">70%</p>
                    <p className="text-sm text-muted-foreground">{t("case_metric_reduce_label")}</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={onCreateClick}
                size="lg"
                className="w-full"
              >
                {t("case_cta")}
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
