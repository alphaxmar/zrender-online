import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18n } from '@/lib/i18n';

const Auth = () => {
  const { t } = useI18n();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">{t('auth_title')}</CardTitle>
          <CardDescription className="text-center">
            {t('auth_desc')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            แอดไลน์ <strong>@hjs2209n</strong> หรือกดปุ่มด้านล่างเพื่อสมัครเรียนและรับสิทธิ์เข้าถึงเนื้อหา
          </p>
          <Button className="w-full" onClick={() => window.open('https://lin.ee/8ttXIxK', '_blank')}>
            {t('auth_cta_line')}
          </Button>

          {/* Course Intro Video */}
          <div className="rounded-2xl border border-border bg-card p-2">
            <div className="relative pt-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/HkVwlMjoaQM"
                title="ZRender AI ทำอะไรได้บ้าง"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
