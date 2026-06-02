import { personal } from "../data/portfolio";
import { MapPin } from "lucide-react";

const stats = [
  { value: "8.0",  label: "CGPA" },
  { value: "500+", label: "LeetCode" },
  { value: "10+",   label: "Projects" },
  { value: "2026", label: "Graduating" },
];

export default function About() {
  return (
    <section className="py-8 px-4 max-w-5xl mx-auto">
      <div className="section-divider"><span>About</span></div>
        <div className="text-center mb-6">
          <h2 className="font-bold leading-tight mb-3"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--text-primary)" }}>
            Who I{" "}
            <span style={{ color: "var(--text-muted)" }}>am</span>{" "}
            and what I{" "}
            <span style={{ color: "var(--text-secondary)" }}>do.</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Software Engineer, problem solver, final-year CSE student at PSIT Kanpur.
          </p>
        </div>
      <div className="flex flex-col gap-4">

        {/* About card — full width */}
        <div className="card rounded-3xl p-8 w-full">
          <p className="text-xs font-medium mb-3 uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}>About</p>
          <h2 className="text-2xl font-bold mb-4 leading-snug"
            style={{ color: "var(--text-primary)" }}>
            Software Engineer,<br />
            <span style={{ color: "var(--text-muted)" }}>Full Stack Developer & Problem Solver.</span>
          </h2>
          <p className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}>
            {personal.bio}
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm"
            style={{ color: "var(--text-muted)" }}>
            <MapPin size={14} /> {personal.location}
          </div>
        </div>

        {/* Stats row — 4 cards side by side below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card rounded-3xl p-6 flex flex-col justify-center">
              <div className="text-3xl font-bold mb-1"
                style={{ color: "var(--text-primary)" }}>{s.value}</div>
              <div className="text-xs font-medium"
                style={{ color: "var(--text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}