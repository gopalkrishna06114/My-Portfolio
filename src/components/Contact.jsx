import { personal } from "../data/portfolio";
import { Mail, ExternalLink, Handshake } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-8 pb-24 px-4 max-w-5xl mx-auto" id="contact">
      <div className="section-divider"><span>Contact</span></div>

      <div className="card rounded-3xl px-8 py-16 md:py-20 text-center">
        {/* Icon */}
        <div className="icon-box w-16 h-16 rounded-full mx-auto mb-8">
          <Handshake size={28} style={{ color: "var(--text-secondary)" }} />
        </div>

        <h2 className="font-bold leading-tight mb-4"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--text-primary)" }}>
          Let's build{" "}
          <span style={{ color: "var(--text-muted)" }}>your</span>{" "}
          next{" "}
          <br className="hidden md:block" />
          <span style={{ color: "var(--text-secondary)" }}>project together.</span>
        </h2>

        <p className="text-sm mb-10 max-w-sm mx-auto" style={{ color: "var(--text-muted)" }}>
          Open to full time roles, internships, and freelance opportunities. Let's connect.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          <a href={`https://mail.google.com/mail/?view=cm&to=${personal.email}&su=Hello Gopal — Let's Connect`}
            target="_blank"
            rel="noreferrer"
            className="btn-dark"
          >
            <Mail size={14} /> Email Me
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
            <FaLinkedinIn size={14} /> LinkedIn
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          {[
            { Icon: FaGithub,      label: "GitHub",   href: personal.github },
            { Icon: FaLinkedinIn,  label: "LinkedIn", href: personal.linkedin },
            { Icon: Mail, label: "Email", href: `https://mail.google.com/mail/?view=cm&to=${personal.email}&su=Hello Gopal — Let's Connect` },
            { Icon: ExternalLink,  label: "LeetCode", href: personal.leetcode },
          ].map(({ Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-sm hover:opacity-60 transition-opacity"
              style={{ color: "var(--text-muted)" }}>
              <Icon size={15} /> {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
