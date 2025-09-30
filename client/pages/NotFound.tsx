import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 py-16">
      <div className="relative overflow-hidden rounded-[2.75rem] border border-border/60 bg-white/80 px-10 py-14 text-center shadow-featured backdrop-blur dark:bg-slate-900/60">
        <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="text-4xl font-display font-semibold">404</span>
        </div>
        <h1 className="mt-8 text-3xl font-display font-semibold text-foreground">
          Let’s get you back on track
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you’re looking for doesn’t exist yet. Explore the portfolio
          to discover my work and services.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Return home
        </a>
        <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      </div>
    </div>
  );
};

export default NotFound;
