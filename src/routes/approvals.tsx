import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { AppShell, PageHeader } from "@/components/vigia/AppShell";
import { ApprovalCard } from "@/components/vigia/ApprovalCard";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/approvals")({
  head: () => ({
    meta: [
      { title: "Approvals — Vigia" },
      {
        name: "description",
        content:
          "Review the decisions Vigia wants to make on your behalf, with its reasoning, the exact draft and every side effect.",
      },
      { property: "og:title", content: "Approvals — Vigia" },
      {
        property: "og:description",
        content: "Every action Vigia proposes, with full reasoning before you approve.",
      },
    ],
  }),
  component: Approvals,
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

function Approvals() {
  const { t } = useLanguage();
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
  const [filter, setFilter] = useState<"all" | "high">("all");
  const resolve = (id: string) => setItems((prev) => prev.filter((a) => a.id !== id));
  const shown = filter === "all" ? items : items.filter((a) => a.risk === "high");

  return (
    <AppShell badge={items.length}>
      <div className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
        <PageHeader
          eyebrow={t.approvals.eyebrow}
          title={t.approvals.title}
          description={t.approvals.description}
        />

        <div className="mt-8 flex gap-2">
          {(["all", "high"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={
                "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors " +
                (filter === f
                  ? "bg-primary/15 text-primary ring-1 ring-primary/30"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground")
              }
            >
              {f === "all" ? t.approvals.allPending : t.approvals.highRiskOnly}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {shown.length ? (
            shown.map((a, i) => (
              <ApprovalCard key={a.id} approval={a} index={i} onResolve={resolve} />
            ))
          ) : (
            <div className="animate-rise rounded-2xl border border-border glass p-12 text-center">
              <ShieldCheck className="mx-auto size-5 text-primary" />
              <p className="mt-3 font-serif text-xl text-foreground">{t.approvals.inboxZero}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t.approvals.inboxZeroHint}
              </p>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
