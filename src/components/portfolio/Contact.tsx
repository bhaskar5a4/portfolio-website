import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeader } from "./About";

const cards = [
  { icon: Mail, label: "Email", value: "eedulabhaskar11@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=eedulabhaskar11@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 81212 92872", href: "tel:+918121292872" },
  { icon: MapPin, label: "Location", value: "Hyderabad — 500043", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "Bhaskar Eedula", href: "https://www.linkedin.com/in/bhaskar-eedula-a87a08360/" },
];

const WEB3FORMS_ACCESS_KEY = "358fb602-e04b-402b-8aaa-9c0430b2ad81";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
              <a
                key={c.label}
                href={c.href}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className="gradient-border group flex items-center gap-4 rounded-2xl bg-card/60 p-5 backdrop-blur transition-transform hover:-translate-y-1"
              >
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
            onSubmit={handleSubmit}
            className="gradient-border space-y-4 rounded-2xl bg-card/60 p-7 backdrop-blur lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" />
              <Field label="Your email" name="email" type="email" />
            </div>
            <Field label="Subject" name="subject" />
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea required name="message" rows={5} className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_var(--color-primary)] disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending..." :
               status === "sent" ? "Message Sent ✓" :
               status === "error" ? "Failed — try again" : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-sm text-primary">Thanks! Your message has been sent.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">Something went wrong. Please email me directly.</p>
            )}
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