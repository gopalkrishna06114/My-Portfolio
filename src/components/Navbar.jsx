import { useState, useEffect } from "react";
import { Sun, Moon, Monitor, Menu, X } from "lucide-react";

const themes = ["light", "dark", "system"];

export default function Navbar() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "system");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const apply = (t) => {
      const isDark =
        t === "dark" ||
        (t === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      document.documentElement.classList.toggle("dark", isDark);
    };
    apply(theme);
    localStorage.setItem("theme", theme);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => { if (theme === "system") apply("system"); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cycleTheme = () =>
    setTheme(themes[(themes.indexOf(theme) + 1) % themes.length]);

  const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  const navLinks = [
    { label: "About",     href: "#about" },
    { label: "Projects",  href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Connect",   href: "#contact" },
    { label: "GitHub",    href: "https://github.com/gopalkrishna06114", external: true },
    { label: "LinkedIn",  href: "https://www.linkedin.com/in/gopal-krishna-2333a7351/", external: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div
        className={`mx-auto max-w-5xl px-5 flex items-center justify-between rounded-2xl transition-all duration-300 ${scrolled ? "py-3 backdrop-blur-md" : "py-0"}`}
        style={{
          background: scrolled ? "color-mix(in srgb, var(--bg-primary) 88%, transparent)" : "transparent",
          border: scrolled ? "0.5px solid var(--border)" : "none",
        }}
      >
        <a href="#" className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
          GK<span style={{ color: "var(--text-muted)" }}>.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="px-4 py-2 rounded-full text-sm font-medium transition-opacity hover:opacity-60"
              style={{ color: "var(--text-secondary)" }}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={cycleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center border transition-opacity hover:opacity-60"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)", background: "var(--bg-card)" }}
            title={`Theme: ${theme}`}>
            <ThemeIcon size={15} />
          </button>
          <button className="md:hidden w-9 h-9 rounded-full flex items-center justify-center border"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)", background: "var(--bg-card)" }}
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl border p-4 flex flex-col gap-1"
          style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "var(--text-primary)" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
