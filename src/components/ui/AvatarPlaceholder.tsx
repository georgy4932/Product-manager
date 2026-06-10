import { cn } from "@/lib/utils";

/**
 * Placeholder portrait shown until /public/images/profile/headshot.jpg is added.
 * Replace by adding the headshot file and rendering an <Image> in Hero/About instead.
 */
export function AvatarPlaceholder({
  initials,
  className,
}: {
  initials: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl bg-navy",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
      <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-accent/10 blur-2xl" />

      <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:h-28 sm:w-28">
        <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {initials}
        </span>
      </div>

      <div className="absolute bottom-6 left-6 right-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          Photo coming soon
        </p>
      </div>
    </div>
  );
}
