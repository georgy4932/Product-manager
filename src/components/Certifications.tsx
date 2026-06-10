import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications"
          description="Formal training and programme certifications underpinning the practical work above."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <Reveal
              key={cert.title}
              delay={index * 0.1}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white"
            >
              <div className="relative aspect-[1400/991] w-full bg-surface">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  className="object-contain p-2"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-lg font-bold text-navy">{cert.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {cert.organization}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                  <span>Issued {cert.year}</span>
                  {cert.credentialId && (
                    <span>Credential ID: {cert.credentialId}</span>
                  )}
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-accent"
                  >
                    Verify Credential
                    <ExternalLink size={15} />
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
