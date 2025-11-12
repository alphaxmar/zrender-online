import { Sparkles, Home, PenTool, Video, Shuffle, MapPin, Image } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

const featuresBase = [
  { icon: Sparkles, titleKey: "feature_auto_staging_title", descKey: "feature_auto_staging_desc", recommended: true },
  { icon: Home, titleKey: "feature_extint_title", descKey: "feature_extint_desc" },
  { icon: PenTool, titleKey: "feature_editor_title", descKey: "feature_editor_desc" },
  { icon: Video, titleKey: "feature_video_title", descKey: "feature_video_desc" },
  { icon: Shuffle, titleKey: "feature_style_transfer_title", descKey: "feature_style_transfer_desc" },
  { icon: MapPin, titleKey: "feature_floorplan_title", descKey: "feature_floorplan_desc" },
  { icon: Image, titleKey: "feature_photo_match_title", descKey: "feature_photo_match_desc" },
];

const FeatureGrid = () => {
  const { t } = useI18n();
  const features = featuresBase.map(f => ({ ...f, title: t(f.titleKey as any), description: t(f.descKey as any) }));
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("feature_title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("feature_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] group"
            >
              {feature.recommended && (
                <Badge className="absolute -top-3 right-4 bg-primary text-primary-foreground">
                  {t("feature_recommended")}
                </Badge>
              )}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
