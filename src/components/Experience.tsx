import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Internship Experience"
          description="A real-company-style internship environment with milestone delivery, cross-functional coordination, and live product assessments."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy sm:text-2xl">
                  {experience.organization}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-base font-medium text-accent">
                  <Briefcase size={18} />
                  {experience.role}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-navy/70">
                <Calendar size={16} />
                {experience.duration}
              </span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-navy/80">
              {experience.summary}
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="mt-12">
          <Reveal delay={0.15}>
            <h3 className="text-lg font-semibold text-navy">Engagement Timeline</h3>
          </Reveal>
          <ol className="mt-8 space-y-8 border-l-2 border-border pl-8 sm:pl-10">
            {experience.timeline.map((item, index) => (
              <Reveal as="li" key={item.title} delay={0.05 * index} className="relative">
                <span className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-surface bg-accent sm:-left-[3.05rem]" />
                <h4 className="text-base font-semibold text-navy sm:text-lg">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Responsibilities */}
        <div className="mt-14">
          <Reveal delay={0.1}>
            <h3 className="text-lg font-semibold text-navy">Key Responsibilities</h3>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {experience.responsibilities.map((item, index) => (
              <Reveal
                key={item}
                delay={0.04 * index}
                className="flex gap-3 rounded-xl border border-border bg-white p-4"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <p className="text-sm leading-relaxed text-navy/80 sm:text-base">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
