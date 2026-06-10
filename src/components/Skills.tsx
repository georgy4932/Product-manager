import { skillCategories } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Skills & Tools"
          description="A practical toolkit built through structured product work — from prioritization frameworks to stakeholder communication and execution tooling."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group, index) => (
            <Reveal
              key={group.category}
              delay={(index % 3) * 0.08}
              className="rounded-2xl border border-border bg-white p-6 sm:p-7"
            >
              <h3 className="text-base font-bold text-navy">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
