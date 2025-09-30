const contactLinks = [
  { label: "Email", href: "mailto:hello@nickndirangu.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nickndirangu" },
  { label: "Schedule a Call", href: "https://cal.com/nickndirangu" },
];

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl font-display font-semibold">
              Ready to elevate your customer experience?
            </h2>
            <p className="text-sm text-muted-foreground">
              I help technical teams turn support desks into strategic assets
              through proactive service design, data-driven insights, and
              thoughtful enablement.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full border border-border/70 px-4 py-2 text-foreground transition hover:border-primary hover:text-primary"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} Nick Ndirangu. All rights reserved.</p>
          <p>
            Providing remote-first support leadership across EMEA &amp; North
            America.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
