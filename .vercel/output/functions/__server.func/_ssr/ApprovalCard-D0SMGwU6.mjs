import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./i18n-D6WxKTLZ.mjs";
import { a as ShieldAlert, g as Check, h as ChevronDown, m as Clock, s as Pencil, t as X } from "../_libs/lucide-react.mjs";
import { r as cn } from "./AppShell-CbXS-drJ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ApprovalCard-D0SMGwU6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var riskStyles = {
	low: "bg-primary/12 text-primary ring-primary/25",
	medium: "bg-signal/12 text-signal ring-signal/25",
	high: "bg-destructive/12 text-destructive ring-destructive/30"
};
function ApprovalCard({ approval, index = 0, onResolve }) {
	const { t, locale } = useLanguage();
	const [open, setOpen] = (0, import_react.useState)(index === 0);
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)(approval.draft);
	const [state, setState] = (0, import_react.useState)("pending");
	const resolve = (decision) => {
		setState(decision);
		toast[decision === "approved" ? "success" : "message"](decision === "approved" ? t.approvalCard.approvedToast : t.approvalCard.declinedToast, { description: approval.title });
		window.setTimeout(() => onResolve?.(approval.id, decision), 900);
	};
	const riskLabels = {
		low: t.risk.low,
		medium: t.risk.medium,
		high: t.risk.high
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		style: { animationDelay: `${index * 90}ms` },
		className: cn("animate-rise group relative overflow-hidden rounded-2xl border border-border glass hairline shadow-[0_30px_70px_-50px_rgba(0,0,0,1)] transition-all duration-500 hover:border-primary/25", state !== "pending" && "scale-[0.99] opacity-55"),
		children: [state === "pending" && approval.risk === "high" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-1/3 bg-gradient-to-r from-transparent via-destructive to-transparent animate-sweep" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 sm:p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-medium ring-1", riskStyles[approval.risk]),
							children: [approval.risk === "high" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-3.5" }), riskLabels[approval.risk]]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-muted px-2.5 py-1 font-medium text-muted-foreground",
							children: t.channel[approval.channel] ?? approval.channel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5" }),
								t.approvalCard.expires,
								" ",
								Math.round(approval.expiresInMinutes / 60) || 1,
								t.approvalCard.hours
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-auto tabular-nums text-muted-foreground",
							children: [
								Math.round(approval.confidence * 100),
								"% ",
								t.approvalCard.confident
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-serif text-[1.6rem] leading-[1.25] tracking-[-0.01em] text-foreground",
					children: approval.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1.5 text-sm text-muted-foreground",
					children: [
						approval.intent,
						" · ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground/80",
							children: approval.recipient
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-xl border border-border bg-background/60 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
							children: t.approvalCard.whatVigiaWillSend
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setEditing((v) => !v),
							className: "inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" }), editing ? t.approvalCard.done : t.approvalCard.edit]
						})]
					}), editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: draft,
						onChange: (e) => setDraft(e.target.value),
						rows: 4,
						className: "mt-3 w-full resize-none rounded-xl border border-input bg-background/60 p-3 text-sm leading-relaxed text-foreground outline-none ring-ring focus:ring-2"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-foreground/90",
						children: draft
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					className: "mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition-transform", open && "rotate-180") }), t.approvalCard.whySuggests]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("grid transition-all duration-500 ease-out", open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2 border-l border-border pl-4",
							children: approval.reasoning.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: r
							}, r))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: approval.sideEffects.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-lg bg-muted px-2.5 py-1 text-xs text-muted-foreground",
								children: s
							}, s))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: state !== "pending",
						onClick: () => resolve("approved"),
						className: "inline-flex items-center justify-center gap-2 rounded-lg bg-primary/90 px-7 py-2.5 text-sm font-semibold tracking-tight text-primary-foreground shadow-[0_10px_30px_-12px_var(--primary)] transition-all hover:bg-primary active:scale-[0.99] disabled:opacity-60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), state === "approved" ? t.approvalCard.approved : t.approvalCard.approve]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: state !== "pending",
						onClick: () => resolve("declined"),
						className: "inline-flex items-center justify-center gap-2 rounded-lg border border-input px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:bg-accent hover:text-foreground disabled:opacity-60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), t.approvalCard.decline]
					})]
				})
			]
		})]
	});
}
//#endregion
export { ApprovalCard as t };
