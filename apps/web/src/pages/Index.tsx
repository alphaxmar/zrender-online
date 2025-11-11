import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import DemoStrip from "@/components/sections/DemoStrip";
import UseCaseCards from "@/components/sections/UseCaseCards";
import FeatureGrid from "@/components/sections/FeatureGrid";
import SocialProof from "@/components/sections/SocialProof";
import PricingSection from "@/components/sections/PricingSection";
import CaseStudy from "@/components/sections/CaseStudy";
import FAQSection from "@/components/sections/FAQSection";
import TutorialSection from "@/components/sections/TutorialSection";
import FreeCreditsSection from "@/components/sections/FreeCreditsSection";
import { Button } from "@/components/ui/button";
import { LogOut, Upload } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isRendering, setIsRendering] = useState(false);


  const handleStartRendering = async () => {
    // Check if user is logged in
    if (!user) {
      toast({
        title: "กรุณาเข้าสู่ระบบ",
        description: "คุณต้องเข้าสู่ระบบก่อนใช้งาน",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }

    setIsRendering(true);
    try {
      const { data, error } = await supabase.functions.invoke('api-proxy', {
        body: { path: '/' }
      });

      if (error) {
        toast({
          title: "เกิดข้อผิดพลาด",
          description: "ไม่สามารถเชื่อมต่อกับระบบสร้างภาพได้",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "เชื่อมต่อสำเร็จ",
        description: "ระบบพร้อมสร้างภาพ",
      });
      
      console.log('Backend response:', data);
    } catch (err) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: "โปรดลองใหม่อีกครั้ง",
        variant: "destructive",
      });
    } finally {
      setIsRendering(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "เกิดข้อผิดพลาด",
        description: error.message,
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "ออกจากระบบสำเร็จ",
      description: "แล้วพบกันใหม่",
    });
    navigate('/auth');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar>
        {user ? (
          <Button
            variant="outline"
            onClick={handleSignOut}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            ออกจากระบบ
          </Button>
        ) : (
          <Button
            variant="default"
            onClick={() => navigate('/auth')}
            className="gap-2"
          >
            เข้าสู่ระบบ
          </Button>
        )}
      </Navbar>

      {/* Hero Section */}
      <HeroSection 
        onStartClick={handleStartRendering}
        isProcessing={isRendering}
      />

      {/* Demo Strip */}
      <DemoStrip onCreateClick={handleStartRendering} />

      {/* Use Case Cards */}
      <UseCaseCards onStartClick={handleStartRendering} />

      {/* Feature Grid */}
      <FeatureGrid />

      {/* Social Proof */}
      <SocialProof />

      {/* Tutorial & Free Credits */}
      <TutorialSection />
      <FreeCreditsSection />

      {/* Pricing */}
      <PricingSection onStartClick={handleStartRendering} />

      {/* Case Study */}
      <CaseStudy onCreateClick={handleStartRendering} />

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            สร้าง Before/After แรกของคุณใน 60 วิ
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            เริ่มใช้งานฟรี ไม่ต้องใส่บัตร ได้ 20 เครดิตทันที
          </p>
          <Button 
            size="lg"
            onClick={handleStartRendering}
            disabled={isRendering}
            className="text-lg px-10 py-7 shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          >
            {isRendering ? "กำลังเชื่อมต่อ..." : "เริ่มใช้งานเลย"}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground space-y-2">
            <p className="font-semibold text-foreground">ZRENDER AI</p>
            <p className="text-sm">เรนเดอร์ก่อน–หลังใน 60 วิ ด้วยพลัง AI</p>
            <p className="text-sm">&copy; 2025 ZRENDER AI. สงวนลิขสิทธิ์.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (FAB) */}
      {!user && (
        <Button
          onClick={handleStartRendering}
          disabled={isRendering}
          className="fixed bottom-6 right-6 h-14 rounded-full shadow-2xl hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] z-50"
          size="lg"
        >
          <Upload className="mr-2 h-5 w-5" />
          อัปโหลดรูปแรก
        </Button>
      )}
    </div>
  );
};

export default Index;
