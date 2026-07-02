import { SectionHeader } from "./About";

const core = [
  { name: "Artificial Intelligence", level: 88 },
  { name: "Machine Learning", level: 85 },
  { name: "Full Stack Web Development", level: 90 },
  { name: "Automation Tools Development", level: 82 },
];

const tech = ["Python", "JavaScript", "TypeScript", "React", "Node.js", "Next.js", "TailwindCSS", "PostgreSQL", "Git", "Docker", "FastAPI", "TensorFlow"];

const interests = ["UI Design", "Problem Solving", "SaaS Development", "Real-world Tech Solutions"];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Skills" title="A toolkit built for shipping" />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="gradient-border rounded-2xl bg-card/60 p-8 backdrop-blur">
            <h3 className="font-display text-xl font-semibold">Core Skills</h3>
            <div className="mt-6 space-y-5">
              {core.map((s) => (
                <div key={s.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-foreground/90">{s.name}</span>
                    <span className="font-mono text-primary">{s.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_var(--color-primary)]"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gradient-border rounded-2xl bg-card/60 p-8 backdrop-blur">
            <h3 className="font-display text-xl font-semibold">Technologies</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="mt-8 font-display text-xl font-semibold">Additional Interests</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {interests.map((t) => (
                <span key={t} className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent-foreground">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card/40 py-5">
          <div className="flex w-max animate-marquee gap-12 px-6 font-mono text-sm text-muted-foreground">
            {[...tech, ...tech].map((t, i) => (
              <span key={i} className="shrink-0">⟡ {t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
