import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { AppShell, PageHeader } from "@/components/vigia/AppShell";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/connections")({
  head: () => ({
    meta: [
      { title: "Connections — Vigia" },
      {
        name: "description",
        content:
          "Choose what Vigia can see and how much it can decide alone, service by service. Change it any time.",
      },
      { property: "og:title", content: "Connections — Vigia" },
      {
        property: "og:description",
        content: "Control what Vigia can access and how autonomously it acts.",
      },
    ],
  }),
  component: ConnectionsPage,
});

type LocalizedConnection = {
  id: string;
  name: string;
  description: string;
  status: "connected" | "syncing" | "disconnected";
  scope: string;
  lastSync: string;
  autonomy: number;
};

function ConnectionsPage() {
  const { t } = useLanguage();
  const [items, setItems] = useState<LocalizedConnection[]>(() =>
    t.data.connections.map((c, i) => ({
      id: ["gmail", "calendar", "banking", "slack", "contacts", "drive"][i],
      ...c,
      status: (["connected", "connected", "connected", "syncing", "connected", "disconnected"] as const)[i],
      lastSync: ["2 min ago", "5 min ago", "31 min ago", "syncing now", "1 hr ago", "\u2014"][i],
      autonomy: [3, 3, 1, 2, 2, 0][i],
    }))
  );

  const autonomyLabels = [t.connections.off, t.connections.askEverything, t.connections.askSensitive, t.connections.actThenTell];

  const setAutonomy = (id: string, autonomy: number) => {
    setItems((prev) => prev.map((c) => (c.id === id ? { ...c, autonomy } : c)));
    const c = items.find((i) => i.id === id);
    toast.message(t.connections.updated(c?.name ?? ""), { description: autonomyLabels[autonomy] });
  };

  return (
    <AppShell badge={t.data.approvals.length}>
      <div className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
        <PageHeader
          eyebrow={t.connections.eyebrow}
          title={t.connections.title}
          description={t.connections.description}
        />

        <div className="mt-10 space-y-3">
          {items.map((c, i) => (
            <div
              key={c.id}
              style={{ animationDelay: `${i * 60}ms` }}
              className="animate-rise rounded-2xl border border-border glass p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={cn(
                    "size-2 rounded-full",
                    c.status === "connected" && "bg-primary",
                    c.status === "syncing" && "bg-signal animate-live-dot",
                    c.status === "disconnected" && "bg-muted-foreground/40",
                  )}
                />
                <h2 className="text-base font-semibold text-foreground">{c.name}</h2>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                  {c.scope}
                </span>
                <span className="ml-auto text-xs text-muted-foreground">{c.lastSync}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {autonomyLabels.map((label, level) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setAutonomy(c.id, level)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                      c.autonomy === level
                        ? "bg-primary/15 text-primary ring-1 ring-primary/30"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
