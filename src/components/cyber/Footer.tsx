import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            AI-powered crime prediction & smart safety platform. Built for cities that care.
          </p>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Platform</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Safety Map</li><li>Predictions</li><li>SOS Center</li><li>Community</li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Connect</h4>
          <div className="mt-3 flex gap-3 text-muted-foreground">
            <Github className="h-5 w-5 hover:text-accent" />
            <Twitter className="h-5 w-5 hover:text-accent" />
            <Linkedin className="h-5 w-5 hover:text-accent" />
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 py-4 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} SafeSphere AI · All systems nominal
      </div>
    </footer>
  );
}
