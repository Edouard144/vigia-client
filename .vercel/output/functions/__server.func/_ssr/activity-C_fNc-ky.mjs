import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./i18n-D6WxKTLZ.mjs";
import { n as PageHeader, t as AppShell } from "./AppShell-CbXS-drJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/activity-C_fNc-ky.js
var import_jsx_runtime = require_jsx_runtime();
var outcomeStyles = {
	autonomous: "bg-primary/70",
	approved: "bg-signal/70",
	declined: "bg-destructive/70",
	observed: "bg-muted-foreground/50"
};
var times = {
	Today: [
		"09:41",
		"09:04",
		"08:26"
	],
	Yesterday: ["18:52", "16:10"],
	Earlier: ["11:37"]
};
var channels = {
	Today: [
		"Gmail",
		"Calendar",
		"Gmail"
	],
	Yesterday: ["Banking", "Banking"],
	Earlier: ["Contacts"]
};
var outcomes = {
	Today: [
		"autonomous",
		"autonomous",
		"approved"
	],
	Yesterday: ["declined", "observed"],
	Earlier: ["autonomous"]
};
function ActivityPage() {
	const { t } = useLanguage();
	const days = [
		"Today",
		"Yesterday",
		"Earlier"
	];
	const outcomeLabel = {
		autonomous: t.activity.handledOnItsOwn,
		approved: t.activity.youApproved,
		declined: t.activity.youDeclined,
		observed: t.activity.watching
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
		badge: t.data.approvals.length,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				eyebrow: t.activity.eyebrow,
				title: t.activity.title,
				description: t.activity.description
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-10",
				children: days.map((day) => {
					const items = t.data.activity.filter((a) => a.day === day);
					if (!items.length) return null;
					const dayTimes = times[day] ?? [];
					const dayChannels = channels[day] ?? [];
					const dayOutcomes = outcomes[day] ?? [];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",
						children: day
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 border-l border-border",
						children: items.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							style: { animationDelay: `${i * 60}ms` },
							className: "animate-rise relative py-4 pl-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute -left-[4.5px] top-6 size-2 rounded-full ${outcomeStyles[dayOutcomes[i]] ?? ""}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tabular-nums",
											children: dayTimes[i]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-muted px-2 py-0.5",
											children: dayChannels[i]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: outcomeLabel[dayOutcomes[i]] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm font-medium text-foreground",
									children: a.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-sm leading-relaxed text-muted-foreground",
									children: a.detail
								})
							]
						}, i))
					})] }, day);
				})
			})]
		})
	});
}
//#endregion
export { ActivityPage as component };
