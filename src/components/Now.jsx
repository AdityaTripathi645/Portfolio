import Reveal from "./Reveal.jsx";
import { now } from "../data.js";

export default function Now() {
  return (
    <section className="section" id="now">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">06 — Now</p>
            <h2>What I’m working toward</h2>
          </div>
        </div>

        <div className="now-grid">
          {[
            { title: "Building", items: now.building },
            { title: "Learning", items: now.learning },
            { title: "Researching", items: now.researching },
            { title: "Reading", items: now.reading },
          ].map((group) => (
            <Reveal as="div" className="now-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="now-card" style={{ marginTop: 16 }}>
          <h3>Looking for</h3>
          <ul>
            {now.lookingFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
