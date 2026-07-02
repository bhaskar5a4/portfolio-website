import { Lightbulb, PenTool, Rocket } from "lucide-react";
import { SectionHeader } from "./About";

const steps = [
  { icon: Lightbulb, title: "Discovery", desc: "Understand the problem, define goals, and scope the smallest valuable solution." },
  { icon: PenTool, title: "Design & Build", desc: "Craft the experience, architect the system, and ship clean, modern code." },
  { icon: Rocket, title: "Launch & Iterate", desc: "Deploy, measure, and refine using real feedback and data-driven decisions." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionHeader eyebrow="Process" title="My working process" center />
        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="gradient-border relative rounded-2xl bg-card/60 p-7 backdrop-blur transition-transform hover:-translate-y-1.5">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-card text-primary glow">
                <s.icon className="h-7 w-7" />
              </div>
              <div className="mt-4 font-mono text-xs uppercase tracking-widest text-primary">Step 0{i + 1}</div>
              <h3 className="mt-1 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
