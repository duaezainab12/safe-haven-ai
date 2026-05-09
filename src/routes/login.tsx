import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/cyber/Logo";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Github, Chrome } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — SafeSphere AI" }] }),
  component: Login,
});

function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyber-red/10" />
      <div className="relative grid min-h-screen place-items-center px-6 py-12">
        <div className="glass-strong w-full max-w-md rounded-2xl p-8 ring-cyber">
          <Link to="/"><Logo /></Link>
          <h1 className="mt-6 text-2xl font-bold">Welcome back, operator.</h1>
          <p className="text-sm text-muted-foreground">Authenticate to access the command center.</p>

          <div className="mt-6 space-y-3">
            <label className="block">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</span>
              <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/60 px-3 py-2.5">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <input type="email" placeholder="you@city.gov" className="w-full bg-transparent text-sm outline-none" />
              </div>
            </label>
            <label className="block">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Password</span>
              <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/60 px-3 py-2.5">
                <Lock className="h-4 w-4 text-muted-foreground" />
                <input type="password" placeholder="••••••••" className="w-full bg-transparent text-sm outline-none" />
              </div>
            </label>
          </div>

          <Button className="mt-6 w-full bg-gradient-to-r from-accent to-primary text-primary-foreground glow-cyan">Sign in</Button>

          <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border/50" /> OR <span className="h-px flex-1 bg-border/50" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="border-border/60 bg-background/40"><Chrome className="mr-2 h-4 w-4" /> Google</Button>
            <Button variant="outline" className="border-border/60 bg-background/40"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            New here? <Link to="/signup" className="text-accent hover:underline">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
