import { stats } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 divide-y divide-white/10 sm:grid-cols-3 sm:gap-6 sm:divide-y-0 sm:divide-x">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.1}
              className="flex flex-col items-center pt-10 text-center first:pt-0 sm:pt-0"
            >
              <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400 sm:text-base">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
