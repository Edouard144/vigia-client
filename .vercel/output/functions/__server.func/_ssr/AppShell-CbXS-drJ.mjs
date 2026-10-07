import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useTheme, r as useLanguage } from "./i18n-D6WxKTLZ.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as PanelLeftOpen, d as Inbox, f as House, l as PanelLeftClose, n as Sun, o as Plug, p as Globe, u as Moon, v as Activity } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppShell-CbXS-drJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function VigiaMark({ className = "size-8" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 40",
		fill: "none",
		className,
		role: "img",
		"aria-label": "Vigia",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "vigia-stroke",
				x1: "6",
				y1: "4",
				x2: "34",
				y2: "36",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "var(--primary)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "1",
					stopColor: "var(--primary)",
					stopOpacity: "0.35"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 3.5a16.5 16.5 0 0 1 15.4 10.6M35.4 25.9A16.5 16.5 0 0 1 20 36.5M4.6 25.9A16.5 16.5 0 0 1 4.6 14.1",
				stroke: "url(#vigia-stroke)",
				strokeWidth: "2",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M13 14.5 20 27l7-12.5",
				stroke: "var(--primary)",
				strokeWidth: "2.4",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "20",
				cy: "10.5",
				r: "1.6",
				fill: "var(--primary)"
			})
		]
	});
}
function ThemeToggle({ className = "" }) {
	const { theme, toggle } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggle,
		className: `inline-flex items-center justify-center rounded-xl p-2 text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground ${className}`,
		"aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
	});
}
var languages = [{
	locale: "en",
	label: "English",
	flag: "🇬🇧",
	native: "EN"
}, {
	locale: "pt",
	label: "Portugues",
	flag: "🇧🇷",
	native: "PT"
}];
function LanguageToggle({ className = "" }) {
	const { locale, setLocale } = useLanguage();
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const handleClick = (e) => {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		};
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, []);
	const current = languages.find((l) => l.locale === locale);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: `relative ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			className: "inline-flex items-center gap-2 rounded-xl p-2 text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground",
			"aria-label": "Change language",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-base leading-none",
				children: current.flag
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4" })]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute bottom-full left-1/2 z-50 mb-2 w-44 -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-card p-1.5 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-2 duration-200",
			children: languages.map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => {
					setLocale(lang.locale);
					setOpen(false);
				},
				className: `flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${locale === lang.locale ? "bg-primary/15 text-primary" : "text-foreground/70 hover:bg-accent hover:text-foreground"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg leading-none",
						children: lang.flag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-col items-start leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lang.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground",
							children: lang.native
						})]
					}),
					locale === lang.locale && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-auto size-1.5 rounded-full bg-primary" })
				]
			}, lang.locale))
		})]
	});
}
function useSidebarCollapsed() {
	const [collapsed, setCollapsed] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return false;
		try {
			return localStorage.getItem("vigia-sidebar") === "collapsed";
		} catch {
			return false;
		}
	});
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		try {
			localStorage.setItem("vigia-sidebar", collapsed ? "collapsed" : "expanded");
		} catch {}
	}, [collapsed]);
	return [collapsed, () => setCollapsed((v) => !v)];
}
var navIcons = {
	"/": House,
	"/approvals": Inbox,
	"/activity": Activity,
	"/connections": Plug
};
function AppShell({ children, badge }) {
	const { t } = useLanguage();
	const [collapsed, toggleSidebar] = useSidebarCollapsed();
	const navItems = [
		{
			to: "/",
			label: t.nav.today,
			icon: navIcons["/"]
		},
		{
			to: "/approvals",
			label: t.nav.approvals,
			icon: navIcons["/approvals"]
		},
		{
			to: "/activity",
			label: t.nav.activity,
			icon: navIcons["/activity"]
		},
		{
			to: "/connections",
			label: t.nav.connections,
			icon: navIcons["/connections"]
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen lg:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: cn("sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-sidebar-border bg-sidebar/80 px-4 py-3 backdrop-blur-xl lg:h-screen lg:w-64 lg:flex-col lg:items-stretch lg:justify-start lg:border-r lg:border-b-0 lg:px-5 lg:py-7 transition-[width] duration-300", collapsed && "lg:w-16"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VigiaMark, { className: "size-7 transition-transform duration-500 group-hover:rotate-[8deg]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: cn("flex items-baseline gap-1.5", collapsed && "lg:hidden"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-[1.35rem] leading-none tracking-tight text-foreground",
							children: "Vigia"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary animate-live-dot" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex items-center gap-1 lg:mt-10 lg:flex-col lg:items-stretch lg:gap-1",
					children: navItems.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to,
						activeOptions: { exact: to === "/" },
						activeProps: { className: "bg-sidebar-accent text-sidebar-accent-foreground" },
						inactiveProps: { className: "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground" },
						className: cn("group relative flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors", collapsed && "lg:px-2 lg:justify-center"),
						title: label,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4 shrink-0",
								strokeWidth: 1.75
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("hidden sm:inline", collapsed && "lg:hidden"),
								children: label
							}),
							label === t.nav.approvals && badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("absolute -top-1 -right-1 rounded-full bg-signal/20 px-1.5 py-0.5 text-[11px] font-semibold text-signal", "lg:static lg:ml-auto lg:inline", collapsed && "lg:hidden"),
								children: badge
							}) : null
						]
					}, to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex flex-col gap-3 hidden lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("rounded-2xl border border-sidebar-border bg-background/40 p-4", collapsed && "lg:hidden"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-foreground",
							children: t.sidebar.workingQuietly
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-muted-foreground",
							children: t.sidebar.handledToday(badge ?? 0)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center justify-end gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageToggle, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: toggleSidebar,
								className: "inline-flex items-center justify-center rounded-xl p-2 text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground",
								"aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
								"aria-pressed": collapsed,
								children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftOpen, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftClose, { className: "size-4" })
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex-1",
			children
		})]
	});
}
function PageHeader({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "animate-rise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-serif text-[2.6rem] leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[3.25rem]",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground",
				children: description
			})
		]
	});
}
//#endregion
export { PageHeader as n, cn as r, AppShell as t };
