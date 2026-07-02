import { useEffect, useState } from "react";
import { ArrowRight, Play, Github, Linkedin, Mail, Award } from "lucide-react";
import bhaskarPhoto from "@/assets/bhaskar.png";

const ROLES = ["AI Developer", "Full Stack Developer", "ML Enthusiast", "Automation Builder"];

function useTypewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = deleting ? 50 : 90;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % ROLES.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return text;
}

export function Hero() {
  const role = useTypewriter();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      {/* Soft dotted/grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="absolute -top-32 -left-32 h-[32rem] w-[32rem] rounded-full bg-primary/30 blur-[160px]" />
      <div className="absolute -bottom-32 -right-32 h-[32rem] w-[32rem] rounded-full bg-accent/30 blur-[160px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 lg:grid-cols-2 lg:gap-6">
        {/* Left: copy */}
        <div className="relative">
          {/* Side dots */}
          <div className="absolute -left-2 top-2 hidden flex-col gap-3 lg:flex">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${i === 1 ? "bg-primary" : "bg-foreground/30"}`} />
            ))}
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hello, I'm <br />
            <span className="text-gradient">EEDULA BHASKAR</span> <br />
            An AI &amp; Full Stack Developer
          </h1>

          <div className="mt-5 flex h-7 items-center font-mono text-base text-foreground/80">
            <span className="text-primary">&gt;</span>&nbsp;
            <span className="cursor-blink">{role}</span>
          </div>

          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            I build AI-powered applications, modern web experiences, and automation
            solutions that solve real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-[0_0_30px_var(--color-accent)]"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="inline-flex items-center gap-3 text-sm font-medium">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary/60 backdrop-blur transition-colors hover:bg-secondary">
                <Play className="h-4 w-4 fill-current text-primary" />
              </span>
              Watch Intro
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href="https://github.com/bhaskar5a4" target="_blank" rel="noreferrer" className="rounded-xl border border-border bg-secondary/40 p-3 transition-all hover:border-primary hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-xl border border-border bg-secondary/40 p-3 transition-all hover:border-primary hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:eedulabhaskar11@gmail.com" className="rounded-xl border border-border bg-secondary/40 p-3 transition-all hover:border-primary hover:text-primary">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right: photo with shapes */}
        <div className="relative mx-auto flex h-[460px] w-full max-w-md items-end justify-center sm:h-[540px] lg:h-[620px]">
          {/* Photo */}
          <img
            src={bhaskarPhoto}
            alt="Eedula Bhaskar — AI & Full Stack Developer"
            className="relative z-10 h-full w-full max-w-full rounded-2xl object-cover animate-float"
          />

          {/* Experience badge */}
          <div className="absolute right-0 top-1/3 z-20 flex items-center gap-3 rounded-2xl bg-background/90 px-4 py-3 shadow-xl backdrop-blur ring-1 ring-border">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-xl font-bold leading-none">1+</div>
              <div className="text-[11px] text-muted-foreground">Year Experience</div>
            </div>
          </div>

          {/* Available chip */}
          <div className="absolute left-0 bottom-6 z-20 rounded-2xl bg-background/90 px-4 py-3 shadow-xl backdrop-blur ring-1 ring-border">
            <div className="flex items-center gap-2 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
