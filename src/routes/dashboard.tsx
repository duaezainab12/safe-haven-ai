import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield, AlertTriangle, Activity, MapPin, Brain, Siren, TrendingUp, Users,
} from "lucide-react";
import {
  AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid,
} from "recharts";
import { Navbar } from "@/components/cyber/Navbar";
import { AlertTicker } from "@/components/cyber/AlertTicker";
import { StatCard } from "@/components/cyber/StatCard";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Command Dashboard — SafeSphere AI" },
      { name: "description", content: "Live AI risk forecasts, threat metrics, and predictive analytics for urban safety operations." },
    ],
  }),
  component: Dashboard,
});

const trend = Array.from({ length: 14 }, (_, i) => ({
  d: `D${i + 1}`,
  risk: Math.round(40 + Math.sin(i / 1.6) * 18 + Math.random() * 10),
  pred: Math.round(42 + Math.sin(i / 1.6 + 0.4) * 16 + Math.random() * 8),
}));
const districts = [
  { name: "Downtown", score: 78 }, { name: "Riverside", score: 41 },
  { name: "Midtown", score: 63 }, { name: "Old Town", score: 88 },
  { name: "Harbor", score: 22 }, { name: "Northgate", score: 55 },
];
const insights = [
  { t: "Sector 7 risk up 12%", d: "Pattern matches Friday-night cluster from 21:00-02:00.", tone: "red" },
  { t: "Patrol reroute suggested", d: "Move 2 units from Harbor to Midtown — predicted +18% coverage.", tone: "cyan" },
  { t: "Weather correlation", d: "Heavy rain reduces street incidents by ~9% across all districts.", tone: "green" },
];

function Dashboard() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AlertTicker />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">// Command center</p>
            <h1 className="mt-1 text-3xl font-bold md:text-4xl">Operations Dashboard</h1>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            Last sync · {new Date().toLocaleTimeString()}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={Shield} label="Citywide Safety" value="82/100" delta="+3.2 vs yesterday" tone="green" />
          <StatCard icon={AlertTriangle} label="Active Threats" value="14" delta="−2 last hour" tone="red" />
          <StatCard icon={Activity} label="Predicted Incidents (24h)" value="38" delta="94% confidence" tone="cyan" />
          <StatCard icon={Users} label="Citizens Protected" value="1.2M" tone="cyan" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="glass rounded-xl p-5 lg:col-span-2"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Predictive Risk Trend</h3>
                <p className="text-xs text-muted-foreground">14-day forecast vs actual</p>
              </div>
              <span className="font-mono text-xs text-accent">LIVE</span>
            </div>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trend}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.86 0.18 200)" stopOpacity={0.6} />
                      <stop offset="100%" stopColor="oklch(0.86 0.18 200)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.66 0.27 18)" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="oklch(0.66 0.27 18)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="oklch(0.32 0.04 250 / 0.3)" strokeDasharray="3 3" />
                  <XAxis dataKey="d" stroke="oklch(0.68 0.03 250)" fontSize={11} />
                  <YAxis stroke="oklch(0.68 0.03 250)" fontSize={11} />
                  <Tooltip
                    contentStyle={{ background: "oklch(0.16 0.03 260)", border: "1px solid oklch(0.32 0.04 250 / 0.5)", borderRadius: 8, fontSize: 12 }}
                  />
                  <Area type="monotone" dataKey="risk" stroke="oklch(0.66 0.27 18)" fill="url(#g2)" strokeWidth={2} />
                  <Area type="monotone" dataKey="pred" stroke="oklch(0.86 0.18 200)" fill="url(#g1)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            className="glass rounded-xl p-5"
          >
            <h3 className="text-lg font-semibold">AI Insights</h3>
            <p className="text-xs text-muted-foreground">Auto-generated recommendations</p>
            <ul className="mt-4 space-y-3">
              {insights.map((i) => (
                <li key={i.t} className="rounded-lg border border-border/40 bg-background/40 p-3">
                  <div className="flex items-center gap-2">
                    <Brain className={`h-4 w-4 ${i.tone === "red" ? "text-cyber-red" : i.tone === "green" ? "text-success" : "text-accent"}`} />
                    <span className="text-sm font-medium">{i.t}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{i.d}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="glass rounded-xl p-5 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">District Risk Score</h3>
              <span className="font-mono text-xs text-muted-foreground">0–100</span>
            </div>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={districts}>
                  <CartesianGrid stroke="oklch(0.32 0.04 250 / 0.3)" strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="oklch(0.68 0.03 250)" fontSize={11} />
                  <YAxis stroke="oklch(0.68 0.03 250)" fontSize={11} />
                  <Tooltip
                    contentStyle={{ background: "oklch(0.16 0.03 260)", border: "1px solid oklch(0.32 0.04 250 / 0.5)", borderRadius: 8, fontSize: 12 }}
                  />
                  <Bar dataKey="score" radius={[6, 6, 0, 0]} fill="oklch(0.78 0.18 220)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass rounded-xl p-5">
            <h3 className="text-lg font-semibold">Quick Actions</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { i: MapPin, t: "Open Map", to: "/safety-map" },
                { i: Siren, t: "Trigger SOS", to: "/sos" },
                { i: TrendingUp, t: "Forecast", to: "/dashboard" },
                { i: Users, t: "Reports", to: "/dashboard" },
              ].map((a) => (
                <button
                  key={a.t}
                  className="group flex flex-col items-start gap-2 rounded-lg border border-border/40 bg-background/40 p-4 text-left transition hover:border-accent/40 hover:bg-secondary/40"
                >
                  <a.i className="h-5 w-5 text-accent transition group-hover:scale-110" />
                  <span className="text-sm font-medium">{a.t}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
