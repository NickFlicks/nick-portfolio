import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const highlightStats = [
  {
    label: "Years in SaaS Support",
    value: "7+",
    description:
      "Delivering calm, high-impact guidance across global time zones.",
  },
  {
    label: "Tickets Resolved",
    value: "35k+",
    description:
      "Driving first-response excellence for Shopify & WordPress brands.",
  },
  {
    label: "Knowledge Assets Authored",
    value: "120+",
    description: "Empowering teams with scalable documentation and enablement.",
  },
];

const experience = [
  {
    company: "Troop Themes",
    role: "Technical Support Engineer & QA",
    duration: "2019 — Present",
    achievements: [
      "Primary escalation lead for complex integrations and customizations across Shopify themes.",
      "Partner with product engineering to translate customer feedback into actionable improvements.",
      "Expanded internal knowledge base, accelerating onboarding of new technical agents.",
    ],
  },
  {
    company: "Archetype Themes",
    role: "Technical Support Specialist",
    duration: "2020 — Aug 2025",
    achievements: [
      "Resolved 40+ high-sensitivity tickets per day while maintaining CSAT targets above 95%.",
      "Tested and validated new theme releases, informing bug fixes before public launch.",
      "Championed internal documentation and trained incoming support specialists.",
    ],
  },
  {
    company: "Trailblaze Media",
    role: "Technical Support Specialist",
    duration: "2018 — Present",
    achievements: [
      "Developed customer-facing self-help resources boosting deflection of repetitive inquiries.",
      "Collaborated with developers to reproduce and escalate bugs with precise reproduction paths.",
      "Coordinated launch testing across devices to guarantee consistent storefront performance.",
    ],
  },
  {
    company: "Influx Inc.",
    role: "Customer Support Engineer",
    duration: "2016 — 2018",
    achievements: [
      "Specialized in Shopify & WordPress theme support, from installation to advanced customization.",
      "Mentored new agents and monitored performance to uphold technical excellence standards.",
      "Led QA sweeps on apps and plugins prior to release, safeguarding customer confidence.",
    ],
  },
];

const services = [
  {
    title: "Technical Support Leadership",
    description:
      "Embed proven support frameworks, playbooks, and escalations that keep teams proactive and customers delighted.",
    results: "Build scalable support operations",
  },
  {
    title: "Knowledge Base & Enablement",
    description:
      "Author and optimize help centers, internal wikis, and training modules that empower self-service and rapid onboarding.",
    results: "Accelerate learning and deflect tickets",
  },
  {
    title: "SaaS Integrations Troubleshooting",
    description:
      "Diagnose issues spanning Shopify, WordPress, and third-party apps to restore functionality with minimal downtime.",
    results: "Protect revenue-critical workflows",
  },
  {
    title: "QA & Release Support",
    description:
      "Partner with product teams to test features, document edge cases, and ensure seamless launches across devices.",
    results: "Ship polished updates faster",
  },
];

const skills = [
  {
    category: "Core Platforms",
    items: ["Shopify", "WordPress", "Custom Themes", "Liquid", "HTML & CSS"],
  },
  {
    category: "Support Stack",
    items: ["Zendesk", "Freshdesk", "Jira", "Trello", "Intercom"],
  },
  {
    category: "Collaboration",
    items: [
      "CX Strategy",
      "Stakeholder Alignment",
      "Training & Coaching",
      "QA Testing",
    ],
  },
  {
    category: "Content",
    items: [
      "Knowledge Base",
      "FAQ Design",
      "Internal Wikis",
      "Release Notes",
      "Playbooks",
    ],
  },
];

const references = [
  {
    name: "George Ndeeri Macharia",
    role: "Senior Technical Support Specialist, Archetype Themes",
    location: "Nairobi, Kenya",
  },
  {
    name: "John Weru",
    role: "Technical Support Specialist, Astoundify",
    location: "Remote",
  },
];

export default function Index() {
  return (
    <div className="relative">
      <section
        id="overview"
        className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-28 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="relative max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary-foreground/80">
            <Sparkles className="size-4 text-secondary-foreground/70" />{" "}
            Technical Support Specialist
          </span>
          <h1 className="text-4xl font-display font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Elevating customer journeys through empathetic, technical support
            leadership.
          </h1>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            I’m Nick Ndirangu Macharia, a Nairobi-based Technical Support
            Engineer with over seven years helping high-growth SaaS teams
            deliver calm, confident experiences. I collaborate with product,
            engineering, and success leaders to translate customer insights into
            resilient, self-service ecosystems.
          </p>
          <div className="pointer-events-none absolute -left-16 top-8 hidden rotate-[-7deg] rounded-3xl border-2 border-primary/40 px-6 py-3 text-[0.625rem] font-semibold uppercase tracking-[0.6em] text-primary/80 shadow-[0_12px_32px_rgba(91,46,46,0.22)] lg:inline-flex">
            Since 2016
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              className="rounded-full px-7 py-6 text-base shadow-featured"
              asChild
            >
              <a href="mailto:ndimacharia@gmail.com">
                Let’s Build a Support Strategy
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-7 py-6 text-base"
              asChild
            >
              <a href="#services">
                Explore Services Offered
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-sm shrink-0 overflow-hidden rounded-3xl border border-border/70 bg-card/95 p-8 shadow-card backdrop-blur">
          <div className="absolute -top-16 right-[-3.5rem] hidden rotate-12 lg:block">
            <svg
              className="h-36 w-36 text-primary/35"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="80"
                cy="80"
                r="78"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 12"
              />
              <path
                d="M30 80C70 40 90 120 130 80"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M45 50C60 95 100 95 115 50"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Contact
              </p>
              <div className="mt-4 space-y-3 text-sm text-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="size-4 text-primary" />
                  <a
                    className="transition hover:text-primary"
                    href="mailto:ndimacharia@gmail.com"
                  >
                    ndimacharia@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="size-4 text-primary" />
                  <a
                    className="transition hover:text-primary"
                    href="tel:+254717291736"
                  >
                    +254 717 291 736
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="size-4 text-primary" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Expertise Snapshot
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
                <li className="rounded-2xl bg-muted/60 px-4 py-3 text-foreground shadow-sm">
                  SaaS Technical Support (Shopify, WordPress)
                </li>
                <li className="rounded-2xl bg-muted/60 px-4 py-3 text-foreground shadow-sm">
                  Ticketing Systems: Zendesk, Freshdesk, Jira, Trello
                </li>
                <li className="rounded-2xl bg-muted/60 px-4 py-3 text-foreground shadow-sm">
                  Knowledge Base & Documentation Development
                </li>
              </ul>
            </div>
            <Button
              variant="secondary"
              className="w-full rounded-full py-5 font-semibold"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/nickndirangu"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
          <div className="pointer-events-none absolute inset-x-6 bottom-6 -z-10 h-36 rounded-3xl bg-hero-glow blur-2xl" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 rounded-[2.75rem] border border-border/60 bg-card/90 p-6 backdrop-blur md:grid-cols-3">
          {highlightStats.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-featured dark:bg-slate-900/60"
            >
              <span className="text-4xl font-display font-semibold text-primary">
                {item.value}
              </span>
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                {item.label}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                {item.description}
              </p>
              <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Career Journey
            </p>
            <h2 className="text-3xl font-display font-semibold text-foreground sm:text-4xl">
              Trusted by global SaaS teams to resolve complexity with clarity.
            </h2>
          </div>
          <Button variant="outline" className="rounded-full px-6" asChild>
            <a href="mailto:ndimacharia@gmail.com">
              Request full resume
              <Download className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="mt-10 space-y-6">
          {experience.map((role) => (
            <article
              key={role.company}
              className="group relative overflow-hidden rounded-[2.75rem] border border-border/70 bg-card p-8 shadow-card transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-featured dark:bg-slate-900/65"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-display font-semibold text-foreground">
                    {role.role}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    {role.company}
                  </p>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {role.duration}
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {role.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="rounded-2xl border border-transparent bg-muted/60 px-5 py-4 transition group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:text-foreground"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
              <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/20 opacity-0 transition group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 rounded-[2.75rem] border border-border/70 bg-section-sheen p-8 shadow-card backdrop-blur">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                Skills & Tools
              </p>
              <h2 className="text-3xl font-display font-semibold text-foreground">
                Full-spectrum support expertise that scales with your product.
              </h2>
              <p className="text-sm text-muted-foreground">
                From ticket routing to launch readiness, I own every step that
                keeps customers informed and confident. Here’s how I partner
                with teams to deliver lasting results.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((group) => (
                <div
                  key={group.category}
                  className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm dark:bg-slate-900/70"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    {group.category}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-foreground">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6 rounded-[2.75rem] border border-border/60 bg-card p-8 shadow-featured backdrop-blur dark:bg-slate-900/70">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                References
              </p>
              <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
                {references.map((reference) => (
                  <li
                    key={reference.name}
                    className="rounded-3xl bg-muted/50 px-5 py-4 text-foreground"
                  >
                    <p className="font-semibold text-foreground">
                      {reference.name}
                    </p>
                    <p>{reference.role}</p>
                    <p>{reference.location}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-primary/40 bg-primary/15 p-6 text-sm text-primary-foreground/80">
              <p className="font-semibold uppercase tracking-[0.3em]">
                Education
              </p>
              <p className="mt-3 text-base text-foreground">
                BSc Computer Science (2012) — Catholic University of Eastern
                Africa, Nairobi.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Services
            </p>
            <h2 className="text-3xl font-display font-semibold text-foreground sm:text-4xl">
              Services tailored to strengthen support operations end-to-end.
            </h2>
          </div>
          <Button className="rounded-full px-6" asChild>
            <a href="mailto:ndimacharia@gmail.com?subject=Service%20Inquiry">
              Book a Discovery Call
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[2.75rem] border border-border/60 bg-card p-8 shadow-card transition hover:-translate-y-1 hover:border-primary/45 hover:shadow-featured dark:bg-slate-900/65"
            >
              <h3 className="text-2xl font-display font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                {service.description}
              </p>
              <p className="mt-6 inline-flex items-center rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {service.results}
              </p>
              <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-primary/35 bg-[radial-gradient(circle_at_top_left,rgba(91,46,46,0.25),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(45,76,76,0.2),transparent_60%)] bg-blend-screen p-10 shadow-featured">
          <div className="max-w-3xl space-y-5 text-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
              Let’s collaborate
            </p>
            <h2 className="text-4xl font-display font-semibold">
              Need a technical support leader who can translate empathy into
              operational results?
            </h2>
            <p className="text-base text-foreground/80">
              I’m available for full-time, contract, or fractional engagements
              supporting North America and EMEA teams. Reach out to explore
              onboarding, knowledge programs, or launch support tailored to your
              roadmap.
            </p>
            <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center">
              <Button className="rounded-full px-7 py-6 text-base" asChild>
                <a href="mailto:ndimacharia@gmail.com?subject=Let%E2%80%99s%20work%20together">
                  Email Nick
                  <Mail className="ml-2 size-4" />
                </a>
              </Button>
              <div className="flex flex-col gap-1 text-sm text-foreground/80">
                <span className="font-semibold">Direct Line</span>
                <a className="hover:text-primary" href="tel:+254717291736">
                  +254 717 291 736
                </a>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full border border-primary/35 bg-primary/15 opacity-70 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rotate-6 rounded-full border border-accent/35 bg-accent/15 opacity-60 blur-2xl" />
        </div>
      </section>
    </div>
  );
}
