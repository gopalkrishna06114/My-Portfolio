import { projects } from "../data/portfolio";
import { ArrowUpRight, GitBranch, Globe } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-8 px-4 max-w-5xl mx-auto" id="projects">
      <div className="section-divider"><span>Projects</span></div>

      <div className="text-center mb-10">
        <h2 className="font-bold leading-tight mb-3"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--text-primary)" }}>
          Things I've{" "}
          <span style={{ color: "var(--text-muted)" }}>built</span>{" "}
          and{" "}
          <span style={{ color: "var(--text-secondary)" }}>deployed.</span>
        </h2>
        <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
          Real-world backend systems, APIs, and full-stack applications.
        </p>
      </div>

      {/* All projects stacked vertically */}
      <div className="flex flex-col gap-4">
        {projects.map((p, i) => (
          <div key={i} className="card rounded-3xl p-7">
            <div className="flex items-start justify-between mb-5">
              {/* Project number */}
              <div className="icon-box text-sm font-bold" style={{ color: "var(--text-muted)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Links */}
              <div className="flex items-center gap-2">
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="btn-outline !px-3 !py-2 text-xs flex items-center gap-1.5">
                    <Globe size={13} /> Live <ArrowUpRight size={12} />
                  </a>
                ) : (
                  <span className="tag flex items-center gap-1.5 opacity-40 cursor-not-allowed">
                    <Globe size={13} /> Live
                  </span>
                )}
                <a href={p.github} target="_blank" rel="noreferrer"
                  className="btn-outline !px-3 !py-2 text-xs flex items-center gap-1.5">
                  <GitBranch size={13} /> GitHub
                </a>
              </div>
            </div>

            <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>{p.title}</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{p.description}</p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
