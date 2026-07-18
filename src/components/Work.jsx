import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { projects } from "../data.js";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "hardware", label: "Hardware" },
  { key: "ai", label: "AI" },
  { key: "web", label: "Web" },
  { key: "blockchain", label: "Blockchain" },
];

export default function Work() {
  const [filter, setFilter] = useState("all");

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">03 — Featured work</p>
            <h2>Five things I've actually shipped</h2>
          </div>
          <p className="section-note">
            Filter by kind — hardware, AI, web, or blockchain.
          </p>
        </div>

        <div className="filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${filter === f.key ? "active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {projects.map((p) => {
            const hide = filter !== "all" && !p.cats.includes(filter);
            return (
              <Reveal
                as="article"
                className={`project-card ${hide ? "hide" : ""}`}
                key={p.title}
              >
                <div className="project-image">
                  <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
                </div>
                <div className="project-top">
                  <h3>{p.title}</h3>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p>{p.desc}</p>
                <div className="project-meta-block">
                  <div>
                    <span className="meta-label">Problem</span>
                    <p>{p.problem}</p>
                  </div>
                  <div>
                    <span className="meta-label">Solution</span>
                    <p>{p.solution}</p>
                  </div>
                </div>
                <ul className="project-list">
                  <li>
                    <b>Tech:</b> {p.technologies.join(" · ")}
                  </li>
                  <li>
                    <b>Status:</b> {p.status}
                  </li>
                  <li>
                    <b>Repo:</b>{" "}
                    <a href={p.repo} target="_blank" rel="noopener">
                      Open
                    </a>
                    {p.demo && p.demo !== "#" && (
                      <>
                        {" "}
                        · <b>Demo:</b>{" "}
                        <a href={p.demo} target="_blank" rel="noopener">
                          Open
                        </a>
                      </>
                    )}
                  </li>
                </ul>
                {p.contributors?.length > 0 && (
                  <div className="project-contributors">
                    <span className="meta-label">Contributors</span>
                    <div className="contributor-list">
                      {p.contributors.map((c) => (
                        <a
                          key={c.name}
                          href={c.link}
                          target="_blank"
                          rel="noopener"
                          className="contributor-chip"
                        >
                          {c.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                <div className="project-foot">
                  <span>{p.footLeft}</span>
                  <span>{p.footRight}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
