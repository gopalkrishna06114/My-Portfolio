import {
  SiSpring, SiReact, SiMysql, SiPostgresql,
  SiDocker, SiGit, SiGithub, SiJavascript,
  SiHibernate, SiRedis, SiPostman, SiLinux,
  SiNodedotjs, SiVercel, SiRender, SiMongodb, SiSpringboot,
  SiCplusplus, SiC, SiPython, SiTailwindcss, SiHtml5,
  SiExpress, SiIntellijidea, SiEclipseide, SiVscodium,
  SiBootstrap, SiAndroidstudio, SiJsonwebtokens
} from "react-icons/si";
import { DiCss3Full } from "react-icons/di";

const JavaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#f89820">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 0 .553.457 3.393.639"/>
  </svg>
);

const RestApiIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h10M4 18h7"/>
    <circle cx="18" cy="18" r="3"/>
    <path d="m21 21-1.5-1.5"/>
  </svg>
);

const stack = [
  // Languages
  { name: "Java",        Icon: JavaIcon,         color: "#f89820" },
  { name: "C",           Icon: SiC,              color: "#A8B9CC" },
  { name: "C++",         Icon: SiCplusplus,      color: "#00599C" },
  { name: "Python",      Icon: SiPython,         color: "#3776AB" },
  { name: "JavaScript",  Icon: SiJavascript,     color: "#F7DF1E" },
  // Frontend
  { name: "HTML5",       Icon: SiHtml5,          color: "#E34F26" },
  { name: "CSS3",        Icon: DiCss3Full,       color: "#1572B6" },
  { name: "Tailwind",    Icon: SiTailwindcss,    color: "#06B6D4" },
  { name: "Bootstrap",   Icon: SiBootstrap,      color: "#7952B3" },
  { name: "React",       Icon: SiReact,          color: "#61DAFB" },
  // Backend
  { name: "Spring Boot", Icon: SiSpringboot,     color: "#6DB33F" },
  { name: "Spring",      Icon: SiSpring,         color: "#6DB33F" },
  { name: "Hibernate",   Icon: SiHibernate,      color: "#59666C" },
  { name: "Express.js",  Icon: SiExpress },
  { name: "Node.js",     Icon: SiNodedotjs,      color: "#339933" },
  { name: "REST API",    Icon: RestApiIcon },
  { name: "JWT",         Icon: SiJsonwebtokens },
  // Databases
  { name: "MySQL",       Icon: SiMysql,          color: "#4479A1" },
  { name: "PostgreSQL",  Icon: SiPostgresql,     color: "#336791" },
  { name: "MongoDB",     Icon: SiMongodb,        color: "#47A248" },
  { name: "Redis",       Icon: SiRedis,          color: "#DC382D" },
  // DevOps / Tools
  { name: "Docker",      Icon: SiDocker,         color: "#2496ED" },
  { name: "Git",         Icon: SiGit,            color: "#F05032" },
  { name: "GitHub",      Icon: SiGithub },
  { name: "Postman",     Icon: SiPostman,        color: "#FF6C37" },
  { name: "Linux",       Icon: SiLinux,          color: "#FCC624" },
  { name: "Vercel",      Icon: SiVercel },
  { name: "Render",      Icon: SiRender,         color: "#46E3B7" },
  // IDEs
  { name: "IntelliJ",    Icon: SiIntellijidea,   color: "#FE315D" },
  { name: "Eclipse",     Icon: SiEclipseide,     color: "#2C2255" },
  { name: "VS Code",     Icon: SiVscodium,       color: "#007ACC" },
  { name: "Android Studio", Icon: SiAndroidstudio, color: "#3DDC84" },
];

const doubled = [...stack, ...stack];

export default function TechStack() {
  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <div className="section-divider"><span>Tech Stack</span></div>

      <div className="text-center mb-6">
        <h2 className="font-bold leading-tight mb-3"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--text-primary)" }}>
          Tools I{" "}
          <span style={{ color: "var(--text-muted)" }}>work with</span>{" "}
          and{" "}
          <span style={{ color: "var(--text-secondary)" }}>build on.</span>
        </h2>
        <p className="text-sm max-w-md mx-auto mb-6" style={{ color: "var(--text-muted)" }}>
          Technologies across backend, frontend, databases, and DevOps.
        </p>
      </div>

      <div
        className="overflow-hidden rounded-2xl py-6"
        style={{ background: "var(--bg-card)", border: "0.5px solid var(--border)" }}
      >
        <div className="flex marquee-track gap-10 w-max px-6">
          {doubled.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-1 select-none"
              title={item.name}
            >
              <item.Icon
                size={22}
                style={{ color: item.color || "var(--text-primary)", flexShrink: 0 }}
              />
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
