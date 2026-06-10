import { FileText } from "lucide-react";
import { workSamples } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function WorkSamples() {
  return (
    <section id="work-samples" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Work Samples"
          title="Work Samples"
          description="Core PM documents produced during HNG Internship Cohort 14, covering MeetMind's product requirements, technical specifications, milestone planning, go-to-market strategy, and a formal product audit."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workSamples.map((sample, index) => (
            <Reveal
              key={sample.id}
              delay={(index % 3) * 0.08}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-navy/5 sm:p-7"
            >
              <Badge variant="accent" className="self-start">
                {sample.category}
              </Badge>
              <h3 className="mt-4 text-lg font-bold text-navy sm:text-xl">
                {sample.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/80">
                {sample.context}
              </p>

              {sample.link && (
                <div className="mt-auto border-t border-border pt-5">
                  <a
                    href={sample.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-orange-600"
                  >
                    <FileText size={16} />
                    {sample.linkLabel}
                  </a>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
