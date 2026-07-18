import Reveal from "./Reveal.jsx";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <section className="section alt" id="skills">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">02 — Toolkit</p>
            <h2>What I actually reach for</h2>
          </div>
          <p className="section-note">
            Grouped by use case, with primary tools highlighted.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <Reveal as="div" className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    {item.primary ? <em>Primary</em> : <em>{item.years}</em>}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
