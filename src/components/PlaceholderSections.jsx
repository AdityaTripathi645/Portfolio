import Reveal from "./Reveal.jsx";
import { writing } from "../data.js";

const testimonials = [
  {
    quote:
      "He brings a rare mix of curiosity, execution, and calm problem-solving — especially when the idea has to become something real under pressure.",
    author: "Collaborator",
  },
  {
    quote:
      "What stands out is the way he moves from research to build without losing sight of the human problem behind the technology.",
    author: "Peer / community builder",
  },
];

export default function PlaceholderSections() {
  return (
    <section className="section alt" id="writing">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">12 — Writing & voices</p>
            <h2>
              Notes, reflections, and a few words from people who’ve worked with
              him
            </h2>
          </div>
        </div>
        <div className="placeholder-grid">
          <Reveal as="div" className="placeholder-card">
            <h3>Blog</h3>
            <ul className="mini-list">
              {writing.map((post) => (
                <li key={post.title}>
                  <strong>{post.title}</strong>
                  <p>{post.excerpt}</p>
                  <span>
                    {post.date} · {post.meta}
                  </span>
                  <div className="writing-tags">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal as="div" className="placeholder-card">
            <h3>Testimonials</h3>
            <ul className="mini-list testimonials-list">
              {testimonials.map((item) => (
                <li key={item.author}>
                  <p>“{item.quote}”</p>
                  <span>— {item.author}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
