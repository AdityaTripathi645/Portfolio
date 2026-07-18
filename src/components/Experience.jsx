import Reveal from "./Reveal.jsx";
import { experience } from "../data.js";

export default function Experience() {
  return (
    <section className="section alt" id="experience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">04 — Experience</p>
            <h2>How I've spent the time</h2>
          </div>
        </div>
        <div className="timeline">
          {experience.map((e) => (
            <Reveal as="div" className="tl-item" key={e.title}>
              <span className="tl-time">{e.time}</span>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
