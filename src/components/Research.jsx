import Reveal from "./Reveal.jsx";
import { research } from "../data.js";

export default function Research() {
  return (
    <section className="section" id="research">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">05 — Publications &amp; research</p>
            <h2>Written up, not just built</h2>
          </div>
        </div>

        {research.map((r) => (
          <Reveal as="div" className="paper" key={r.title}>
            <p className="paper-kind">{r.kind}</p>
            <h3>{r.title}</h3>
            <div className="paper-meta">
              {r.meta.map((m) => (
                <span key={m.k}>
                  <b>{m.k}:</b> {m.v}
                </span>
              ))}
            </div>
            <p className="summary">{r.summary}</p>
            <div className="paper-details">
              <div>
                <span className="meta-label">Status</span>
                <p>{r.status}</p>
              </div>
              <div>
                <span className="meta-label">DOI</span>
                <p>{r.doi}</p>
              </div>
              <div>
                <span className="meta-label">PDF</span>
                <p>{r.pdf}</p>
              </div>
            </div>
            <div className="paper-tags">
              {r.keywords.map((word) => (
                <span key={word}>{word}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
