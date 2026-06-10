import { CheckCircle2 } from "lucide-react";
import { about } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="About" title={about.title} />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal delay={0.1} className="space-y-5">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-navy/80 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
                Areas of Focus
              </h3>
              <ul className="mt-5 space-y-4">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-accent"
                      size={20}
                    />
                    <span className="text-navy/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
