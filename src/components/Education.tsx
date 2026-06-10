import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="education" className="bg-surface py-16 sm:py-20">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-2xl border border-border bg-white p-8 text-center sm:flex-row sm:gap-6 sm:p-10 sm:text-left">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-accent">
            <GraduationCap size={28} />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Education
            </p>
            <h3 className="mt-1 text-lg font-bold text-navy sm:text-xl">
              {education.degree}
            </h3>
            <p className="mt-1 text-base text-navy/70">{education.institution}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
