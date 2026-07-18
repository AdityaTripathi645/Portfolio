import Reveal from "./Reveal.jsx";
import { profile } from "../data.js";

const heroStats = [
  { value: "15+", label: "Projects built" },
  { value: "4", label: "Research-led efforts" },
  { value: "3", label: "Live deployments" },
  { value: "20+", label: "Technologies used" },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="wrap hero-grid">
        <Reveal>
          <p className="eyebrow">Portfolio — {profile.location}</p>
          <h1>
            Aditya
            <br />
            Tripathi
          </h1>
          <p className="role-line">{profile.roles}</p>
          <p className="intro">{profile.tagline}</p>
          <div className="hero-actions">
            <a
              className="btn btn-solid"
              href="/Resume.pdf"
              download="Aditya Tripathi Resume.pdf"
            >
              Download résumé ↓
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="hero-photo">
          <img src="/Aditya.jpeg" alt="Portrait of Aditya Tripathi" />
          <div className="cap">Photo — Mr. Aditya Tripathi</div>
        </Reveal>
      </div>
    </section>
  );
}
