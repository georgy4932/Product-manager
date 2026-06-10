import Link from "next/link";
import { Mail } from "lucide-react";
import { personal, contact, navLinks } from "@/data/portfolio";
import { LinkedInIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy">
      <Container>
        <div className="flex flex-col gap-10 border-t border-white/10 py-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-bold text-white">{personal.name}</p>
            <p className="mt-1 text-sm text-slate-400">{personal.role}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-accent hover:text-accent"
              >
                <Mail size={16} />
              </a>
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedInIcon size={16} />
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
          © {year} {personal.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
