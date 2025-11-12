import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "th" | "en";

type Translations = Record<string, Record<Lang, string>>;

const translations: Translations = {
  // Navbar / Auth
  navbar_login: { th: "สมัครเรียนผ่าน LINE", en: "Enroll via LINE" },
  navbar_logout: { th: "ออกจากระบบ", en: "Sign out" },
  auth_title: { th: "สมัครเรียน ZRENDER AI", en: "Enroll in ZRENDER AI" },
  auth_desc: {
    th: "เพื่อเข้าถึงบทเรียนและคู่มือสมาชิก โปรดสมัครผ่าน LINE",
    en: "To access lessons and member guides, please enroll via LINE",
  },
  auth_cta_line: { th: "สมัครเรียนผ่าน LINE", en: "Enroll via LINE" },

  // Hero
  hero_tagline: {
    th: "สอนใช้งานทีละขั้น + แนะแนวรับเครดิตเริ่มต้น $300 เพื่อเริ่มต้นแบบคุ้มค่า",
    en: "Step-by-step learning + guidance to get $300 starter credit",
  },
  hero_start: { th: "เริ่มเรียนรู้ฟรี", en: "Start learning free" },
  hero_view_credit: { th: "ดูวิธีรับเครดิต $300", en: "See how to get $300" },
  hero_line_cta: { th: "สมัครเรียนผ่าน LINE", en: "Enroll via LINE" },

  // Pricing
  pricing_title: { th: "สมัครคอร์สเรียน ZRENDER AI", en: "Enroll in ZRENDER AI course" },
  pricing_desc: {
    th: "จ่ายครั้งเดียว ใช้ความรู้และทรัพยากรได้ตลอด • แนะแนวรับเครดิตเริ่มต้น $300",
    en: "One-time payment • Lifetime resources • Guidance to get $300 starter credit",
  },
  pricing_plan_standard: { th: "คอร์สมาตรฐาน", en: "Standard Course" },
  pricing_plan_pro: { th: "คอร์สโปร (แนะนำ)", en: "Pro Course (Recommended)" },
  pricing_plan_standard_cta: { th: "สมัครคอร์ส 4,900 บาท", en: "Enroll Standard ฿4,900" },
  pricing_plan_pro_cta: { th: "สมัครคอร์สโปร 9,900 บาท", en: "Enroll Pro ฿9,900" },

  // Free Credits
  free_title: { th: "วิธีรับโบนัสเครดิตเริ่มต้น $300", en: "How to get $300 starter credit" },
  free_badge: {
    th: "ข้อเสนออาจเปลี่ยนตามภูมิภาค/นโยบาย – รายละเอียดขั้นตอนดูในคู่มือหลังเข้าสู่ระบบ",
    en: "Offer may vary by region/policy – full steps available in member guide",
  },
  free_cta_line: { th: "สมัครเรียนผ่าน LINE", en: "Enroll via LINE" },

  // Manual Highlights
  manual_title: { th: "สาระสำคัญจากคู่มือ ZRENDER AI", en: "Highlights from ZRENDER AI Manual" },
  manual_desc: {
    th: "โฟกัสเวิร์กโฟลว์และแนวทางปฏิบัติ: เรนเดอร์ Before–After, ปรับเฉพาะจุดด้วย Inpaint, Style Transfer, วิดีโอ และพื้นฐานวัสดุ",
    en: "Workflow focus: Before–After renders, inpaint edits, style transfer, video, and material basics",
  },
  manual_quickstart: { th: "Quickstart", en: "Quickstart" },
  manual_quickstart_desc: {
    th: "อัปโหลดภาพ → เลือกสไตล์ → ได้ 3 เวอร์ชัน พร้อม Before/After ในไม่กี่วินาที",
    en: "Upload → choose style → get 3 versions with Before/After in seconds",
  },
  manual_inpaint: { th: "Inpaint & Materials", en: "Inpaint & Materials" },
  manual_inpaint_desc: {
    th: "ปรับเฟอร์นิเจอร์/วัสดุ/แสงเฉพาะจุด และเข้าใจภาพรวม Maps (Diffuse, Bump, Reflection)",
    en: "Edit furniture/materials/lights in-place and understand maps (Diffuse, Bump, Reflection)",
  },
  manual_workflow: { th: "Workflow & Video", en: "Workflow & Video" },
  manual_workflow_desc: {
    th: "สรุปเวิร์กโฟลว์จากคู่มือ และสร้างวิดีโอไฮไลต์งานสำหรับโซเชียล/พอร์ตโฟลิโอ",
    en: "Workflow summary and create highlight videos for social/portfolio",
  },

  // Case Study
  case_title: { th: "กรณีศึกษาจริง", en: "Real Case Study" },
  case_subtitle: {
    th: "ฟรีแลนซ์อินทีเรียร์เริ่มจาก 0 → ส่งงานภายใน 48 ชม. ด้วยคอร์ส + ZRENDER AI",
    en: "Freelance interior from 0 → delivered in 48 hours with the course + ZRENDER AI",
  },
  case_problem_title: { th: "ปัญหา", en: "Problem" },
  case_problem_desc: {
    th: "เริ่มงานได้เร็วแต่ขาดเวิร์กโฟลว์ที่ชัดเจน ทำภาพเรนเดอร์ใช้เวลาหลายวันต่อโปรเจกต์ ส่งผลให้ตอบโจทย์ลูกค้าได้ช้าและปิดดีลยาก",
    en: "Started fast but lacked a clear workflow; rendering took days per project, slowing client response and making closing deals harder.",
  },
  case_steps_title: { th: "วิธีทำ 3 ขั้นตอน", en: "3-step method" },
  case_step1: {
    th: "ลงทะเบียนคอร์สมาตรฐาน → รับเวิร์กโฟลว์ + คู่มือ + Presets",
    en: "Enroll in the Standard course → get workflow + guide + presets",
  },
  case_step2: {
    th: "ตั้งค่า AI Studio + สร้าง API Key (เริ่มด้วยเครดิต $300)",
    en: "Set up AI Studio + create API Key (start with $300 credit)",
  },
  case_step3: {
    th: "สร้าง Before/After 3 เวอร์ชัน + ปรับเฉพาะจุดด้วย Inpaint",
    en: "Generate 3 Before/After versions + fine-tune with Inpaint",
  },
  case_results_title: { th: "ผลลัพธ์", en: "Results" },
  case_metric_time_label: { th: "เวลาทำงาน", en: "Work time" },
  case_metric_credit_label: { th: "เครดิตเริ่มต้น", en: "Starter credit" },
  case_metric_reduce_label: { th: "ลดเวลา", en: "Time reduced" },
  case_cta: { th: "ทำแบบนี้ให้ฉัน", en: "Do this for me" },

  // FAQ
  faq_title: { th: "คำถามที่พบบ่อย", en: "Frequently Asked Questions" },
  faq_subtitle: { th: "ทุกอย่างที่คุณอยากรู้เกี่ยวกับ ZRENDER AI", en: "Everything you want to know about ZRENDER AI" },
  faq_q1: { th: "คอร์สราคาเท่าไหร่ และแบบไหนบ้าง?", en: "How much does the course cost?" },
  faq_a1: { th: "มี 2 แพ็คเกจ: คอร์สมาตรฐาน ฿4,900 และคอร์สโปร ฿9,900 (จ่ายครั้งเดียว) ครอบคลุมเวิร์กโฟลว์เต็มรูปแบบและทรัพยากรที่จำเป็น", en: "Two packages: Standard ฿4,900 and Pro ฿9,900 (one-time payment). Includes full workflows and essential resources." },
  faq_q2: { th: "ชำระเงินอย่างไร?", en: "How do I pay?" },
  faq_a2: { th: "รองรับบัตรเครดิต/เดบิต, พร้อมเพย์, และโอนธนาคาร (ภายใต้นโยบายที่ระบุ)", en: "Supports credit/debit cards, PromptPay, and bank transfer (subject to policy)." },
  faq_q3: { th: "ออกใบกำกับภาษีได้หรือไม่?", en: "Can you issue a tax invoice?" },
  faq_a3: { th: "ขณะนี้ยังไม่รองรับการออกใบกำกับภาษี", en: "Currently not supported." },
  faq_q4: { th: "เครดิตเริ่มต้น $300 คืออะไร?", en: "What is the $300 starter credit?" },
  faq_a4: { th: "เรามีแนะแนวการสมัคร Free Trial เพื่อรับเครดิตเริ่มต้น $300 (เงื่อนไขข้อเสนออาจเปลี่ยนตามภูมิภาค/นโยบาย) และสอนตั้งค่า AI Studio + API Key", en: "We provide guidance for Free Trial to get $300 starter credit (offer varies by region/policy) and show how to set up AI Studio + API Key." },
  faq_q5: { th: "ต้องมีพื้นฐาน AI/3D ไหม?", en: "Do I need AI/3D background?" },
  faq_a5: { th: "ไม่จำเป็น หลักสูตรเริ่มจากพื้นฐานและพาไปสู่เวิร์กโฟลว์ระดับมืออาชีพทีละขั้น พร้อม Presets และ Cheatsheet", en: "No. The course starts from fundamentals and guides you to professional workflows step by step with presets and cheatsheets." },
  faq_q6: { th: "มีใบรับรองไหม?", en: "Is there a certificate?" },
  faq_a6: { th: "มีใบรับรองการจบหลักสูตรในรูปแบบดิจิทัลเมื่อทำงานตามเกณฑ์ที่กำหนด", en: "Yes. A digital certificate upon completing the required tasks." },
  faq_q7: { th: "เข้าถึงคอร์สและอัปเดตได้นานเท่าไหร่?", en: "How long can I access and receive updates?" },
  faq_a7: { th: "เข้าถึงคอร์สได้ต่อเนื่อง และได้รับอัปเดตคอร์สฟรีตลอดปี", en: "Lifetime access to course materials with free updates throughout the year." },
  faq_q8: { th: "มี Support ภาษาไทยไหม?", en: "Is Thai-language support available?" },
  faq_a8: { th: "มี! ทีมงานของเราตอบคำถามเป็นภาษาไทยวันจันทร์-ศุกร์ เวลา 9:00-18:00 น. ผ่าน Line, Email และ Chat", en: "Yes! Our team supports Thai Mon–Fri 9:00–18:00 via Line, Email, and Chat." },

  // Demo Strip
  demo_title: { th: "แสดงผลลัพธ์ที่น่าทึ่ง", en: "See impressive results" },
  demo_subtitle: { th: "เลื่อนเพื่อเปรียบเทียบภาพก่อนและหลังใช้ AI", en: "Slide to compare before and after with AI" },
  demo_caption1: { th: "Muji Living 34 วิ • 1 เครดิต", en: "Muji Living 34s • 1 credit" },
  demo_caption2: { th: "Tropical Facade 41 วิ • 1 เครดิต", en: "Tropical Facade 41s • 1 credit" },
  demo_caption3: { th: "Modern Interior 38 วิ • 1 เครดิต", en: "Modern Interior 38s • 1 credit" },
  demo_button: { th: "สร้างแบบนี้", en: "Create this" },

  // Use Cases
  usecase_title: { th: "ใครได้ประโยชน์อะไร", en: "Who benefits and how" },
  usecase1_title: { th: "เอเจนซียูนิตมือสอง", en: "Pre‑owned unit agencies" },
  usecase1_benefit: { th: "ทำภาพขายไวขึ้น 3×", en: "Sell faster ×3" },
  usecase1_desc: { th: "แปลงห้องเปล่าเป็นภาพ staging สวยงามในไม่กี่วินาที ทำให้ขายได้เร็วขึ้นและราคาดีขึ้น", en: "Turn empty rooms into staged images in seconds, improving speed and price." },
  usecase2_title: { th: "สตูดิโอสถาปัตย์", en: "Architecture studios" },
  usecase2_benefit: { th: "ลดรอบแก้คอนเซปต์ 50%", en: "Cut concept revisions by 50%" },
  usecase2_desc: { th: "นำเสนอแนวคิดหลายเวอร์ชันให้ลูกค้าได้เลือกเร็วขึ้น ลดเวลาแก้ไขกลับไปกลับมา", en: "Present multiple versions quickly so clients choose sooner." },
  usecase3_title: { th: "นักศึกษา/ผู้สอน", en: "Students/Teachers" },
  usecase3_benefit: { th: "ทำพอร์ต/ตัวอย่างในคลิกเดียว", en: "Build portfolio/examples in one click" },
  usecase3_desc: { th: "สร้างภาพประกอบงานนำเสนอและพอร์ตโฟลิโอได้อย่างรวดเร็ว ประหยัดเวลาและค่าใช้จ่าย", en: "Create presentation visuals and portfolios quickly, saving time and cost." },
  usecase_button: { th: "เริ่มแบบนี้", en: "Start like this" },

  // Feature Grid
  feature_title: { th: "ฟีเจอร์ครบครัน", en: "Full-featured" },
  feature_subtitle: { th: "เครื่องมือที่คุณต้องการในที่เดียว", en: "All tools you need in one place" },
  feature_recommended: { th: "แนะนำ", en: "Recommended" },
  feature_auto_staging_title: { th: "Auto Staging", en: "Auto Staging" },
  feature_auto_staging_desc: { th: "จัดวางเฟอร์นิเจอร์และของตแต่งอัตโนมัติ", en: "Auto place furniture and decor" },
  feature_extint_title: { th: "Exterior/Interior Render", en: "Exterior/Interior Render" },
  feature_extint_desc: { th: "เรนเดอร์ทั้งภายในและภายนอกอาคาร", en: "Render both interior and exterior" },
  feature_editor_title: { th: "Editor (Inpaint)", en: "Editor (Inpaint)" },
  feature_editor_desc: { th: "แก้ไขรายละเอียดเฉพาะจุดที่ต้องการ", en: "Edit specific areas precisely" },
  feature_video_title: { th: "Video", en: "Video" },
  feature_video_desc: { th: "สร้างวิดีโอ walkthrough", en: "Create walkthrough videos" },
  feature_style_transfer_title: { th: "Style Transfer", en: "Style Transfer" },
  feature_style_transfer_desc: { th: "เปลี่ยนสไตล์การตกแต่งแบบต่างๆ", en: "Change decoration styles" },
  feature_floorplan_title: { th: "Floorplan", en: "Floorplan" },
  feature_floorplan_desc: { th: "แปลงผังพื้นเป็นภาพ 3D", en: "Convert plans to 3D images" },
  feature_photo_match_title: { th: "Photo Match", en: "Photo Match" },
  feature_photo_match_desc: { th: "จับคู่สไตล์จากรูปอ้างอิง", en: "Match styles from reference images" },

  // Tutorial
  tutorial_title: { th: "บทเรียนแบบลงมือทำ", en: "Hands-on tutorials" },
  tutorial_desc: { th: "ทำตามทีละขั้น ตั้งแต่อัปโหลดภาพต้นทาง → เลือกสไตล์ → ปรับเฉพาะจุดด้วย Inpaint → ส่งออกไฟล์คุณภาพงานจริง", en: "Follow step-by-step: upload source image → choose style → fine-tune with Inpaint → export production-quality file" },
  tutorial_pt1: { th: "เริ่มแบบเร็ว: อัปโหลดห้องเปล่า → เลือกสไตล์ → ได้ Before/After 3 เวอร์ชัน", en: "Quickstart: upload empty room → choose style → get 3 Before/After versions" },
  tutorial_pt2: { th: "Inpaint สำหรับเฟอร์นิเจอร์/วัสดุ/แสง ให้ตรงโจทย์ลูกค้า", en: "Inpaint furniture/materials/lights for client-fit" },
  tutorial_pt3: { th: "Upscale + Export เพื่อพรีเซนต์/ส่งงาน", en: "Upscale + Export for presentation/delivery" },
  tutorial_pt4: { th: "สร้างวิดีโอไฮไลต์งานสำหรับโซเชียล/พอร์ตโฟลิโอ", en: "Create highlight videos for social/portfolio" },

  // Final CTA & Footer
  final_cta_title: { th: "สร้าง Before/After แรกของคุณใน 60 วิ", en: "Create your first Before/After in 60 seconds" },
  final_cta_desc: { th: "เริ่มใช้งานฟรี ไม่ต้องใส่บัตร ได้ 20 เครดิตทันที", en: "Start free, no card required, get 20 credits instantly" },
  final_cta_button: { th: "เริ่มใช้งานเลย", en: "Start now" },
  fab_upload_first: { th: "อัปโหลดรูปแรก", en: "Upload first image" },
  footer_tagline: { th: "เรนเดอร์ก่อน–หลังใน 60 วิ ด้วยพลัง AI", en: "Before–After in 60s powered by AI" },
  footer_rights: { th: "© 2025 ZRENDER AI. สงวนลิขสิทธิ์.", en: "© 2025 ZRENDER AI. All rights reserved." },
};

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof translations) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return (saved as Lang) || "th";
  });

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const t = useMemo(() => {
    return (key: keyof typeof translations) => translations[key][lang] || translations[key]["th"];
  }, [lang]);

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};