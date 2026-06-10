import { ExternalLink, Sparkles } from "lucide-react";
import { featuredProduct } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProduct() {
  return (
    <section id="product" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured Product"
          title={featuredProduct.name}
          description={featuredProduct.tagline}
        />

        <Reveal delay={0.1} className="mt-12 overflow-hidden rounded-2xl border border-border">
          {/* Header band */}
          <div className="bg-navy px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Sparkles size={22} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Role
                  </p>
                  <p className="text-base font-semibold text-white">
                    {featuredProduct.role}
                  </p>
                </div>
              </div>

              {featuredProduct.liveUrl && (
                <a
                  href={featuredProduct.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  View Live Product
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 gap-10 bg-surface p-6 sm:p-10 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
                Overview
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy/80 sm:text-lg">
                {featuredProduct.description}
              </p>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-muted">
                PM Responsibilities
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {featuredProduct.responsibilities.map((item) => (
                  <Badge key={item} variant="default">
                    {item}
                  </Badge>
                ))}
              </div>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-muted">
                Tech Ecosystem
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {featuredProduct.techStack.map((item) => (
                  <Badge key={item} variant="accent">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
                What I Owned as PM
              </h3>
              <ul className="mt-4 space-y-4">
                {featuredProduct.ownership.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-border bg-white p-4 text-sm leading-relaxed text-navy/80 sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
