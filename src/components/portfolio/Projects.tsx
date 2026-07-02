import { useState } from "react";
import { ExternalLink, Github, ScanFace, Smile, ShieldCheck, LayoutDashboard, Bot, BrainCircuit } from "lucide-react";
import { SectionHeader } from "./About";

const projects = [
  {
    title: "Face Mask Detection System",
    desc: "AI-powered computer vision system that detects whether a person is wearing a face mask in real time using deep learning and image processing. Built for smart surveillance, safety monitoring, and public health applications.",
    tags: ["Python", "OpenCV", "TensorFlow", "CNN", "Deep Learning"],
    category: "AI/ML",
    accent: "from-blue-500/30 to-cyan-400/20",
    Icon: ScanFace,
  },
  {
    title: "Real-Time Emotion Detection",
    desc: "Machine learning and computer vision app that detects human emotions like happy, sad, angry, and surprised using facial expression analysis in real time.",
    tags: ["Python", "OpenCV", "ML", "Deep Learning", "CNN"],
    category: "AI/ML",
    accent: "from-indigo-500/30 to-blue-500/20",
    Icon: Smile,
  },
  {
    title: "Credit Card Fraud Detection",
    desc: "Detects fraudulent transactions in real-time using anomaly detection and classification.",
    tags: ["Python", "XGBoost", "Imbalanced Data"],
    category: "AI/ML",
    accent: "from-sky-500/30 to-blue-600/20",
    Icon: ShieldCheck,
  },
  {
    title: "Modern Web Applications",
    desc: "Responsive web apps with rich dashboards, authentication, and beautiful, futuristic UIs.",
    tags: ["React", "TypeScript", "Tailwind"],
    category: "Web",
    accent: "from-cyan-500/30 to-blue-500/20",
    Icon: LayoutDashboard,
  },
  {
    title: "LinkedIn Automation SaaS",
    desc: "Automation platform that streamlines outreach workflows with smart scheduling and analytics.",
    tags: ["Node.js", "Automation", "SaaS"],
    category: "SaaS",
    accent: "from-blue-500/30 to-indigo-500/20",
    Icon: Bot,
  },
  {
    title: "AI Twin SaaS",
    desc: "Personal AI twin that mirrors your tone and assists with everyday digital tasks.",
    tags: ["LLMs", "RAG", "Next.js"],
    category: "SaaS",
    accent: "from-blue-400/30 to-sky-600/20",
    Icon: BrainCircuit,
  },
];

const FILTERS = ["All", "AI/ML", "Web", "SaaS"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader eyebrow="Projects" title="Selected work & experiments" />
          <div className="glass flex flex-wrap gap-1 rounded-full p-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_var(--color-primary)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {list.map((p) => (
            <article key={p.title} className="gradient-border card-lift group relative overflow-hidden rounded-2xl border border-white/5 bg-card/40 backdrop-blur-xl">
              <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 grid-bg opacity-60" />
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
                <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-background/40 text-primary backdrop-blur-md shadow-[0_0_40px_rgba(59,130,246,0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <p.Icon className="h-9 w-9" strokeWidth={1.6} />
                </div>
                <div className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
                  ./{p.category.toLowerCase()}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-primary/20 bg-primary/5 px-2 py-1 font-mono text-[11px] text-primary">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs transition-colors hover:bg-secondary">
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground transition-all hover:shadow-[0_0_20px_var(--color-accent)]">
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
