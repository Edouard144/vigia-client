import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./i18n-D6WxKTLZ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight, r as Sparkles } from "../_libs/lucide-react.mjs";
import { n as PageHeader, t as AppShell } from "./AppShell-CbXS-drJ.mjs";
import { t as ApprovalCard } from "./ApprovalCard-D0SMGwU6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BLSV3zjT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Today() {
	const { t, locale } = useLanguage();
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
	const resolve = (id) => setItems((prev) => prev.filter((a) => a.id !== id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		badge: items.length,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
					eyebrow: t.home.eyebrow,
					title: t.home.title,
					description: t.home.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-9 grid animate-rise grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border glass hairline",
					style: { animationDelay: "80ms" },
					children: [
						{
							label: t.home.handledQuietly,
							value: "41"
						},
						{
							label: t.home.needsYou,
							value: String(items.length)
						},
						{
							label: t.home.timeSaved,
							value: "2h 15m"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-[1.75rem] leading-none tracking-tight text-foreground",
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
							children: s.label
						})]
					}, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl tracking-tight text-foreground",
							children: t.home.waitingOnYou
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/approvals",
							className: "inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline",
							children: [
								t.home.seeAll,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 space-y-4",
						children: items.length ? items.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApprovalCard, {
							approval: a,
							index: i,
							onResolve: resolve
						}, a.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-rise rounded-2xl border border-border glass p-12 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mx-auto size-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-serif text-xl text-foreground",
									children: t.home.allClear
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: t.home.allClearHint
								})
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl tracking-tight text-foreground",
						children: t.home.handledQuietly
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-1",
						children: t.data.activity.filter((a) => a.day === "Today").map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-accent/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-12 shrink-0 pt-0.5 text-xs tabular-nums text-muted-foreground",
								children: [
									"09:41",
									"09:04",
									"08:26"
								][i] ?? "09:00"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium text-foreground",
								children: a.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-sm text-muted-foreground",
								children: a.detail
							})] })]
						}, i))
					})]
				})
			]
		})
	});
}
//#endregion
export { Today as component };
