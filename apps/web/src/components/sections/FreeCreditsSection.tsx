import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

export default function FreeCreditsSection() {
  const navigate = useNavigate();
  const { t } = useI18n();
  return (
    <section id="free-credits" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t("free_title")}
        </h2>
        <Badge variant="secondary" className="mb-6">
          {t("free_badge")}
        </Badge>

        <div className="text-muted-foreground mb-8">
          รับเครดิตเริ่มต้นอย่างถูกต้อง พร้อมคู่มือทีละขั้นและข้อควรระวังในการใช้งานคลาวด์
        </div>
        <button
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90"
          onClick={() => navigate("/academy/credits")}
        >
          {t("free_cta_line")}
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}