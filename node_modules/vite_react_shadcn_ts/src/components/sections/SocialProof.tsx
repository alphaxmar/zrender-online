import { Star } from "lucide-react";

const testimonials = [
  {
    text: "ตอนแรกคิดว่าต้องใช้เวลานานมาก แต่ได้ภาพ render คุณภาพสูงภายใน 1 นาที ประทับใจมาก!",
    author: "คุณสมชาย ธ.",
    role: "สถาปนิก",
    rating: 5
  },
  {
    text: "ช่วยงานเราได้มากเลย ตอนนี้ทำภาพ staging ขายบ้านได้เร็วขึ้นเยอะ ราคาก็ดีขึ้นด้วย",
    author: "คุณนิดา ว.",
    role: "นายหน้าอสังหาฯ",
    rating: 5
  },
  {
    text: "เครื่องมือที่นักศึกษาสถาปัตย์ทุกคนต้องมี ทำงานนำเสนอได้เร็วมากขึ้น",
    author: "คุณปิยะ ส.",
    role: "นักศึกษาสถาปัตย์",
    rating: 5
  }
];

const logos = [
  { name: "มหาวิทยาลัยธรรมศาสตร์", width: "120px" },
  { name: "จุฬาลงกรณ์มหาวิทยาลัย", width: "100px" },
  { name: "มหาวิทยาลัยเกษตรศาสตร์", width: "110px" },
  { name: "มหาวิทยาลัยศิลปากร", width: "90px" },
  { name: "สมาคมสถาปนิกสยาม", width: "100px" },
  { name: "สภาสถาปนิก", width: "95px" }
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            สตูดิโอและมหาวิทยาลัยไว้วางใจ
          </h2>
          <p className="text-xl text-muted-foreground">
            1,200+ โปรเจกต์ทั่วประเทศ
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16 opacity-60">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="h-12 flex items-center justify-center text-muted-foreground font-semibold"
              style={{ minWidth: logo.width }}
            >
              {logo.name}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-background border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
