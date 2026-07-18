import Reveal from "./Reveal.jsx";
import { achievements } from "../data.js";

export default function Achievements() {
  return (
    <section className="section alt" id="achievements">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">08 — Achievements</p>
            <h2>Milestones that reflect real work</h2>
          </div>
        </div>

        <p className="achievement-intro">{achievements.intro}</p>

        <div className="achievement-stats">
          {achievements.stats.map((item) => (
            <Reveal as="div" className="achievement-stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </Reveal>
          ))}
        </div>

        <div className="achievement-grid">
          {achievements.cards.map((card) => (
            <Reveal as="article" className="achievement-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
