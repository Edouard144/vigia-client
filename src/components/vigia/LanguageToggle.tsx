import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage, type Locale } from "@/lib/i18n";

const languages: { locale: Locale; label: string; flag: string; native: string }[] = [
  { locale: "en", label: "English", flag: "🇬🇧", native: "EN" },
  { locale: "pt", label: "Portugues", flag: "🇧🇷", native: "PT" },
];

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = languages.find((l) => l.locale === locale)!;

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-xl p-2 text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
        aria-label="Change language"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <Globe className="size-4" />
      </button>

      {open && (
        <div className="absolute bottom-full left-1/2 z-50 mb-2 w-44 -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-card p-1.5 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-2 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.locale}
              type="button"
              onClick={() => {
                setLocale(lang.locale);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                locale === lang.locale
                  ? "bg-primary/15 text-primary"
                  : "text-foreground/70 hover:bg-accent hover:text-foreground"
              }`}
            >
              <span className="text-lg leading-none">{lang.flag}</span>
              <span className="flex flex-col items-start leading-tight">
                <span>{lang.label}</span>
                <span className="text-[10px] text-muted-foreground">{lang.native}</span>
              </span>
              {locale === lang.locale && (
                <span className="ml-auto size-1.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
