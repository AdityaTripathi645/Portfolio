import Reveal from "./Reveal.jsx";
import { friends } from "../data.js";

export default function Friends() {
  return (
    <section className="section" id="friends">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">10 — Friends &amp; collaborators</p>
            <h2>People I've built with</h2>
          </div>
          <p className="section-note">And many more...</p>
        </div>

        <div className="friends-grid">
          {friends.map((f, i) => (
            <Reveal
              key={i}
              as="a"
              className="friend-card"
              href={f.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="who">
                <span className="name">{f.name}</span>
                <span className="what">{f.what}</span>
              </div>

              <svg className="ico">
                <use href="#icon-link" />
              </svg>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
