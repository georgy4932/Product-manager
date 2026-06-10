import { caseStudies } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyItem } from "@/components/CaseStudyItem";

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title="Case Studies"
          description="In-depth walkthroughs of two formal product assessments completed during HNG Internship Cohort 14. Expand each case study for the full breakdown."
        />

        <div className="mt-12 space-y-6">
          {caseStudies.map((caseStudy, index) => (
            <Reveal key={caseStudy.id} delay={index * 0.1}>
              <CaseStudyItem
                caseStudy={caseStudy}
                index={index}
                defaultOpen={index === 0}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
