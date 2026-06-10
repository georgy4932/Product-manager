import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  className?: string;
  icon?: React.ReactNode;
  external?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  icon,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200",
    size === "md" ? "px-6 py-3 text-sm sm:text-base" : "px-4 py-2 text-sm",
    variant === "primary" &&
      "bg-accent text-white shadow-sm hover:bg-orange-600 hover:shadow-md",
    variant === "secondary" &&
      "bg-navy text-white hover:bg-navy-light",
    variant === "ghost" &&
      "border border-border bg-white text-navy hover:border-navy hover:bg-slate-50",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
