import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { AppShell, PageHeader } from "@/components/vigia/AppShell";
import { ApprovalCard } from "@/components/vigia/ApprovalCard";
import { useLanguage } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vigia — Your autonomous AI life assistant" },
      {
        name: "description",
        content:
          "Vigia works quietly across your email, calendar and accounts, handling the small things and asking before anything that matters.",
      },
      { property: "og:title", content: "Vigia — Your autonomous AI life assistant" },
      {
        property: "og:description",
        content:
          "Vigia works quietly in the background and asks for approval only when a decision matters.",
      },
    ],
  }),
  component: Today,
});

type LocalizedApproval = {
  id: string;
  title: string;
  intent: string;
  channel: string;
  recipient: string;
  risk: "low" | "medium" | "high";
  confidence: number;
  createdAt: string;
  expiresInMinutes: number;
  reasoning: string[];
  draft: string;
  sideEffects: string[];
};

function Today() {
  const { t, locale } = useLanguage();
  const [items, setItems] = useState<LocalizedApproval[]>(() =>
    t.data.approvals.map((a, i) => ({
      id: `apr_${i}`,
      ...a,
      channel: ["Calendar", "Gmail", "Banking"][i] as string,
      risk: ["medium", "low", "high"][i] as "low" | "medium" | "high",
      confidence: [0.94, 0.98, 0.86][i],
      createdAt: "6 min ago",
      expiresInMinutes: [54, 180, 300][i],
    }))
  );
  const resolve = (id: string) => setItems((prev) => prev.filter((a) => a.id !== id));

  return (
    <AppShell badge={items.length}>
      <div className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
        <PageHeader
          eyebrow={t.home.eyebrow}
          title={t.home.title}
          description={t.home.description}
        />

        <div
          className="mt-9 grid animate-rise grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border glass hairline"
          style={{ animationDelay: "80ms" }}
        >
          {[
            { label: t.home.handledQuietly, value: "41" },
            { label: t.home.needsYou, value: String(items.length) },
            { label: t.home.timeSaved, value: "2h 15m" },
          ].map((s) => (
            <div key={s.label} className="px-5 py-4">
              <p className="font-serif text-[1.75rem] leading-none tracking-tight text-foreground">
                {s.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl tracking-tight text-foreground">{t.home.waitingOnYou}</h2>
            <Link
              to="/approvals"
              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
            >
              {t.home.seeAll} <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-5 space-y-4">
            {items.length ? (
              items.map((a, i) => (
                <ApprovalCard key={a.id} approval={a} index={i} onResolve={resolve} />
              ))
            ) : (
              <div className="animate-rise rounded-2xl border border-border glass p-12 text-center">
                <Sparkles className="mx-auto size-5 text-primary" />
                <p className="mt-3 font-serif text-xl text-foreground">{t.home.allClear}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.home.allClearHint}
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-serif text-2xl tracking-tight text-foreground">{t.home.handledQuietly}</h2>
          <ul className="mt-5 space-y-1">
            {t.data.activity
              .filter((a) => a.day === "Today")
              .map((a, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-accent/50"
                >
                  <span className="w-12 shrink-0 pt-0.5 text-xs tabular-nums text-muted-foreground">
                    {["09:41", "09:04", "08:26"][i] ?? "09:00"}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-foreground">{a.title}</span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{a.detail}</span>
                  </span>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </AppShell>
  );
}
