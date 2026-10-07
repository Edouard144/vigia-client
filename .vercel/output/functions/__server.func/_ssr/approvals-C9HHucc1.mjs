import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./i18n-D6WxKTLZ.mjs";
import { i as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as PageHeader, t as AppShell } from "./AppShell-CbXS-drJ.mjs";
import { t as ApprovalCard } from "./ApprovalCard-D0SMGwU6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/approvals-C9HHucc1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Approvals() {
	const { t } = useLanguage();
	const [items, setItems] = (0, import_react.useState)(() => t.data.approvals.map((a, i) => ({
		id: `apr_${i}`,
		...a,
		channel: [
			"Calendar",
			"Gmail",
			"Banking"
		][i],
		risk: [
			"medium",
			"low",
			"high"
		][i],
		confidence: [
			.94,
			.98,
			.86
		][i],
		createdAt: "6 min ago",
		expiresInMinutes: [
			54,
			180,
			300
		][i]
	})));
	const [filter, setFilter] = (0, import_react.useState)("all");
	const resolve = (id) => setItems((prev) => prev.filter((a) => a.id !== id));
	const shown = filter === "all" ? items : items.filter((a) => a.risk === "high");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		badge: items.length,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
					eyebrow: t.approvals.eyebrow,
					title: t.approvals.title,
					description: t.approvals.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex gap-2",
					children: ["all", "high"].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(f),
						className: "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors " + (filter === f ? "bg-primary/15 text-primary ring-1 ring-primary/30" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
						children: f === "all" ? t.approvals.allPending : t.approvals.highRiskOnly
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-4",
					children: shown.length ? shown.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApprovalCard, {
						approval: a,
						index: i,
						onResolve: resolve
					}, a.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-rise rounded-2xl border border-border glass p-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mx-auto size-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-serif text-xl text-foreground",
								children: t.approvals.inboxZero
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: t.approvals.inboxZeroHint
							})
						]
					})
				})
			]
		})
	});
}
//#endregion
export { Approvals as component };
