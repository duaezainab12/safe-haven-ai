import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/safety-map", label: "Safety Map" },
  { to: "/sos", label: "SOS" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 glass-strong">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/"><Logo /></Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm text-accent bg-secondary/60" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link to="/login">Sign in</Link>
          </Button>
          <Button asChild size="sm" className="bg-gradient-to-r from-accent to-primary text-primary-foreground hover:opacity-90 glow-cyan">
            <Link to="/dashboard">Launch App</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
