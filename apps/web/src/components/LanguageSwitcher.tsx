import { useI18n } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div className="flex items-center gap-2">
      <button
        className={`px-3 py-1 rounded-md text-sm ${lang === "th" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
        onClick={() => setLang("th")}
        aria-pressed={lang === "th"}
      >
        ไทย
      </button>
      <button
        className={`px-3 py-1 rounded-md text-sm ${lang === "en" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}