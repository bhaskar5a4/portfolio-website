import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <div className="font-display text-xl font-bold">
              <span className="text-gradient">EEDULA</span> BHASKAR
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Built with passion for AI, innovation, and modern web technologies.
            </p>
          </div>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <div className="flex gap-3">
            <a href="https://github.com/bhaskar5a4" target="_blank" rel="noreferrer" className="rounded-lg border border-border bg-secondary/40 p-2 transition-colors hover:border-primary hover:text-primary">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg border border-border bg-secondary/40 p-2 transition-colors hover:border-primary hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:eedulabhaskar11@gmail.com" className="rounded-lg border border-border bg-secondary/40 p-2 transition-colors hover:border-primary hover:text-primary">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Eedula Bhaskar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
