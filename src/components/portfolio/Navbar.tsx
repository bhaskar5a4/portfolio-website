import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-background/40 px-5 py-3 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
          <a href="#home" className="font-display text-lg font-bold">
            <span className="text-gradient">EB.</span>
            <span className="text-foreground/80">dev</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://github.com/bhaskar5a4" target="_blank" rel="noreferrer" className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              <Github className="h-4 w-4" />
            </a>
            <a href="#contact" className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90 hover:shadow-[0_0_20px_var(--color-accent)] sm:inline-flex">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
