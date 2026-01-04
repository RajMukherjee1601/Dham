import React from "react";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <header className="top-bar">
        <div>
          <h2 className="page-title">📞 Contact Bhairavidham</h2>
          <p className="page-subtitle">
            📍 Follow & Stay Connected with Bhairavidham
          </p>
        </div>
      </header>

      <section className="contact-wrapper">
        {/* Left: Social / Follow */}
        <div className="contact-card">
          <h3 className="section-heading">Follow & Stay Connected</h3>
          <p className="about-text">
            Stay updated with darshan, events, and important announcements from{" "}
            <strong>Bhairavidham</strong>.
          </p>

          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-label">Instagram</span>
              <a
                className="contact-link"
                href="https://instagram.com/bhairavidham_official"
                target="_blank"
                rel="noopener noreferrer"
              >
                @bhairavidham_official
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">Facebook</span>
              <span className="contact-link">Maa Bhairavi Dhaam</span>
            </div>

            <div className="contact-item">
              <span className="contact-label">YouTube</span>
              <a
                className="contact-link"
                href="https://youtube.com/@bhairavidham?si=B3gss7P1wFU0j3Ei"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bhairavidham Official
              </a>
            </div>
          </div>
        </div>

        {/* Right: Phone / Email / Location */}
        <div className="contact-card contact-card-right">
          <h3 className="section-heading">Contact Details</h3>

          <div className="contact-block">
            <span className="contact-label">Phone</span>
            <div className="contact-values">
              <a href="tel:9201095542" className="contact-link">
                9201095542
              </a>
              <span className="contact-separator">|</span>
              <a href="tel:7898125031" className="contact-link">
                7898125031
              </a>
            </div>
          </div>

          <div className="contact-block">
            <span className="contact-label">Email</span>
            <a
              href="mailto:devibharavidham@gmail.com"
              className="contact-link"
            >
            <div>
              devibharavidham@gmail.com
              </div>
            </a>
          </div>

          <div className="contact-block">
            <span className="contact-label">Location</span>
            <p className="contact-location">
              Bhairavidham, Khaira – Rajnandgaon (C.G.)
            </p>
          </div>

          <p className="contact-note">
            For any queries related to darshan, events, or seva, please call or
            email us. 🙏
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
