import { Mail, MapPin, CheckCircle2 } from "lucide-react";
import { contact, contactCta } from "@/data/portfolio";
import { LinkedInIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {contactCta}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {contact.availability}. Reach out for product management roles,
            collaborations, or to request any of the documents featured in
            this portfolio.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <a
            href={`mailto:${contact.email}`}
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Mail size={20} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Email
            </span>
            <span className="break-all text-sm font-medium text-white">
              {contact.email}
            </span>
          </a>

          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <LinkedInIcon size={20} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              LinkedIn
            </span>
            <span className="text-sm font-medium text-white">
              {contact.linkedin}
            </span>
          </a>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <MapPin size={20} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Location
            </span>
            <span className="text-sm font-medium text-white">
              {contact.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-orange-600"
          >
            <CheckCircle2 size={18} />
            {contact.availability}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
