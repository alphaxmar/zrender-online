import { CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function TutorialSection() {
  const { t } = useI18n();
  return (
    <section id="tutorial" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t("tutorial_title")}
        </h2>
        <p className="text-muted-foreground mb-10">
          {t("tutorial_desc")}
        </p>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            {t("tutorial_pt1")}
          </li>
          <li className="flex gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            {t("tutorial_pt2")}
          </li>
          <li className="flex gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            {t("tutorial_pt3")}
          </li>
          <li className="flex gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            {t("tutorial_pt4")}
          </li>
        </ul>
      </div>
    </section>
  );
}