import { useState } from "react";
import { Check, ChevronDown, Clock, Pencil, ShieldAlert, X } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ApprovalData = {
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

const riskStyles: Record<string, string> = {
  low: "bg-primary/12 text-primary ring-primary/25",
  medium: "bg-signal/12 text-signal ring-signal/25",
  high: "bg-destructive/12 text-destructive ring-destructive/30",
};

export function ApprovalCard({
  approval,
  index = 0,
  onResolve,
}: {
  approval: ApprovalData;
  index?: number;
  onResolve?: (id: string, decision: "approved" | "declined") => void;
}) {
  const { t, locale } = useLanguage();
  const [open, setOpen] = useState(index === 0);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(approval.draft);
  const [state, setState] = useState<"pending" | "approved" | "declined">("pending");

  const resolve = (decision: "approved" | "declined") => {
    setState(decision);
    toast[decision === "approved" ? "success" : "message"](
      decision === "approved" ? t.approvalCard.approvedToast : t.approvalCard.declinedToast,
      { description: approval.title },
    );
    window.setTimeout(() => onResolve?.(approval.id, decision), 900);
  };

  const riskLabels: Record<Approval["risk"], string> = {
    low: t.risk.low,
    medium: t.risk.medium,
    high: t.risk.high,
  };

  return (
    <article
      style={{ animationDelay: `${index * 90}ms` }}
      className={cn(
        "animate-rise group relative overflow-hidden rounded-2xl border border-border glass hairline shadow-[0_30px_70px_-50px_rgba(0,0,0,1)] transition-all duration-500 hover:border-primary/25",
        state !== "pending" && "scale-[0.99] opacity-55",
      )}
    >
      {state === "pending" && approval.risk === "high" && (
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
          <span className="block h-px w-1/3 bg-gradient-to-r from-transparent via-destructive to-transparent animate-sweep" />
        </span>
      )}

      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-medium ring-1",
              riskStyles[approval.risk],
            )}
          >
            {approval.risk === "high" && <ShieldAlert className="size-3.5" />}
            {riskLabels[approval.risk]}
          </span>
          <span className="rounded-full bg-muted px-2.5 py-1 font-medium text-muted-foreground">
            {t.channel[approval.channel as keyof typeof t.channel] ?? approval.channel}
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Clock className="size-3.5" />
            {t.approvalCard.expires} {Math.round(approval.expiresInMinutes / 60) || 1}{t.approvalCard.hours}
          </span>
          <span className="ml-auto tabular-nums text-muted-foreground">
            {Math.round(approval.confidence * 100)}% {t.approvalCard.confident}
          </span>
        </div>

        <h3 className="mt-4 font-serif text-[1.6rem] leading-[1.25] tracking-[-0.01em] text-foreground">
          {approval.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {approval.intent} · <span className="text-foreground/80">{approval.recipient}</span>
        </p>

        <div className="mt-5 rounded-xl border border-border bg-background/60 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {t.approvalCard.whatVigiaWillSend}
            </p>
            <button
              type="button"
              onClick={() => setEditing((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Pencil className="size-3.5" />
              {editing ? t.approvalCard.done : t.approvalCard.edit}
            </button>
          </div>
          {editing ? (
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={4}
              className="mt-3 w-full resize-none rounded-xl border border-input bg-background/60 p-3 text-sm leading-relaxed text-foreground outline-none ring-ring focus:ring-2"
            />
          ) : (
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">{draft}</p>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
          {t.approvalCard.whySuggests}
        </button>

        <div
          className={cn(
            "grid transition-all duration-500 ease-out",
            open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <ul className="space-y-2 border-l border-border pl-4">
              {approval.reasoning.map((r) => (
                <li key={r} className="text-sm leading-relaxed text-muted-foreground">
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {approval.sideEffects.map((s) => (
                <span
                  key={s}
                  className="rounded-lg bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:items-center">
          <button
            type="button"
            disabled={state !== "pending"}
            onClick={() => resolve("approved")}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary/90 px-7 py-2.5 text-sm font-semibold tracking-tight text-primary-foreground shadow-[0_10px_30px_-12px_var(--primary)] transition-all hover:bg-primary active:scale-[0.99] disabled:opacity-60"
          >
            <Check className="size-4" />
            {state === "approved" ? t.approvalCard.approved : t.approvalCard.approve}
          </button>
          <button
            type="button"
            disabled={state !== "pending"}
            onClick={() => resolve("declined")}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-input px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:bg-accent hover:text-foreground disabled:opacity-60"
          >
            <X className="size-4" />
            {t.approvalCard.decline}
          </button>
        </div>
      </div>
    </article>
  );
}
