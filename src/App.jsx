import { useEffect, useState } from "react";

import {
  siteInfo,
  contactInfo,
  formLinks,
  heroContent,
  servicePosts,
  benefits,
  programmes,
  sectionContent,
  registerContent,
  joinTeamContent,
} from "./data/siteContent";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="brand-logo">
          <img src={siteInfo.logo} alt={`${siteInfo.shortName} Logo`} />
        </div>

        <h2>{siteInfo.name}</h2>
      </div>

      <div className="nav-links">
        <a href="#why-ptph">Kenapa PTPH?</a>
        <a href="#programmes">Program</a>
        <a href="#register">Daftar</a>
        <a href="#join-team">Sertai Kami</a>

        <a
          href={contactInfo.datangUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="datang-link"
        >
          Datang.my
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>{heroContent.title}</h1>

        <p>{heroContent.description}</p>

        <div className="hero-buttons">
          <a href="#register" className="primary-btn">
            {heroContent.primaryButton}
          </a>
          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            {heroContent.secondaryButton}
          </a>
        </div>
      </div>

      <ServiceCarousel />
    </section>
  );
}

function SectionTitle({ label, title, description }) {
  return (
    <div className="section-title">
      <p>{label}</p>
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  );
}

function Benefits() {
  return (
    <section className="section" id="why-ptph">
      <SectionTitle
        label={sectionContent.whyPtph.label}
        title={sectionContent.whyPtph.title}
        description={sectionContent.whyPtph.description}
      />

      <div className="benefit-grid">
        {benefits.map((benefit, index) => (
          <div className="benefit-card visual-benefit-card" key={benefit.title}>
            <div className="benefit-image-wrapper">
              <img src={benefit.image} alt={benefit.title} />
            </div>

            <div className="benefit-content">
              <div className="benefit-number">{index + 1}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Programmes() {
  return (
    <section className="section light-section" id="programmes">
      <SectionTitle
        label={sectionContent.programmes.label}
        title={sectionContent.programmes.title}
        description={sectionContent.programmes.description}
      />

      <div className="card-grid programme-grid">
        {programmes.map((programme) => (
          <div className="info-card" key={programme.title}>
            <h3>{programme.title}</h3>
            <p>{programme.description}</p>

            <div className="subject-list">
              {programme.subjects.map((subject) => (
                <span key={subject}>{subject}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Register() {
  return (
    <section className="section register-section" id="register">
      <div className="register-content">
        <p className="badge">{registerContent.label}</p>

        <h2>{registerContent.title}</h2>

        <p>{registerContent.description}</p>

        <div className="cta-buttons">
          <a
            href={formLinks.studentRegistration}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn register-whatsapp-btn"
          >
            {registerContent.formButton}
          </a>

          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            {registerContent.whatsappButton}
          </a>
        </div>

        <p className="form-note">{registerContent.note}</p>
      </div>
    </section>
  );
}

function JoinTeam() {
  return (
    <section className="section join-team-section" id="join-team">
      <div className="join-team-content">
        <div>
          <p className="badge">{joinTeamContent.label}</p>

          <h2>{joinTeamContent.title}</h2>

          {joinTeamContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <a
            href={formLinks.careerApplication}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            {joinTeamContent.button}
          </a>
        </div>

        <div className="join-team-card">
          <h3>{joinTeamContent.opportunitiesTitle}</h3>

          <ul>
            {joinTeamContent.opportunities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === servicePosts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicePosts.length - 1 : prevIndex - 1
    );
  };

  const goToNextModal = () => {
    setSelectedPostIndex((prevIndex) =>
      prevIndex === servicePosts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousModal = () => {
    setSelectedPostIndex((prevIndex) =>
      prevIndex === 0 ? servicePosts.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (selectedPostIndex !== null) return;

    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedPostIndex]);

  const selectedPost =
    selectedPostIndex !== null ? servicePosts[selectedPostIndex] : null;

  return (
    <>
      <div className="service-carousel">
        <div className="carousel-header">
          <div>
            <h3>Promosi & Program</h3>
          </div>
        </div>

        <div className="carousel-window">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {servicePosts.map((post, index) => (
              <div
                className="carousel-slide clickable-slide"
                key={post.title}
                onClick={() => setSelectedPostIndex(index)}
              >
                <img src={post.image} alt={post.title} />

                <div className="slide-content">
                  <h4>{post.title}</h4>
                  <p>{post.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn prev-btn"
            onClick={(event) => {
              event.stopPropagation();
              goToPrevious();
            }}
          >
            ‹
          </button>

          <button
            className="carousel-btn next-btn"
            onClick={(event) => {
              event.stopPropagation();
              goToNext();
            }}
          >
            ›
          </button>
        </div>

        <div className="carousel-dots">
          {servicePosts.map((post, index) => (
            <button
              key={post.title}
              className={currentIndex === index ? "dot active-dot" : "dot"}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        <p className="carousel-hint">
          Klik poster untuk lihat dengan lebih jelas
        </p>
      </div>

      {selectedPost && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedPostIndex(null)}
        >
          <div
            className="post-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedPostIndex(null)}
            >
              ×
            </button>

            <div className="modal-image-window">
              <div
                className="modal-image-track"
                style={{
                  transform: `translateX(-${selectedPostIndex * 100}%)`,
                }}
              >
                {servicePosts.map((post) => (
                  <div className="modal-image-slide" key={post.title}>
                    <img src={post.image} alt={post.title} />
                  </div>
                ))}
              </div>

              <button
                className="modal-nav-btn modal-prev-btn"
                onClick={goToPreviousModal}
              >
                ‹
              </button>

              <button
                className="modal-nav-btn modal-next-btn"
                onClick={goToNextModal}
              >
                ›
              </button>
            </div>

            <div className="modal-text">
              <h3>{selectedPost.title}</h3>
              <p>{selectedPost.description}</p>

              <div className="modal-dots">
                {servicePosts.map((post, index) => (
                  <button
                    key={post.title}
                    className={
                      selectedPostIndex === index
                        ? "dot active-dot"
                        : "dot"
                    }
                    onClick={() => setSelectedPostIndex(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-info-block">
          <h3>{siteInfo.name}</h3>

          <div className="footer-info">
            <p>
              <strong>Alamat:</strong> {contactInfo.address}
            </p>
            <p>
              <strong>Tel:</strong> {contactInfo.phone}
            </p>
            <p>
              <strong>Emel:</strong> {contactInfo.email}
            </p>
          </div>
        </div>

        <div className="footer-map-block">
          <h4>Lokasi Kami</h4>

          <div className="footer-map">
            <iframe
              title={`Lokasi ${siteInfo.name}`}
              src={contactInfo.googleMapEmbedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle />
      <Benefits />
      <Programmes />
      <Register />
      <JoinTeam />
      <Footer />
    </>
  );
}

export default App;