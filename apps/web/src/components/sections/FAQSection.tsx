import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ลิขสิทธิ์ของภาพที่สร้างเป็นของใคร?",
    answer: "ภาพที่สร้างด้วย ZRENDER AI เป็นของคุณ 100% สามารถนำไปใช้ในเชิงพาณิชย์ได้ทันที (สำหรับแพ็คเกจ Pro และ Studio)"
  },
  {
    question: "ข้อมูลและภาพของฉันปลอดภัยหรือไม่?",
    answer: "เราใช้ระบบเข้ารหัสข้อมูล (SSL/TLS) และเก็บข้อมูลบนเซิร์ฟเวอร์ที่ปลอดภัย ภาพของคุณจะไม่ถูกนำไปใช้เพื่อ train model หรือแชร์ให้บุคคลที่สาม"
  },
  {
    question: "ใช้ข้อมูลของฉันเพื่อ train AI หรือไม่?",
    answer: "ไม่ เราไม่ใช้ภาพหรือข้อมูลของลูกค้าเพื่อ train model AI รับประกันความเป็นส่วนตัว 100%"
  },
  {
    question: "ลบลายน้ำได้อย่างไร?",
    answer: "อัปเกรดเป็นแพ็คเกจ Pro หรือ Studio ภาพที่สร้างจะไม่มีลายน้ำและสามารถดาวน์โหลดในคุณภาพสูงได้ทันที"
  },
  {
    question: "เครดิตคืออะไร และใช้เท่าไหร่?",
    answer: "เครดิตคือหน่วยในการใช้งาน 1 เครดิต = 1 ภาพ render โดย Free plan ได้ 20 เครดิต, Pro plan ได้ 200 เครดิต/เดือน, และ Studio plan ไม่จำกัด"
  },
  {
    question: "การชำระเงินและขอใบกำกับภาษี",
    answer: "รับชำระผ่านบัตรเครดิต, พร้อมเพย์, และโอนธนาคาร สามารถขอใบกำกับภาษีได้ทุกการชำระเงิน ระบบจะส่งให้อัตโนมัติทางอีเมล"
  },
  {
    question: "ยกเลิกแพ็คเกจได้ไหม?",
    answer: "ยกเลิกได้ทุกเมื่อ ไม่มีค่าปรับ แต่เครดิตที่เหลือจะหมดอายุเมื่อสิ้นสุดรอบบิล"
  },
  {
    question: "มี Support ภาษาไทยไหม?",
    answer: "มี! ทีมงานของเราตอบคำถามเป็นภาษาไทยทุกวันจันทร์-ศุกร์ เวลา 9:00-18:00 น. ผ่าน Line, Email และ Chat"
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
