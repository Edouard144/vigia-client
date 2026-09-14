import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/vigia/AppShell";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/activity")({
  head: () => ({
    meta: [
      { title: "Activity — Vigia" },
      {
        name: "description",
        content:
          "A complete, honest record of everything Vigia did on your behalf, what it chose not to do, and why.",
      },
      { property: "og:title", content: "Activity — Vigia" },
      {
        property: "og:description",
        content: "Every action Vigia took, approved, declined or observed.",
      },
    ],
  }),
  component: ActivityPage,
});

const outcomeStyles: Record<string, string> = {
  autonomous: "bg-primary/70",
  approved: "bg-signal/70",
  declined: "bg-destructive/70",
  observed: "bg-muted-foreground/50",
};

const times: Record<string, string[]> = {
  Today: ["09:41", "09:04", "08:26"],
  Yesterday: ["18:52", "16:10"],
  Earlier: ["11:37"],
};

const channels: Record<string, string[]> = {
  Today: ["Gmail", "Calendar", "Gmail"],
  Yesterday: ["Banking", "Banking"],
  Earlier: ["Contacts"],
};

const outcomes: Record<string, string[]> = {
  Today: ["autonomous", "autonomous", "approved"],
  Yesterday: ["declined", "observed"],
  Earlier: ["autonomous"],
};

function ActivityPage() {
  const { t } = useLanguage();
  const days = ["Today", "Yesterday", "Earlier"] as const;

  const outcomeLabel: Record<string, string> = {
    autonomous: t.activity.handledOnItsOwn,
    approved: t.activity.youApproved,
    declined: t.activity.youDeclined,
    observed: t.activity.watching,
  };

  return (
    <AppShell badge={t.data.approvals.length}>
      <div className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
        <PageHeader
          eyebrow={t.activity.eyebrow}
          title={t.activity.title}
          description={t.activity.description}
        />

        <div className="mt-10 space-y-10">
          {days.map((day) => {
            const items = t.data.activity.filter((a) => a.day === day);
            if (!items.length) return null;
            const dayTimes = times[day] ?? [];
            const dayChannels = channels[day] ?? [];
            const dayOutcomes = outcomes[day] ?? [];
            return (
              <section key={day}>
                <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {day}
                </h2>
                <ol className="mt-4 border-l border-border">
                  {items.map((a, i) => (
                    <li
                      key={i}
                      style={{ animationDelay: `${i * 60}ms` }}
                      className="animate-rise relative py-4 pl-6"
                    >
                      <span
                        className={`absolute -left-[4.5px] top-6 size-2 rounded-full ${outcomeStyles[dayOutcomes[i]] ?? ""}`}
                      />
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <span className="tabular-nums">{dayTimes[i]}</span>
                        <span className="rounded-full bg-muted px-2 py-0.5">{dayChannels[i]}</span>
                        <span>{outcomeLabel[dayOutcomes[i]]}</span>
                      </div>
                      <p className="mt-1.5 text-sm font-medium text-foreground">{a.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                        {a.detail}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
