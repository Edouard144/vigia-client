import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Activity, Home, Inbox, Plug } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { VigiaMark } from "./VigiaMark";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

const navIcons = { "/": Home, "/approvals": Inbox, "/activity": Activity, "/connections": Plug } as const;

export function AppShell({
  children,
  badge,
}: {
  children: ReactNode;
  badge?: number;
}) {
  const { t } = useLanguage();
  const navItems = [
    { to: "/" as const, label: t.nav.today, icon: navIcons["/"] },
    { to: "/approvals" as const, label: t.nav.approvals, icon: navIcons["/approvals"] },
    { to: "/activity" as const, label: t.nav.activity, icon: navIcons["/activity"] },
    { to: "/connections" as const, label: t.nav.connections, icon: navIcons["/connections"] },
  ];

  return (
    <div className="min-h-screen lg:flex">
      <aside className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-sidebar-border bg-sidebar/80 px-4 py-3 backdrop-blur-xl lg:h-screen lg:w-64 lg:flex-col lg:items-stretch lg:justify-start lg:border-r lg:border-b-0 lg:px-5 lg:py-7">
        <Link to="/" className="group flex items-center gap-2.5">
          <VigiaMark className="size-7 transition-transform duration-500 group-hover:rotate-[8deg]" />
          <span className="flex items-baseline gap-1.5">
            <span className="font-serif text-[1.35rem] leading-none tracking-tight text-foreground">
              Vigia
            </span>
            <span className="size-1.5 rounded-full bg-primary animate-live-dot" />
          </span>
        </Link>

        <nav className="flex items-center gap-1 lg:mt-10 lg:flex-col lg:items-stretch lg:gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === "/" }}
              activeProps={{
                className: "bg-sidebar-accent text-sidebar-accent-foreground",
              }}
              inactiveProps={{
                className: "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
              }}
              className="group flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors"
            >
              <Icon className="size-4 shrink-0" strokeWidth={1.75} />
              <span className="hidden sm:inline">{label}</span>
              {label === t.nav.approvals && badge ? (
                <span className="ml-auto hidden rounded-full bg-signal/20 px-1.5 py-0.5 text-[11px] font-semibold text-signal sm:inline">
                  {badge}
                </span>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:mt-auto lg:block">
          <div className="rounded-2xl border border-sidebar-border bg-background/40 p-4">
            <p className="text-xs font-medium text-foreground">{t.sidebar.workingQuietly}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {t.sidebar.handledToday(badge ?? 0)}
            </p>
          </div>
          <div className="mt-2 flex items-center justify-end gap-1">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </aside>

      <main className="flex-1">{children}</main>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="animate-rise">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">{eyebrow}</p>
      <h1 className="mt-3 font-serif text-[2.6rem] leading-[1.05] tracking-[-0.02em] text-foreground sm:text-[3.25rem]">
        {title}
      </h1>
      <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">{description}</p>
    </header>
  );
}
