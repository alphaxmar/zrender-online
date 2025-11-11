import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

export default function AcademyCredits() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [html, setHtml] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const run = async () => {
      if (loading) return;
      if (!user) {
        navigate("/auth");
        return;
      }
      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData?.session?.access_token;
      try {
        const r = await fetch("/academy/credits-guide", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        if (!r.ok) {
          setError("ไม่สามารถโหลดคู่มือได้ กรุณาลองใหม่");
          return;
        }
        const text = await r.text();
        setHtml(text);
      } catch (e) {
        setError("เกิดข้อผิดพลาดในการเชื่อมต่อ");
      }
    };
    run();
  }, [user, loading, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">คู่มือรับเครดิต $300</h1>
        {error && (
          <p className="text-destructive mb-6">{error}</p>
        )}
        {!error && html && (
          <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    </div>
  );
}