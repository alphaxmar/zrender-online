# ZRENDER Online

โปรเจกต์ monorepo ที่รวม zrender-ai-frontend และ zrender-ai-app เป็นโปรเจกต์เดียวบน Cloudflare Pages

## 🏗️ โครงสร้างโปรเจกต์

```
zrender-online/
├── apps/
│   └── web/                 # Frontend (Lovable + Supabase Auth)
│       ├── src/
│       ├── public/
│       └── package.json
├── edge/
│   └── functions/           # Cloudflare Pages Functions
│       ├── render.ts        # POST /api/render (proxy + หักเครดิต)
│       ├── referral.ts      # POST /api/referral
│       ├── feedback.ts      # POST /api/feedback
│       ├── analytics.ts     # POST /api/analytics
│       └── _utils.ts        # Utility functions
├── wrangler.toml           # Cloudflare configuration
├── package.json            # Root scripts
└── .env.example           # Environment variables template
```

## 🚀 การติดตั้งและพัฒนา

### 1. ติดตั้ง Dependencies

```bash
# ติดตั้ง dependencies ทั้งหมด
npm run install:all

# หรือติดตั้งแยก
npm install
cd apps/web && npm install
```

### 2. ตั้งค่า Environment Variables

```bash
# Copy และแก้ไขไฟล์ environment
cp .env.example .env.local
cp apps/web/.env.example apps/web/.env.local

# ตั้งค่า Cloudflare secrets (สำหรับ production)
wrangler secret put SUPABASE_SERVICE_ROLE_KEY
```

### 3. Development

```bash
# Build และรัน development server
npm run dev:build

# หรือ build แล้วรันแยก
npm run build:pages
npm run dev
```

## 📦 การ Deploy

### 1. เตรียม Cloudflare Project

```bash
# Login to Cloudflare
wrangler login

# สร้าง Pages project (ครั้งแรก)
wrangler pages project create zrender-online
```

### 2. ตั้งค่า Secrets

```bash
# ตั้งค่า secrets สำหรับ production
wrangler secret put SUPABASE_SERVICE_ROLE_KEY --env production
```

### 3. Deploy

```bash
# Deploy to production
npm run deploy:production

# หรือ deploy แยกขั้นตอน
npm run build
npm run deploy
```

## 🧪 Smoke Test Checklist

หลังจาก deploy แล้ว ให้ทดสอบฟีเจอร์หลักดังนี้:

### ✅ Frontend Tests
- [ ] เว็บไซต์โหลดได้ปกติ
- [ ] Supabase Auth ทำงานได้ (Login/Logout)
- [ ] UI components แสดงผลถูกต้อง
- [ ] Responsive design ทำงานบนมือถือ

### ✅ API Tests
- [ ] **POST /api/render** - ทดสอบการเรนเดอร์ภาพ
  ```bash
  curl -X POST https://your-domain.pages.dev/api/render \
    -H "Authorization: Bearer YOUR_TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"feature":"interior","payload":{"style":"modern"}}'
  ```

- [ ] **POST /api/referral** - ทดสอบระบบ referral
  ```bash
  curl -X POST https://your-domain.pages.dev/api/referral \
    -H "Authorization: Bearer YOUR_TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"referral_code":"TEST123"}'
  ```

- [ ] **POST /api/feedback** - ทดสอบการส่ง feedback
  ```bash
  curl -X POST https://your-domain.pages.dev/api/feedback \
    -H "Authorization: Bearer YOUR_TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"type":"bug","message":"Test feedback"}'
  ```

- [ ] **POST /api/analytics** - ทดสอบการบันทึก analytics
  ```bash
  curl -X POST https://your-domain.pages.dev/api/analytics \
    -H "Authorization: Bearer YOUR_TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"events":[{"name":"test_event","data":{"test":true}}]}'
  ```

### ✅ Integration Tests
- [ ] Credit system ทำงานได้ (หักเครดิตเมื่อใช้งาน)
- [ ] Backend proxy ต่อไปยัง Google AI Studio ได้
- [ ] Error handling ทำงานถูกต้อง
- [ ] CORS headers ตั้งค่าถูกต้อง

### ✅ Performance Tests
- [ ] Page load time < 3 วินาที
- [ ] API response time < 5 วินาที
- [ ] Images และ assets โหลดเร็ว

## 🔧 การแก้ไขปัญหา

### ปัญหาที่พบบ่อย

1. **Edge Functions ไม่ทำงาน**
   - ตรวจสอบ `wrangler.toml` configuration
   - ตรวจสอบ environment variables
   - ดู logs ใน Cloudflare Dashboard

2. **Supabase Auth ไม่ทำงาน**
   - ตรวจสอบ SUPABASE_URL และ ANON_KEY
   - ตรวจสอบ CORS settings ใน Supabase

3. **Backend proxy error**
   - ตรวจสอบ RENDER_BACKEND_URL
   - ตรวจสอบ network connectivity
   - ตรวจสอบ backend service status

### Logs และ Monitoring

```bash
# ดู logs ของ Pages Functions
wrangler pages deployment tail

# ดู logs แบบ real-time
wrangler pages deployment tail --follow
```

## 📚 เอกสารเพิ่มเติม

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions/)
- [Supabase Documentation](https://supabase.com/docs)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)

## 🤝 การพัฒนา

### Scripts ที่สำคัญ

```bash
npm run dev:build      # Build และรัน dev server
npm run build         # Build production
npm run deploy        # Deploy to Cloudflare
npm run clean         # ลบ node_modules และ build files
npm run type-check    # ตรวจสอบ TypeScript
npm run lint          # ตรวจสอบ code style
```

### Git Workflow

1. สร้าง feature branch จาก `main`
2. พัฒนาและทดสอบใน local
3. รัน smoke tests
4. สร้าง Pull Request
5. Deploy หลังจาก merge

---

**หมายเหตุ:** โปรเจกต์นี้ใช้ Cloudflare Pages + Functions เป็น infrastructure หลัก และเชื่อมต่อกับ Supabase สำหรับ authentication และ database