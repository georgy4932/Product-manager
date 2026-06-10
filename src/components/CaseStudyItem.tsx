"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { CaseStudy } from "@/types";
import { cn } from "@/lib/utils";

export function CaseStudyItem({
  caseStudy,
  index,
  defaultOpen = false,
}: {
  caseStudy: CaseStudy;
  index: number;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full flex-col gap-4 p-6 text-left sm:flex-row sm:items-center sm:justify-between sm:p-8"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4 sm:items-center">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-lg font-bold text-navy sm:text-xl">
              {caseStudy.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent">
              {caseStudy.subtitle}
            </p>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "shrink-0 text-muted transition-transform duration-300",
            open && "rotate-180 text-accent"
          )}
          size={22}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-6 border-t border-border px-6 py-6 sm:px-8 sm:py-8">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Context
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-navy/80 sm:text-base">
                  {caseStudy.context}
                </p>
              </div>

              <div className="rounded-xl bg-surface p-5 sm:p-6">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {caseStudy.problemTitle}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-navy/80 sm:text-base">
                  {caseStudy.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
                  {caseStudy.approachTitle}
                </h4>
                <ul className="mt-3 space-y-3">
                  {caseStudy.approach.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm leading-relaxed text-navy/80 sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-accent/20 bg-orange-50/50 p-5 sm:p-6">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {caseStudy.outcomeTitle}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-navy/80 sm:text-base">
                  {caseStudy.outcome}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
