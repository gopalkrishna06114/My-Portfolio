import { achievements } from "../data/portfolio";
import { Code2, Zap, GraduationCap, GitBranch } from "lucide-react";

// Map each achievement to a proper icon — no emojis
const icons = [Code2, Zap, GraduationCap, GitBranch];

export default function Achievements() {
  return (
    <section className="py-8 px-4 max-w-5xl mx-auto" id="achievements">
      <div className="section-divider"><span>Achievements</span></div>
        <div className="text-center mb-10">
          <h2 className="font-bold leading-tight mb-3"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--text-primary)" }}>
            Milestones I've{" "}
            <span style={{ color: "var(--text-muted)" }}>hit</span>{" "}
            and{" "}
            <span style={{ color: "var(--text-secondary)" }}>unlocked.</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Highlights from competitive coding, hackathons, and academics.
          </p>
        </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={i} className="card rounded-3xl p-7 flex gap-5 hover:scale-[1.01] transition-transform duration-200">
              <div className="icon-box w-12 h-12 rounded-2xl">
                <Icon size={20} style={{ color: "var(--text-secondary)" }} />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: "var(--text-primary)" }}>{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{a.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
