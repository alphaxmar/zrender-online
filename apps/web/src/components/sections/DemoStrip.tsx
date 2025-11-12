import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";
import { useI18n } from "@/lib/i18n";

interface DemoStripProps {
  onCreateClick: () => void;
}

const demosBase = [
  { before: before1, after: after1, captionKey: "demo_caption1" },
  { before: before2, after: after2, captionKey: "demo_caption2" },
  { before: before3, after: after3, captionKey: "demo_caption3" },
];

const DemoStrip = ({ onCreateClick }: DemoStripProps) => {
  const { t } = useI18n();
  const demos = demosBase.map(d => ({ ...d, caption: t(d.captionKey as any) }));
  return (
    <section id="examples" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("demo_title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("demo_subtitle")}
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
                  {t("demo_button")}
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
