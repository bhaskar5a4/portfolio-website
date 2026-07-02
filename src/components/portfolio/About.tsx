import { Brain, Code2, Rocket, Trophy } from "lucide-react";

const stats = [
  { icon: Code2, value: "10+", label: "Projects Completed" },
  { icon: Brain, value: "15+", label: "Technologies Learned" },
  { icon: Trophy, value: "5+", label: "Hackathons Joined" },
  { icon: Rocket, value: "1", label: "Internship" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="About Me" title="Designing intelligent solutions, not just code" />
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-muted-foreground">
            <p>
              I enjoy building projects that combine <span className="text-foreground">AI, web development, and real-world problem solving</span>. I'm always exploring new technologies and improving my skills through hands-on development and hackathons.
            </p>
            <p>
              My passions span <span className="text-primary">Artificial Intelligence</span>, full-stack web engineering, SaaS products, and automation tooling. I love turning ideas into shipping software that's both functional and beautifully designed.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["AI", "Web Development", "SaaS", "Automation", "Problem Solving"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-foreground/80">{t}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="gradient-border group rounded-2xl bg-card/60 p-6 backdrop-blur transition-transform hover:-translate-y-1">
                <s.icon className="mb-4 h-7 w-7 text-primary" />
                <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, center }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <div className={`inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary`}>
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{title}</h2>
    </div>
  );
}
