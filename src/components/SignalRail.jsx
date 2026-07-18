import { useEffect, useState } from "react";

const SECTION_IDS = ["hero", "about", "skills", "work", "experience", "research", "achievements", "community", "friends", "writing", "contact"];

export default function SignalRail() {
  const [height, setHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 800);
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState([]);
  const [activeId, setActiveId] = useState(SECTION_IDS[0]);

  useEffect(() => {
    function computeDots() {
      const h = window.innerHeight;
      setHeight(h);
      const sections = SECTION_IDS.filter((id) => document.getElementById(id));
      setDots(
        sections.map((id, i) => ({
          id,
          y: (h / (sections.length + 1)) * (i + 1),
        }))
      );
    }
    computeDots();
    window.addEventListener("resize", computeDots);
    return () => window.removeEventListener("resize", computeDots);
  }, []);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.min(1, scrollTop / Math.max(docHeight, 1));
      setProgress(p);

      let active = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) active = id;
      }
      setActiveId(active);
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="rail" aria-hidden="true">
      <svg width="26" height="100%" viewBox={`0 0 26 ${height}`} preserveAspectRatio="none" style={{ height: "100vh" }}>
        <line className="rail-line" x1="13" y1="0" x2="13" y2={height} vectorEffect="non-scaling-stroke" />
        <line
          className="rail-progress"
          x1="13"
          y1="0"
          x2="13"
          y2={height * progress}
          vectorEffect="non-scaling-stroke"
        />
        {dots.map((d) => (
          <circle
            key={d.id}
            className={`rail-dot ${activeId === d.id ? "active" : ""}`}
            cx="13"
            cy={d.y}
            r="3.2"
            onClick={() => document.getElementById(d.id)?.scrollIntoView({ behavior: "smooth" })}
          />
        ))}
      </svg>
    </div>
  );
}
