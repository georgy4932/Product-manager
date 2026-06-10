import { ArrowRight, Mail } from "lucide-react";
import { personal } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AvatarPlaceholder } from "@/components/ui/AvatarPlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-surface pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 70%)",
          opacity: 0.4,
        }}
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <span className="mb-6 inline-flex items-center rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-muted shadow-sm">
              HNG Internship Cohort 14 · Product Management Track
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {personal.name}
            </h1>
            <p className="mt-3 text-xl font-semibold text-accent sm:text-2xl">
              {personal.role}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/80 sm:text-xl">
              {personal.tagline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {personal.summary}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#case-studies" icon={<ArrowRight size={18} />}>
                View Case Studies
              </Button>
              <Button href="#contact" variant="ghost" icon={<Mail size={18} />}>
                Contact Me
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mx-auto w-full max-w-sm lg:max-w-none">
            <AvatarPlaceholder
              initials={personal.initials}
              className="aspect-[4/5] w-full shadow-xl shadow-navy/10 ring-1 ring-navy/5"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
