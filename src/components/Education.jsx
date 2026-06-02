import { education } from "../data/portfolio";
import { GraduationCap, CalendarDays, Award } from "lucide-react";

export default function Education() {
  return (
    <section className="py-8 px-4 max-w-5xl mx-auto" id="education">
      <div className="section-divider"><span>Education</span></div>
      
        <div className="text-center mb-10">
          <h2 className="font-bold leading-tight mb-3"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--text-primary)" }}>
            Where I've{" "}
            <span style={{ color: "var(--text-muted)" }}>studied</span>{" "}
            and{" "}
            <span style={{ color: "var(--text-secondary)" }}>grown.</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            My academic background and qualifications.
          </p>
        </div>
      {/* Vertical timeline */}
      <div className="relative max-w-2xl mx-auto">
        {/* Connecting line */}
        <div className="absolute left-6 top-8 bottom-8 w-px" style={{ background: "var(--divider)" }} />

        <div className="flex flex-col gap-5">
          {education.map((edu, i) => (
            <div key={i} className="flex gap-5 items-start">
              {/* Dot on the line */}
              <div className="relative flex-shrink-0 mt-7" style={{ zIndex: 1 }}>
                <div className="w-3 h-3 rounded-full border-2 ml-[18px]"
                  style={{ background: "var(--text-primary)", borderColor: "var(--bg-primary)" }} />
              </div>

              {/* Card */}
              <div className="card rounded-3xl p-7 flex-1">
                <div className="icon-box mb-5">
                  <GraduationCap size={18} style={{ color: "var(--text-secondary)" }} />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <CalendarDays size={13} style={{ color: "var(--text-muted)" }} />
                  <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>{edu.duration}</span>
                </div>

                <h3 className="font-bold text-base mb-1 leading-snug" style={{ color: "var(--text-primary)" }}>
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium mb-1" style={{ color: "var(--text-secondary)" }}>
                  {edu.institution}
                </p>
                <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>{edu.location}</p>

                <span className="tag flex items-center gap-1 w-fit">
                  <Award size={11} /> {edu.cgpa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
