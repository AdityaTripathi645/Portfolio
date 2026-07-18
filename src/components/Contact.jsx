import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { contact, profile } from "../data.js";

const ICONS = {
  GitHub: "icon-github",
  LinkedIn: "icon-linkedin",
  Email: "icon-mail",
  ORCID: "icon-orcid",
  "Nature profile": "icon-nature",
  Overleaf: "icon-overleaf",
  Community: "icon-mesh",
};

export default function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setSending(true);
    setStatus("Sending your message…");
    try {
      const res = await fetch(contact.formAction, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("Thanks — your message is on its way.");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setStatus(
          data?.errors
            ? data.errors.map((err) => err.message).join(", ")
            : "Sorry, something went wrong.",
        );
      }
    } catch {
      setStatus(
        "Sorry, something went wrong. You can still email me directly.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">13 — Contact</p>
            <h2>Say hello</h2>
          </div>
          <p className="section-note">
            Best for collaboration, research, or just a good technical
            conversation.
          </p>
        </div>
        <div className="contact-grid">
          <Reveal>
            <div className="contact-meta">
              <p className="status">{contact.availability}</p>
              <p>{contact.location}</p>
              <p>{profile.email}</p>
            </div>
            <p className="link-section-label">Connect</p>
            <ul className="contact-links">
              {contact.connect.map((c) => (
                <li key={c.label}>
                  <a
                    className="icon-link"
                    href={c.href}
                    target="_blank"
                    rel="noopener"
                  >
                    <svg className="ico">
                      <use href={`#${ICONS[c.label]}`} />
                    </svg>{" "}
                    {c.label}
                  </a>
                  <a href={c.href}>{c.value}</a>
                </li>
              ))}
            </ul>
            <p className="link-section-label">Research profiles</p>
            <ul className="contact-links">
              {contact.research.map((c) => (
                <li key={c.label}>
                  <a
                    className="icon-link"
                    href={c.href}
                    target="_blank"
                    rel="noopener"
                  >
                    <svg className="ico">
                      <use href={`#${ICONS[c.label]}`} />
                    </svg>{" "}
                    {c.label}
                  </a>
                  <a href={c.href} target="_blank" rel="noopener">
                    {c.value}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="from_name" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="reply_to" type="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="contact-actions">
              <button
                className="btn btn-solid"
                type="submit"
                style={{ alignSelf: "flex-start" }}
                disabled={sending}
              >
                Send message →
              </button>
              <a
                className="btn btn-ghost"
                href="/Resume.pdf"
                download="Aditya Tripathi Resume.pdf"
              >
                Download résumé
              </a>
            </div>
            <p className="form-msg">{status}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
