import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./i18n-D6WxKTLZ.mjs";
import { n as PageHeader, r as cn, t as AppShell } from "./AppShell-CbXS-drJ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/connections-CpJp0Q5X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ConnectionsPage() {
	const { t } = useLanguage();
	const [items, setItems] = (0, import_react.useState)(() => t.data.connections.map((c, i) => ({
		id: [
			"gmail",
			"calendar",
			"banking",
			"slack",
			"contacts",
			"drive"
		][i],
		...c,
		status: [
			"connected",
			"connected",
			"connected",
			"syncing",
			"connected",
			"disconnected"
		][i],
		lastSync: [
			"2 min ago",
			"5 min ago",
			"31 min ago",
			"syncing now",
			"1 hr ago",
			"—"
		][i],
		autonomy: [
			3,
			3,
			1,
			2,
			2,
			0
		][i]
	})));
	const autonomyLabels = [
		t.connections.off,
		t.connections.askEverything,
		t.connections.askSensitive,
		t.connections.actThenTell
	];
	const setAutonomy = (id, autonomy) => {
		setItems((prev) => prev.map((c) => c.id === id ? {
			...c,
			autonomy
		} : c));
		const c = items.find((i) => i.id === id);
		toast.message(t.connections.updated(c?.name ?? ""), { description: autonomyLabels[autonomy] });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		badge: t.data.approvals.length,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: t.connections.eyebrow,
				title: t.connections.title,
				description: t.connections.description
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-3",
				children: items.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { animationDelay: `${i * 60}ms` },
					className: "animate-rise rounded-2xl border border-border glass p-5 sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", c.status === "connected" && "bg-primary", c.status === "syncing" && "bg-signal animate-live-dot", c.status === "disconnected" && "bg-muted-foreground/40") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-base font-semibold text-foreground",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground",
									children: c.scope
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto text-xs text-muted-foreground",
									children: c.lastSync
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: c.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex flex-wrap gap-1.5",
							children: autonomyLabels.map((label, level) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setAutonomy(c.id, level),
								className: cn("rounded-full px-3 py-1.5 text-xs font-medium transition-colors", c.autonomy === level ? "bg-primary/15 text-primary ring-1 ring-primary/30" : "text-muted-foreground hover:bg-accent hover:text-foreground"),
								children: label
							}, label))
						})
					]
				}, c.id))
			})]
		})
	});
}
//#endregion
export { ConnectionsPage as component };
