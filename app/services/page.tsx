// app/services/page.tsx
// ─── Pure Server Component ── SEO-optimised ─────────────────────────────────
import type { Metadata } from "next";
import ScrollCTAButton from "@/components/ui/ScrollCTAButton";
import Pager from "@/components/pager";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Services | Ravish — Full-Stack Web Developer",
  description:
    "Explore professional web development services including Full-Stack Development with Next.js & MERN, Backend & API Engineering, DevOps, Performance Optimisation, and long-term Maintenance.",
  keywords: [
    "full-stack web development services",
    "Next.js developer for hire",
    "MERN stack development",
    "Node.js API development",
    "React developer freelance",
    "web app development India",
    "Next.js freelancer",
    "performance optimisation web",
    "DevOps deployment services",
  ],
  authors: [{ name: "Ravish Bisht", url: "https://cykoravish.cloud" }],
  creator: "Ravish Bisht",
  metadataBase: new URL("https://cykoravish.cloud"),
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Ravish — Full-Stack Web Developer",
    description:
      "Full-stack web development, API engineering, DevOps, SEO optimisation and maintenance — built with Next.js and the MERN stack.",
    url: "https://cykoravish.cloud/services",
    siteName: "Ravish — Developer Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-services.png",
        width: 1200,
        height: 630,
        alt: "Services offered by Ravish — Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Ravish — Full-Stack Web Developer",
    description:
      "Full-stack web development services: Next.js, MERN, API, DevOps, SEO, and maintenance.",
    images: ["/og-services.png"],
    creator: "@ravish_bisht",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ravish — Full-Stack Web Developer",
  url: "https://cykoravish.cloud",
  description:
    "Professional web development services including Next.js, MERN stack, API development, DevOps, performance optimisation, and maintenance.",
  areaServed: "Worldwide",
  serviceType: [
    "Full-Stack Web Development",
    "Backend & API Development",
    "Deployment & DevOps",
    "Performance & SEO Optimization",
    "Maintenance & Long-Term Support",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full-Stack Web Development",
          description:
            "Custom web applications built with Next.js, React, Node.js, Express, and MongoDB.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backend & API Development",
          description:
            "Secure REST APIs with JWT auth, MongoDB schema design, and performance optimisation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deployment & DevOps",
          description:
            "VPS, Nginx, Docker containerisation, and CI/CD with GitHub Actions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Performance & SEO Optimization",
          description:
            "Core Web Vitals, sitemap/robots setup, and Open Graph metadata.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Maintenance & Long-Term Support",
          description:
            "Ongoing updates, feature additions, and priority bug resolution.",
        },
      },
    ],
  },
};

// ─── Static data ─────────────────────────────────────────────────────────────
const services = [
  {
    emoji: "⚡",
    title: "Full-Stack Web Development",
    description:
      "Custom web applications built using Next.js, React, Node.js, Express, and MongoDB. Scalable, responsive, and performance-focused.",
    bullets: [
      "Custom UI tailored to your brand",
      "SEO-friendly architecture",
      "Clean and maintainable code",
    ],
  },
  {
    emoji: "🔌",
    title: "Backend & API Development",
    description:
      "Secure and scalable REST APIs with proper authentication and solid database architecture.",
    bullets: [
      "JWT authentication & authorisation",
      "MongoDB schema design",
      "API performance optimisation",
    ],
  },
  {
    emoji: "🚀",
    title: "Deployment & DevOps",
    description:
      "Reliable production deployments and infrastructure setup for modern applications.",
    bullets: [
      "VPS & Nginx configuration",
      "Docker containerisation",
      "CI/CD with GitHub Actions",
    ],
  },
  {
    emoji: "📈",
    title: "Performance & SEO Optimisation",
    description:
      "Improve Lighthouse scores and technical SEO to rank higher and load faster.",
    bullets: [
      "Core Web Vitals improvement",
      "Sitemap & robots.txt setup",
      "Metadata & Open Graph optimisation",
    ],
  },
  {
    emoji: "🛠️",
    title: "Maintenance & Long-Term Support",
    description:
      "Ongoing updates, feature improvements, and bug fixes to keep your product running smoothly.",
    bullets: [
      "Regular code & security audits",
      "Feature additions & upgrades",
      "Priority bug resolution",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Discussion",
    description:
      "A focused discovery call to understand your goals, timeline, and technical requirements.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Iterative builds with regular check-ins so you're always in the loop as the product takes shape.",
  },
  {
    number: "03",
    title: "Launch & Support",
    description:
      "Smooth deployment to production followed by monitoring, fixes, and ongoing enhancements.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section aria-label="Hero" className="px-4 pb-20 pt-16 sm:pt-20">
          <div className="mx-auto max-w-3xl">

            {/* Badge */}
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              <span
                className="h-1.5 w-1.5 rounded-full bg-violet-500"
                aria-hidden="true"
              />
              Available for projects
            </p>

            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              Services I Offer
            </h1>

            <p className="mb-3 text-lg text-foreground/80 leading-relaxed">
              Helping startups and businesses build fast, scalable, and modern
              web applications.
            </p>

            <p className="mb-8 max-w-xl text-sm text-muted-foreground leading-relaxed">
              I build full-stack applications end-to-end — from polished,
              responsive UIs with Next.js and React, to robust Node.js/Express
              backends and MongoDB databases, through to production deployment
              and long-term maintenance.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <ScrollCTAButton
                targetId="contact"
                className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500"
              >
                Start Your Project
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </ScrollCTAButton>

              <a
                href="#services"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────── */}
        <div className="mx-auto max-w-5xl border-t border-border" />

        {/* ── Services Grid ─────────────────────────────────────── */}
        <section id="services" aria-label="Services" className="px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                What I Build
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Everything you need to ship
              </h2>
            </div>

            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2" role="list">
              {services.map((service) => (
                <li
                  key={service.title}
                  className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 hover:bg-accent"
                >
                  {/* Icon */}
                  <div
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted text-lg transition-colors group-hover:border-violet-500/30 group-hover:bg-violet-500/10"
                    aria-hidden="true"
                  >
                    {service.emoji}
                  </div>

                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul
                    className="space-y-2 border-t border-border pt-4"
                    role="list"
                  >
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2.5 text-sm text-muted-foreground"
                      >
                        <svg
                          className="h-3.5 w-3.5 flex-shrink-0 text-violet-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────── */}
        <div className="mx-auto max-w-5xl border-t border-border" />

        {/* ── Process ───────────────────────────────────────────── */}
        <section aria-label="Process" className="px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                How It Works
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                A clear process, start to finish
              </h2>
            </div>

            <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3" role="list">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <p className="mb-3 font-mono text-xs font-medium tracking-widest text-violet-500">
                    {step.number}
                  </p>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────── */}
        <div className="mx-auto max-w-5xl border-t border-border" />

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section id="contact" aria-label="Contact" className="px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-xl border border-border bg-muted px-8 py-14 text-center sm:px-14">
              <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                Let's Collaborate
              </p>
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Ready to Build Something Powerful?
              </h2>
              <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-muted-foreground">
                Whether you're launching from scratch or scaling an existing
                product, I'd love to hear about your project and explore how we
                can build it together.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-violet-500"
                >
                  Let's Work Together
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>

                <a
                  href="mailto:cykoravish@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  or email directly
                </a>
              </div>
            </div>
          </div>
        </section>
      <Pager
        prevHref="/projects"
        nextHref="/skills-tools"
        prevTitle="Projects"
        nextTitle="Skills & Tools"
      />
      </main>
    </>
  );
}