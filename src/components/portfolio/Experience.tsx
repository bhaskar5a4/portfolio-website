import { Briefcase } from "lucide-react";
import { SectionHeader } from "./About";

const stack = ["Python", "AI/ML", "LangChain", "Automation", "React", "SaaS", "REST APIs"];

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Experience" title="Where I've shipped real-world AI" />
        <div className="mt-14">
          <div className="gradient-border relative overflow-hidden rounded-3xl bg-card/60 p-8 backdrop-blur sm:p-10">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-3">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">AI Intern</h3>
                <p className="text-primary">HRUD.AI under NCPL</p>
                <p className="mt-1 text-sm text-muted-foreground">Jan 2025 – Jul 2025</p>
              </div>
              <div className="lg:col-span-2">
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Worked on real-time AI and automation projects.",
                    "Contributed to a LinkedIn Automation SaaS platform.",
                    "Developed features for an AI Twin SaaS product.",
                    "Designed automation workflows and SaaS architecture.",
                    "Built with modern AI tools and web technologies.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary glow" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {stack.map((s) => (
                    <span key={s} className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
