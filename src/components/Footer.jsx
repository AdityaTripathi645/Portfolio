import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", width: "100%", flexWrap: "wrap", gap: 12 }}>
        <span>© {new Date().getFullYear()} {profile.name}. Built by hand, one section at a time.</span>
        <span>
          Back to <a href="#top" style={{ textDecoration: "underline" }}>top ↑</a>
        </span>
      </div>
    </footer>
  );
}
