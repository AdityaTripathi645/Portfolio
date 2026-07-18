import { useState } from "react";
import { profile, navSections } from "../data.js";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <span>{profile.initials}</span>
          </span>
          <span className="brand-name" aria-label={profile.name}>
            {profile.name.split("").map((char, index) => (
              <span key={`${char}-${index}`} className="brand-letter">
                {char}
              </span>
            ))}
          </span>
        </a>
        <nav className={`links ${open ? "open" : ""}`}>
          {navSections.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={() => setOpen(false)}>
              {s.label}
            </a>
          ))}
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
}
