import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="gradient-border relative overflow-hidden rounded-3xl bg-card/60 p-10 text-center backdrop-blur sm:p-14">
          <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/30 blur-[120px]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Got a project?
            </div>
            <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
              Let's build something <span className="text-gradient">extraordinary</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Whether it's an AI product, a SaaS platform, or a modern web experience —
              I'd love to help bring your idea to life.
            </p>
            <a href="#contact" className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_40px_var(--color-primary)]">
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
