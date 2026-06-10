import { FileText } from "lucide-react";
import { workSamples } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

const FIELD_LABELS: { key: "context" | "problem" | "approach" | "outcome"; label: string }[] = [
  { key: "context", label: "Context" },
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "outcome", label: "Outcome" },
];

export function WorkSamples() {
  return (
    <section id="work-samples" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Work Samples"
          title="Work Samples"
          description="Core PM artifacts produced during HNG Internship Cohort 14 — from foundational product documentation to live prioritization and stakeholder deliverables."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {workSamples.map((sample, index) => (
            <Reveal
              key={sample.id}
              delay={(index % 2) * 0.08}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-navy/5 sm:p-7"
            >
              <Badge variant="accent" className="self-start">
                {sample.category}
              </Badge>
              <h3 className="mt-4 text-lg font-bold text-navy sm:text-xl">
                {sample.title}
              </h3>

              <dl className="mt-5 space-y-4">
                {FIELD_LABELS.map(({ key, label }) => (
                  <div key={key}>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-muted">
                      {label}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-navy/80">
                      {sample[key]}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto border-t border-border pt-5">
                {sample.link ? (
                  <a
                    href={sample.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-orange-600"
                  >
                    <FileText size={16} />
                    View Document
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy/60 transition-colors hover:text-accent"
                  >
                    <FileText size={16} />
                    Document available on request
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
