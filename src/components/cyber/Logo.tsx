import { ShieldCheck } from "lucide-react";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const px = size === "lg" ? "h-10 w-10" : size === "sm" ? "h-7 w-7" : "h-8 w-8";
  const text = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg";
  return (
    <div className="flex items-center gap-2.5">
      <div className={`relative ${px} grid place-items-center rounded-lg glass ring-cyber`}>
        <ShieldCheck className="h-4/6 w-4/6 text-accent" strokeWidth={2.2} />
        <span className="absolute inset-0 rounded-lg animate-pulse-ring border border-accent/40" />
      </div>
      <div className={`font-display font-bold tracking-tight ${text}`}>
        Safe<span className="text-gradient-cyber">Sphere</span>
        <span className="ml-1 text-[0.6em] font-mono text-muted-foreground align-top">AI</span>
      </div>
    </div>
  );
}
