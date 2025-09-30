import type { ReactNode } from "react";

import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => (
  <div
    id="top"
    className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground"
  >
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-0 top-[-22%] h-[540px] bg-[radial-gradient(circle_at_top,rgba(91,46,46,0.28),transparent_62%)] blur-3xl" />
      <div className="absolute left-[-12%] top-1/4 h-[420px] w-[420px] rounded-full bg-[conic-gradient(from_120deg_at_50%_50%,rgba(122,106,79,0.4),rgba(122,106,79,0))] blur-3xl" />
      <div className="absolute right-[-18%] top-[18%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(45,76,76,0.28),transparent_65%)] blur-3xl" />
      <div className="absolute bottom-[-18%] left-1/3 h-[480px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(163,132,101,0.25),transparent_60%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-[220px] bg-[linear-gradient(to_top,rgba(243,237,226,0.85),rgba(243,237,226,0))]" />
    </div>
    <SiteHeader />
    <main id="main-content" className="flex-1">
      {children}
    </main>
    <SiteFooter />
  </div>
);

export default PageLayout;
