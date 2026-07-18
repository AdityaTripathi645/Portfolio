import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { certificates } from "../data.js";

export default function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <section className="section" id="certificates">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">07 — Certificates</p>
            <h2>Credentials and recognitions</h2>
          </div>
          <p className="section-note">
            Add a placeholder, summary, issue date, and location for each
            certificate here.
          </p>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <Reveal
              as="article"
              className="certificate-card"
              key={certificate.title}
            >
              <div className="certificate-card-head">
                <div>
                  <p className="certificate-type">{certificate.type}</p>
                  <h3>{certificate.title}</h3>
                </div>
                <button
                  className="cert-info-btn"
                  onClick={() => setActiveCertificate(certificate)}
                  aria-label={`Open details for ${certificate.title}`}
                >
                  i
                </button>
              </div>

              <p className="certificate-description">
                {certificate.description}
              </p>

              <div className="certificate-meta">
                <span>{certificate.issuedDate}</span>
                <span>{certificate.place}</span>
              </div>

              <div className="certificate-image">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {activeCertificate && (
          <div className="cert-modal" role="dialog" aria-modal="true">
            <div className="cert-modal-card">
              <div className="cert-modal-head">
                <div>
                  <p className="certificate-type">{activeCertificate.type}</p>
                  <h3>{activeCertificate.title}</h3>
                </div>
                <button
                  className="cert-info-btn"
                  onClick={() => setActiveCertificate(null)}
                  aria-label="Close certificate details"
                >
                  ×
                </button>
              </div>

              <p className="certificate-description">
                {activeCertificate.description}
              </p>

              <div className="certificate-meta">
                <span>Issued: {activeCertificate.issuedDate}</span>
                <span>Place: {activeCertificate.place}</span>
              </div>

              <div className="certificate-image large">
                <img
                  src={activeCertificate.image}
                  alt={`${activeCertificate.title} certificate`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
