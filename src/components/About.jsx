import Reveal from "./Reveal.jsx";
import { about } from "../data.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">01 — About</p>
            <h2>{about.heading}</h2>
          </div>
        </div>
        <div className="about-grid">
          <Reveal>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <Reveal as="div" className="about-facts">
            {about.facts.map((f) => (
              <div key={f.k}>
                <span>{f.k}</span>
                <span>{f.v}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
