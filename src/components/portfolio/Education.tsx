import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./About";

const items = [
  { title: "B.Tech in Computer Science & Engineering", place: "Narsimha Reddy Engineering College", years: "2023 – 2027" },
  { title: "Intermediate Education", place: "Alphores Junior College", years: "2021 – 2023" },
  { title: "Schooling", place: "Vikas High School", years: "Completed 2021" },
];

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Education" title="A foundation built on curiosity" />
        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:block" />
          <div className="space-y-6">
            {items.map((it, i) => (
              <div key={i} className="relative md:pl-16">
                <div className="absolute left-0 top-6 hidden h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-card md:flex">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <div className="gradient-border rounded-2xl bg-card/60 p-6 backdrop-blur transition-transform hover:-translate-y-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{it.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{it.place}</p>
                    </div>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{it.years}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
