import { createFileRoute } from "@tanstack/react-router";
import { Filter, Layers, Locate, Search } from "lucide-react";
import { Navbar } from "@/components/cyber/Navbar";
import heroMap from "@/assets/hero-map.jpg";

export const Route = createFileRoute("/safety-map")({
  head: () => ({
    meta: [
      { title: "Safety Map — SafeSphere AI" },
      { name: "description", content: "Interactive city map with crime heatmap, AI danger scores, and nearby emergency services." },
    ],
  }),
  component: SafetyMap,
});

function SafetyMap() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative h-[calc(100vh-65px)] w-full overflow-hidden">
        <img src={heroMap} alt="Map" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />

        {/* Floating threat markers */}
        {[
          { x: "22%", y: "38%" }, { x: "58%", y: "30%" }, { x: "70%", y: "60%" },
          { x: "35%", y: "70%" }, { x: "48%", y: "48%" },
        ].map((p, i) => (
          <span key={i} className="absolute" style={{ left: p.x, top: p.y }}>
            <span className="absolute -inset-3 animate-pulse-ring rounded-full border-2 border-cyber-red" />
            <span className="block h-3 w-3 rounded-full bg-cyber-red shadow-[0_0_24px_var(--cyber-red)]" />
          </span>
        ))}

        {/* Top control */}
        <div className="absolute left-1/2 top-4 z-10 w-[min(560px,92%)] -translate-x-1/2">
          <div className="glass-strong flex items-center gap-2 rounded-full px-4 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search address, district or coordinates…"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="rounded-full bg-gradient-to-r from-accent to-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Scan</button>
          </div>
        </div>

        {/* Right panel */}
        <aside className="absolute right-4 top-20 z-10 w-[min(340px,92%)] space-y-3">
          <div className="glass-strong rounded-xl p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">Area Score</h3>
              <span className="rounded-full bg-cyber-red/15 px-2 py-0.5 text-[10px] font-mono text-cyber-red">HIGH</span>
            </div>
            <div className="mt-2 flex items-end gap-2">
              <span className="font-mono text-5xl font-bold text-cyber-red">78</span>
              <span className="mb-1 text-xs text-muted-foreground">/ 100 risk</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[78%] bg-gradient-to-r from-warning to-cyber-red" />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              AI: Elevated risk windows 21:00–02:00. Suggest avoiding alleys S of Main St.
            </p>
          </div>

          <div className="glass-strong rounded-xl p-4">
            <h3 className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
              <Filter className="h-3.5 w-3.5" /> Filters
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {["Theft", "Assault", "Vandalism", "Traffic", "Suspicious", "Other"].map((c) => (
                <label key={c} className="flex items-center gap-2 rounded-md border border-border/40 bg-background/40 px-2 py-1.5">
                  <input type="checkbox" defaultChecked className="accent-[var(--cyber-cyan)]" /> {c}
                </label>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-xl p-4">
            <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">Nearby</h3>
            <ul className="space-y-1.5 text-sm">
              <li className="flex justify-between"><span>Police Station #14</span><span className="font-mono text-xs text-muted-foreground">0.4 km</span></li>
              <li className="flex justify-between"><span>City Hospital</span><span className="font-mono text-xs text-muted-foreground">0.9 km</span></li>
              <li className="flex justify-between"><span>Fire Station 22</span><span className="font-mono text-xs text-muted-foreground">1.2 km</span></li>
            </ul>
          </div>
        </aside>

        {/* Bottom-left controls */}
        <div className="absolute bottom-6 left-4 z-10 flex flex-col gap-2">
          <button className="glass-strong grid h-11 w-11 place-items-center rounded-xl text-accent hover:glow-cyan"><Locate className="h-5 w-5" /></button>
          <button className="glass-strong grid h-11 w-11 place-items-center rounded-xl text-accent hover:glow-cyan"><Layers className="h-5 w-5" /></button>
        </div>

        <div className="absolute bottom-4 right-4 z-10 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Map demo · Live integration coming soon
        </div>
      </div>
    </div>
  );
}
