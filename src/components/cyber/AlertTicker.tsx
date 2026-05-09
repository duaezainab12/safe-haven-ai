import { AlertTriangle } from "lucide-react";

const items = [
  "ALERT · Elevated risk detected · Downtown sector 7",
  "INFO · Patrol density increased · Riverside",
  "ALERT · Suspicious activity pattern · Midtown",
  "OK · Safe route established · Harbor district",
  "WARN · Crowd surge predicted 21:00 · Old Town",
  "INFO · Hospital uplink stable · Citywide",
];

export function AlertTicker() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border/40 bg-background/50 py-2">
      <div className="flex animate-ticker gap-10 whitespace-nowrap font-mono text-xs text-muted-foreground">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-2">
            <AlertTriangle className="h-3 w-3 text-accent" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
