import type { LucideIcon } from "lucide-react";

export function StatCard({
  icon: Icon, label, value, delta, tone = "cyan",
}: {
  icon: LucideIcon; label: string; value: string; delta?: string;
  tone?: "cyan" | "red" | "green";
}) {
  const toneText =
    tone === "red" ? "text-cyber-red" : tone === "green" ? "text-success" : "text-accent";
  return (
    <div className="glass relative overflow-hidden rounded-xl p-5 transition-transform hover:-translate-y-0.5">
      <div className="bg-grid-sm absolute inset-0 opacity-40" />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
          <p className={`mt-2 font-mono text-3xl font-bold ${toneText}`}>{value}</p>
          {delta && <p className="mt-1 text-xs text-muted-foreground">{delta}</p>}
        </div>
        <div className={`grid h-10 w-10 place-items-center rounded-lg bg-secondary/60 ${toneText}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
