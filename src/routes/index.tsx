import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield, Activity, MapPin, Brain, Siren, Users, ArrowRight,
  Radar, Bot, Zap, TrendingUp, Eye, Lock,
} from "lucide-react";
import heroMap from "@/assets/hero-map.jpg";
import { Navbar } from "@/components/cyber/Navbar";
import { Footer } from "@/components/cyber/Footer";
import { AlertTicker } from "@/components/cyber/AlertTicker";
import { StatCard } from "@/components/cyber/StatCard";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SafeSphere AI — Predictive Crime Intelligence & Smart Safety" },
      { name: "description", content: "AI-powered crime prediction, safe-route navigation, and emergency response. A futuristic public safety platform for modern cities." },
      { property: "og:title", content: "SafeSphere AI — Predictive Crime Intelligence" },
      { property: "og:description", content: "Predict, prevent, protect. The AI command center for urban safety." },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Radar, title: "Live Crime Heatmap", desc: "Real-time threat overlays fused from multiple verified data sources." },
  { icon: Brain, title: "AI Risk Prediction", desc: "Forecast incident probability per district with explainable ML models." },
  { icon: MapPin, title: "Safe-Route Engine", desc: "Multi-objective routing avoids danger zones with safety scoring." },
  { icon: Siren, title: "One-Tap SOS", desc: "Live location sharing, panic mode and emergency dispatch in one tap." },
  { icon: Bot, title: "AI Safety Assistant", desc: "Conversational guidance for travel, neighborhood and emergency tips." },
  { icon: Users, title: "Community Reports", desc: "Verified citizen reports with image upload and trust scoring." },
];

function Landing() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <AlertTicker />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroMap} alt="" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="bg-grid absolute inset-0" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-xs text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              SYSTEM ONLINE · 14,238 SENSORS ACTIVE
            </div>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Predict. Prevent.
              <br />
              <span className="text-gradient-cyber">Protect.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              SafeSphere AI is the command center for urban safety — fusing predictive intelligence,
              live mapping and emergency response into a single, beautifully simple interface.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-to-r from-accent to-primary text-primary-foreground glow-cyan">
                <Link to="/dashboard">Launch Command Center <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border/60 bg-background/40">
                <Link to="/safety-map">View Live Map</Link>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatCard icon={Shield} label="Threats Prevented" value="48.2K" tone="cyan" />
              <StatCard icon={Activity} label="Live Incidents" value="312" tone="red" />
              <StatCard icon={TrendingUp} label="Forecast Accuracy" value="94%" tone="green" />
              <StatCard icon={Eye} label="Safe Routes Today" value="9.7K" tone="cyan" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">// Capabilities</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              An entire safety stack, <span className="text-gradient-cyber">unified</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Six pillars working in real time — from prediction to dispatch — designed for cities,
              campuses, and citizens alike.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass group relative overflow-hidden rounded-xl p-6 transition hover:border-accent/40 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="bg-grid-sm absolute inset-0 opacity-30" />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 text-accent ring-1 ring-accent/30">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1 font-mono text-xs text-accent opacity-0 transition group-hover:opacity-100">
                    Explore module <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HEATMAP PREVIEW */}
      <section className="relative py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">// Live preview</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Real-time crime <span className="text-gradient-threat">heatmap</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A constantly-updating thermal view of your city. Every dot is a verified signal, every
              gradient a forecast. Drill into districts, filter by category, and overlay weather,
              transport and event data.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 font-mono text-xs">
              {[
                { c: "bg-success", t: "Low risk" },
                { c: "bg-warning", t: "Moderate" },
                { c: "bg-cyber-red", t: "Critical" },
              ].map((x) => (
                <div key={x.t} className="glass flex items-center gap-2 rounded-md px-3 py-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${x.c}`} /> {x.t}
                </div>
              ))}
            </div>
            <Button asChild className="mt-6 bg-gradient-to-r from-accent to-primary text-primary-foreground glow-cyan">
              <Link to="/safety-map">Open Map <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="scanline glass relative aspect-[4/3] overflow-hidden rounded-2xl ring-cyber">
            <img src={heroMap} alt="Crime heatmap preview" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-background/40" />
            {[
              { x: "22%", y: "38%", d: 0 },
              { x: "58%", y: "30%", d: 0.5 },
              { x: "70%", y: "60%", d: 1 },
              { x: "35%", y: "70%", d: 1.5 },
            ].map((p, i) => (
              <span
                key={i}
                className="absolute"
                style={{ left: p.x, top: p.y }}
              >
                <span className="absolute -inset-3 animate-pulse-ring rounded-full border-2 border-cyber-red" style={{ animationDelay: `${p.d}s` }} />
                <span className="block h-3 w-3 rounded-full bg-cyber-red shadow-[0_0_20px_var(--cyber-red)]" />
              </span>
            ))}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>NODE-7 · LIVE</span>
              <span className="text-accent">SYNC 99.8%</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">// Trusted by</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">Operators worldwide</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { q: "SafeSphere cut our response time by 38%. The predictive layer is unreal.", a: "Cmdr. A. Mehta", r: "City Safety Division" },
              { q: "Finally a dashboard that feels like a cockpit, not a spreadsheet.", a: "Dr. L. Chen", r: "Urban Resilience Lab" },
              { q: "The safe-route engine has changed how our students travel at night.", a: "P. Okafor", r: "Campus Security" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-xl p-6"
              >
                <Zap className="h-5 w-5 text-accent" />
                <p className="mt-3 text-sm leading-relaxed">"{t.q}"</p>
                <div className="mt-4 border-t border-border/40 pt-3 font-mono text-xs">
                  <div className="text-foreground">{t.a}</div>
                  <div className="text-muted-foreground">{t.r}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass scanline relative overflow-hidden rounded-2xl p-10 text-center md:p-16">
            <div className="bg-grid absolute inset-0 opacity-50" />
            <div className="relative">
              <Lock className="mx-auto h-8 w-8 text-accent" />
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Step into the <span className="text-gradient-cyber">command center</span>.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Spin up SafeSphere AI in minutes. No infrastructure, no setup — just instant
                situational awareness.
              </p>
              <div className="mt-8 flex justify-center gap-3">
                <Button asChild size="lg" className="bg-gradient-to-r from-accent to-primary text-primary-foreground glow-cyan">
                  <Link to="/signup">Get Started Free</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border/60 bg-background/40">
                  <Link to="/dashboard">Open Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
