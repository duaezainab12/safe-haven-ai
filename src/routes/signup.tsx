import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/cyber/Logo";
import { Button } from "@/components/ui/button";
import { Mail, Lock, User } from "lucide-react";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create account — SafeSphere AI" }] }),
  component: Signup,
});

function Signup() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/10 via-transparent to-primary/10" />
      <div className="relative grid min-h-screen place-items-center px-6 py-12">
        <div className="glass-strong w-full max-w-md rounded-2xl p-8 ring-cyber">
          <Link to="/"><Logo /></Link>
          <h1 className="mt-6 text-2xl font-bold">Join SafeSphere AI</h1>
          <p className="text-sm text-muted-foreground">Create your operator profile in seconds.</p>

          <div className="mt-6 space-y-3">
            {[
              { i: User, t: "Full name", type: "text", ph: "Jane Operator" },
              { i: Mail, t: "Email", type: "email", ph: "you@city.gov" },
              { i: Lock, t: "Password", type: "password", ph: "••••••••" },
            ].map((f) => (
              <label key={f.t} className="block">
                <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{f.t}</span>
                <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/60 px-3 py-2.5">
                  <f.i className="h-4 w-4 text-muted-foreground" />
                  <input type={f.type} placeholder={f.ph} className="w-full bg-transparent text-sm outline-none" />
                </div>
              </label>
            ))}
          </div>
          <Button className="mt-6 w-full bg-gradient-to-r from-accent to-primary text-primary-foreground glow-cyan">Create account</Button>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Already have access? <Link to="/login" className="text-accent hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
