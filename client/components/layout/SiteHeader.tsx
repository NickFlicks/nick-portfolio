import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlignJustify, X } from "lucide-react";

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-3 text-foreground transition hover:opacity-90"
        >
          <span className="relative flex size-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary via-secondary to-primary text-lg font-display font-semibold text-primary-foreground shadow-featured">
            NN
            <span className="absolute inset-0 rounded-full bg-white/10 mix-blend-overlay" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl font-semibold">
              Nick Ndirangu
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
              Technical Support Specialist
            </span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" className="rounded-full px-5" asChild>
            <a href="#services">Services</a>
          </Button>
          <Button className="rounded-full px-6" asChild>
            <a href="mailto:hello@nickndirangu.com">Book a Consultation</a>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border/70 p-2 text-foreground shadow-card transition hover:bg-primary/10 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <X className="size-5" />
          ) : (
            <AlignJustify className="size-5" />
          )}
        </button>
      </div>
      <div
        className={cn(
          "md:hidden transition-[max-height] duration-500 ease-in-out",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="mx-6 overflow-hidden rounded-3xl border border-border/70 bg-background/95 p-6 shadow-featured backdrop-blur dark:bg-slate-900/90">
          <nav className="flex flex-col gap-4 text-base font-medium text-foreground">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl bg-muted/50 px-4 py-3 transition hover:bg-primary/10 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex gap-3">
            <Button
              variant="outline"
              className="flex-1 rounded-full border-border"
              asChild
            >
              <a href="#services" onClick={closeMenu}>
                Explore Services
              </a>
            </Button>
            <Button className="flex-1 rounded-full" asChild>
              <a href="mailto:hello@nickndirangu.com" onClick={closeMenu}>
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
