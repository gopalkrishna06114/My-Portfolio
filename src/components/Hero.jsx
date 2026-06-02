import { personal } from "../data/portfolio";
import { ArrowUpRight, Copy, Check, FileText } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-24 pb-6 px-4 max-w-5xl mx-auto" id="about">
      {/* Email bar */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <span className="text-sm" style={{ color: "var(--text-muted)" }}>{personal.email}</span>
        <button onClick={copyEmail}
          className="btn-outline flex items-center gap-1 !px-3 !py-1 text-xs">
          {copied ? <Check size={11} /> : <Copy size={11} />}
          {copied ? "Copied!" : "Copy"}
        </button>
        <a href="https://drive.google.com/file/d/1NnVQZoHkrVWFqWhYINbMsoduK5oiIrrs/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="btn-outline flex items-center gap-1 !px-3 !py-1 text-xs">
          <FileText size={11} /> Resume <ArrowUpRight size={11} />
        </a>
        <div className="ml-auto hidden md:flex items-center gap-4">
          {[
            { label: "LinkedIn", href: personal.linkedin },
            { label: "GitHub",   href: personal.github },
            { label: "LeetCode", href: personal.leetcode },
          ].map((l, i, arr) => (
            <span key={l.label} className="flex items-center gap-4">
              <a href={l.href} target="_blank" rel="noreferrer"
                className="text-sm hover:opacity-60 transition-opacity"
                style={{ color: "var(--text-muted)" }}>{l.label}</a>
              {i < arr.length - 1 && <span style={{ color: "var(--border)" }}>/</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Hero card */}
      <div className="card rounded-3xl px-8 py-20 md:py-28 text-center relative overflow-hidden">
        {/* Profile avatar + floating tag */}
        <div className="flex justify-center mb-8 relative">
          <div className="relative inline-block">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold"
              style={{ background: "var(--bg-primary)", border: "2px solid var(--border)", color: "var(--text-primary)" }}>
              GK
            </div>
            <div className="absolute -right-28 top-0 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shadow-sm"
              style={{ background: "var(--btn-dark)", color: "var(--btn-dark-text)", border: "0.5px solid var(--border)" }}>
              Gopal Krishna
            </div>
          </div>
        </div>

        <h1 className="font-bold leading-[1.1] tracking-tight mb-8"
          style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", color: "var(--text-primary)" }}>
          Building robust Full Stack,{" "}
          <span style={{ color: "var(--text-muted)" }}>scalable</span>
          <br className="hidden md:block" />
          <span style={{ color: "var(--text-muted)" }}>systems, and</span>
          <br className="hidden md:block" />
          <span style={{ color: "var(--text-secondary)" }}>clean APIs.</span>
        </h1>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <a href="#projects" className="btn-dark">
            View Projects <ArrowUpRight size={14} />
          </a>
          <a href="#contact" className="btn-outline">
            Connect with me
          </a>
        </div>
      </div>
    </section>
  );
}
