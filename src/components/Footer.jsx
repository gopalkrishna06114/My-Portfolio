import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t py-6 px-4" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Gopal Krishna · Build with Love
        </p>
        <div className="flex items-center gap-4">
          {[
            { label: "LinkedIn", href: personal.linkedin },
            { label: "GitHub",   href: personal.github },
            { label: "LeetCode", href: personal.leetcode },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              className="text-xs hover:opacity-60 transition-opacity"
              style={{ color: "var(--text-muted)" }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
