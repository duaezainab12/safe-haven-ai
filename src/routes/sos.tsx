import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Siren, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/cyber/Navbar";

export const Route = createFileRoute("/sos")({
  head: () => ({
    meta: [
      { title: "Emergency SOS — SafeSphere AI" },
      { name: "description", content: "One-tap emergency response with live location sharing and direct dispatch." },
    ],
  }),
  component: SOS,
});

function SOS() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-5xl px-6 py-12">
        <p className="font-mono text-xs uppercase tracking-widest text-cyber-red">// Emergency mode</p>
        <h1 className="mt-1 text-4xl font-bold">SOS Center</h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Instant access to emergency response. Tap the button to broadcast your location and contact authorities.
        </p>

        <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
          <div className="relative grid place-items-center">
            <span className="absolute h-72 w-72 animate-pulse-ring rounded-full border-2 border-cyber-red" />
            <span className="absolute h-72 w-72 animate-pulse-ring rounded-full border-2 border-cyber-red" style={{ animationDelay: "1.2s" }} />
            <button className="relative grid h-56 w-56 place-items-center rounded-full bg-gradient-to-br from-cyber-red to-[oklch(0.55_0.27_22)] text-primary-foreground glow-red transition hover:scale-[1.03]">
              <Siren className="h-16 w-16" />
              <span className="absolute bottom-12 font-display text-xl font-bold">PRESS FOR SOS</span>
            </button>
          </div>

          <div className="space-y-3">
            {[
              { i: Phone, t: "Call Police", d: "Direct line · 911", tone: "red" },
              { i: Phone, t: "Call Ambulance", d: "Medical dispatch", tone: "cyan" },
              { i: MapPin, t: "Share Live Location", d: "Broadcast to trusted contacts", tone: "cyan" },
              { i: MessageSquare, t: "Send Emergency Message", d: "AI-generated SMS to all contacts", tone: "cyan" },
            ].map((a) => (
              <button key={a.t} className="glass flex w-full items-center gap-4 rounded-xl p-4 text-left transition hover:border-accent/40">
                <div className={`grid h-11 w-11 place-items-center rounded-lg ${a.tone === "red" ? "bg-cyber-red/15 text-cyber-red" : "bg-accent/15 text-accent"}`}>
                  <a.i className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">{a.t}</div>
                  <div className="text-xs text-muted-foreground">{a.d}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
