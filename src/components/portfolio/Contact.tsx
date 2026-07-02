import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeader } from "./About";

const cards = [
  { icon: Mail, label: "Email", value: "eedulabhaskar11@gmail.com", href: "mailto:eedulabhaskar11@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 81212 92872", href: "tel:+918121292872" },
  { icon: MapPin, label: "Location", value: "Hyderabad — 500043", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "Bhaskar Eedula", href: "https://linkedin.com" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Contact" title="Let's build something great" />
        <p className="mt-4 max-w-xl text-muted-foreground">
          Feel free to reach out for collaborations, projects, or opportunities. I'm always open to connecting with people passionate about technology and innovation.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {cards.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="gradient-border group flex items-center gap-4 rounded-2xl bg-card/60 p-5 backdrop-blur transition-transform hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="text-sm text-foreground">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="gradient-border space-y-4 rounded-2xl bg-card/60 p-7 backdrop-blur lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" />
              <Field label="Your email" name="email" type="email" />
            </div>
            <Field label="Subject" name="subject" />
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea required rows={5} className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_var(--color-primary)]">
              <Send className="h-4 w-4" />
              {sent ? "Message Sent" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        name={name}
        className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
