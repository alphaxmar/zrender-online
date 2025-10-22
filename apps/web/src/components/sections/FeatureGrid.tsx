import { Sparkles, Home, PenTool, Video, Shuffle, MapPin, Image } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Sparkles,
    title: "Auto Staging",
    description: "จัดวางเฟอร์นิเจอร์และของตแต่งอัตโนมัติ",
    recommended: true
  },
  {
    icon: Home,
    title: "Exterior/Interior Render",
    description: "เรนเดอร์ทั้งภายในและภายนอกอาคาร"
  },
  {
    icon: PenTool,
    title: "Editor (Inpaint)",
    description: "แก้ไขรายละเอียดเฉพาะจุดที่ต้องการ"
  },
  {
    icon: Video,
    title: "Video",
    description: "สร้างวิดีโอ walkthrough"
  },
  {
    icon: Shuffle,
    title: "Style Transfer",
    description: "เปลี่ยนสไตล์การตกแต่งแบบต่างๆ"
  },
  {
    icon: MapPin,
    title: "Floorplan",
    description: "แปลงผังพื้นเป็นภาพ 3D"
  },
  {
    icon: Image,
    title: "Photo Match",
    description: "จับคู่สไตล์จากรูปอ้างอิง"
  }
];

const FeatureGrid = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ฟีเจอร์ครบครัน
          </h2>
          <p className="text-xl text-muted-foreground">
            เครื่องมือที่คุณต้องการในที่เดียว
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
                  แนะนำ
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
