import Reveal from "./Reveal.jsx";
import { community } from "../data.js";

export default function Community() {
  return (
    <section className="section" id="community">
      <div className="wrap community-wrap">
        <Reveal>
          <p className="eyebrow">09 — Community</p>
          <h2>Building it with other people</h2>
          {community.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <Reveal as="ul" className="community-list">
          {community.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Reveal>
        <Reveal style={{ marginTop: 26 }}>
          <a
            className="btn btn-ghost icon-link"
            href="https://echo-engineers.vercel.app/"
            target="_blank"
            rel="noopener"
          >
            <svg className="ico">
              <use href="https://echo-engineers.vercel.app/" />
            </svg>{" "}
            Visit the community site ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
