import { Lightbulb, ListChecks, Wand2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function ManualHighlightsSection() {
  const { t } = useI18n();
  return (
    <section id="manual-highlights" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          {t("manual_title")}
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          {t("manual_desc")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border-2 border-border bg-card">
            <Wand2 className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold mt-4">{t("manual_quickstart")}</h3>
            <p className="text-muted-foreground mt-2">{t("manual_quickstart_desc")}</p>
          </div>

          <div className="p-8 rounded-2xl border-2 border-border bg-card">
            <ListChecks className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold mt-4">{t("manual_inpaint")}</h3>
            <p className="text-muted-foreground mt-2">{t("manual_inpaint_desc")}</p>
          </div>

          <div className="p-8 rounded-2xl border-2 border-border bg-card">
            <Lightbulb className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold mt-4">{t("manual_workflow")}</h3>
            <p className="text-muted-foreground mt-2">{t("manual_workflow_desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}