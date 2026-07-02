import { Quote, Star } from "lucide-react";
import { SectionHeader } from "./About";

const items = [
  {
    name: "Charles Bryan",
    role: "Tech Lead, NCPL",
    text: "Bhaskar combines strong AI fundamentals with shipping speed. He delivered automation features end-to-end with great attention to detail.",
  },
  {
    name: "William Compta",
    role: "Product Manager",
    text: "Reliable, curious, and proactive. He prototyped AI features faster than expected and improved the SaaS dashboard meaningfully.",
  },
  {
    name: "Michael Wise",
    role: "Open Source Collaborator",
    text: "His code is clean and his communication is sharper. A rare combo for a young developer building in the AI space.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionHeader eyebrow="Testimonials" title="What people say about me" center />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="gradient-border relative rounded-2xl bg-card/60 p-7 text-left backdrop-blur transition-transform hover:-translate-y-1.5">
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/20" />
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-muted-foreground">"{t.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-sm font-bold text-primary-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
