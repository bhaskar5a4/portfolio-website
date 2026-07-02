import { Bot, Code2, Cpu, Layout, Layers, Smartphone, Workflow, Wrench } from "lucide-react";
import { SectionHeader } from "./About";

const services = [
  { icon: Bot, title: "AI-Powered App Development", desc: "Smart applications powered by ML and modern AI APIs." },
  { icon: Code2, title: "Full Stack Web Development", desc: "End-to-end web apps with clean, scalable architecture." },
  { icon: Workflow, title: "Automation Solutions", desc: "Workflow automation and bots that save real hours." },
  { icon: Smartphone, title: "Responsive Website Design", desc: "Pixel-perfect, mobile-first designs that convert." },
  { icon: Layers, title: "SaaS Application Development", desc: "Production-grade SaaS — auth, billing, dashboards." },
  { icon: Layout, title: "Modern UI Development", desc: "Polished, accessible interfaces with motion and depth." },
  { icon: Cpu, title: "AI Automation Tools", desc: "Custom AI tools that plug into your existing stack." },
  { icon: Wrench, title: "Custom Web Solutions", desc: "Tailored builds that solve specific business problems." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Services" title="What I can build for you" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="gradient-border group relative overflow-hidden rounded-2xl bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-1.5 hover:shadow-[0_0_30px_var(--color-primary)]">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
