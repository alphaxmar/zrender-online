import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "คอร์สราคาเท่าไหร่ และแบบไหนบ้าง?",
    answer: "มี 2 แพ็คเกจ: คอร์สมาตรฐาน ฿4,900 และคอร์สโปร ฿9,900 (จ่ายครั้งเดียว) ครอบคลุมเวิร์กโฟลว์เต็มรูปแบบและทรัพยากรที่จำเป็น"
  },
  {
    question: "ชำระเงินอย่างไร?",
    answer: "รองรับบัตรเครดิต/เดบิต, พร้อมเพย์, และโอนธนาคาร (ภายใต้นโยบายที่ระบุ)"
  },
  {
    question: "ออกใบกำกับภาษีได้หรือไม่?",
    answer: "ขณะนี้ยังไม่รองรับการออกใบกำกับภาษี"
  },
  {
    question: "เครดิตเริ่มต้น $300 คืออะไร?",
    answer: "เรามีแนะแนวการสมัคร Free Trial เพื่อรับเครดิตเริ่มต้น $300 (เงื่อนไขข้อเสนออาจเปลี่ยนตามภูมิภาค/นโยบาย) และสอนตั้งค่า AI Studio + API Key"
  },
  {
    question: "ต้องมีพื้นฐาน AI/3D ไหม?",
    answer: "ไม่จำเป็น หลักสูตรเริ่มจากพื้นฐานและพาไปสู่เวิร์กโฟลว์ระดับมืออาชีพทีละขั้น พร้อม Presets และ Cheatsheet"
  },
  {
    question: "มีใบรับรองไหม?",
    answer: "มีใบรับรองการจบหลักสูตรในรูปแบบดิจิทัลเมื่อทำงานตามเกณฑ์ที่กำหนด"
  },
  {
    question: "เข้าถึงคอร์สและอัปเดตได้นานเท่าไหร่?",
    answer: "เข้าถึงคอร์สได้ต่อเนื่อง และได้รับอัปเดตคอร์สฟรีตลอดปี"
  },
  {
    question: "มี Support ภาษาไทยไหม?",
    answer: "มี! ทีมงานของเราตอบคำถามเป็นภาษาไทยวันจันทร์-ศุกร์ เวลา 9:00-18:00 น. ผ่าน Line, Email และ Chat"
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              คำถามที่พบบ่อย
            </h2>
            <p className="text-xl text-muted-foreground">
              ทุกอย่างที่คุณอยากรู้เกี่ยวกับ ZRENDER AI
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
