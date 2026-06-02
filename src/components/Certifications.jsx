import { certifications } from "../data/portfolio";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-8 px-4 max-w-5xl mx-auto" id="certifications">
      <div className="section-divider"><span>Certifications</span></div>
        <div className="text-center mb-10">
          <h2 className="font-bold leading-tight mb-3"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--text-primary)" }}>
            Skills I've{" "}
            <span style={{ color: "var(--text-muted)" }}>validated</span>{" "}
            and{" "}
            <span style={{ color: "var(--text-secondary)" }}>earned.</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Certifications from industry-recognised platforms.
          </p>
        </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {certifications.map((cert, i) => (
          <div key={i} className="card rounded-3xl p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-200">
            <div className="icon-box">
              <Award size={18} style={{ color: "var(--text-secondary)" }} />
            </div>
            <div>
              <p className="font-semibold text-sm leading-snug mb-1" style={{ color: "var(--text-primary)" }}>
                {cert.title}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {cert.issuer} · {cert.year}
              </p>
            </div>
            <a href={cert.link} target="_blank" rel="noreferrer"
              className="flex items-center gap-1 text-xs font-medium mt-auto hover:opacity-60 transition-opacity"
              style={{ color: "var(--text-secondary)" }}>
              View <ExternalLink size={11} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
