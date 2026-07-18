import Reveal from "./Reveal.jsx";
import { githubStats, profile } from "../data.js";

export default function GitHub() {
  return (
    <section className="section alt" id="github">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">11 — GitHub</p>
            <h2>Public work, visible progress</h2>
          </div>
        </div>

        <div className="github-grid">
          <Reveal as="div" className="github-card">
            <h3>Activity snapshot</h3>
            <div className="github-metrics">
              <div>
                <strong>{githubStats.repos}</strong>
                <span>Repositories</span>
              </div>
              <div>
                <strong>{githubStats.contributions}</strong>
                <span>Contributions</span>
              </div>
            </div>
            <p>{githubStats.calendar}</p>
          </Reveal>

          <Reveal as="div" className="github-card">
            <h3>Most used languages</h3>
            <ul className="tool-list compact">
              {githubStats.languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" className="github-card">
            <h3>Pinned projects</h3>
            <ul className="mini-list">
              {githubStats.pinned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" className="github-card">
            <h3>Profile</h3>
            <p>
              Open-source curiosity, practical builds, and steady iteration
              across side projects and research-backed experiments.
            </p>
            <a
              className="btn btn-ghost"
              href={profile.github}
              target="_blank"
              rel="noopener"
            >
              View GitHub ↗
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
