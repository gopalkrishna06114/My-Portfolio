import { experience } from "../data/portfolio";
import { Briefcase, CalendarDays, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  // If no experience data exists yet, show a placeholder
  if (!experience || experience.length === 0) return null;

  return (
    <section className="py-8 px-4 max-w-5xl mx-auto" id="experience">
      <div className="section-divider"><span>Experience</span></div>
        <div className="text-center mb-10">
          <h2 className="font-bold leading-tight mb-3"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--text-primary)" }}>
            Where I've{" "}
            <span style={{ color: "var(--text-muted)" }}>worked</span>{" "}
            and{" "}
            <span style={{ color: "var(--text-secondary)" }}>contributed.</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Professional roles, internships, and collaborative work.
          </p>
        </div>
      {/* Vertical timeline — same pattern as Education */}
      <div className="relative max-w-2xl mx-auto">
        {/* Connecting line */}
        <div
          className="absolute left-6 top-8 bottom-8 w-px"
          style={{ background: "var(--divider)" }}
        />

        <div className="flex flex-col gap-5">
          {experience.map((exp, i) => (
            <div key={i} className="flex gap-5 items-start">
              {/* Timeline dot */}
              <div className="relative flex-shrink-0 mt-7" style={{ zIndex: 1 }}>
                <div
                  className="w-3 h-3 rounded-full border-2 ml-[18px]"
                  style={{
                    background: "var(--text-primary)",
                    borderColor: "var(--bg-primary)",
                  }}
                />
              </div>

              {/* Card */}
              <div className="card rounded-3xl p-7 flex-1">
                {/* Icon */}
                <div className="icon-box mb-5">
                  <Briefcase size={18} style={{ color: "var(--text-secondary)" }} />
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays size={13} style={{ color: "var(--text-muted)" }} />
                    <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                      {exp.duration}
                    </span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} style={{ color: "var(--text-muted)" }} />
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {exp.location}
                      </span>
                    </div>
                  )}
                  <span className="tag">{exp.type}</span>
                </div>

                {/* Role + Company */}
                <h3
                  className="font-bold text-base mb-0.5 leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {exp.role}
                </h3>
                <p
                  className="text-sm font-medium mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {exp.company}
                </p>

                {/* Bullet points */}
                {exp.points && exp.points.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={14}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: "var(--text-muted)" }}
                        />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}