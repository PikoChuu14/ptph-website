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

function Navbar({siteInfo, contactInfo}) {
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

function Hero({ heroContent, contactInfo, servicePostsContent }) {
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

      <ServiceCarousel servicePostsContent={servicePostsContent} />
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

function Benefits({benefitsContent}) {
  return (
    <section className="section" id="why-ptph">
      <SectionTitle
        label={benefitsContent.label}
        title={benefitsContent.title}
        description={benefitsContent.description}
      />

      <div className="benefit-grid">
        {benefitsContent.items.map((benefit, index) => (
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

function Programmes({programmesContent}) {
  return (
    <section className="section light-section" id="programmes">
      <SectionTitle
        label={programmesContent.label}
        title={programmesContent.title}
        description={programmesContent.description}
      />

      <div className="card-grid programme-grid">
        {programmesContent.items.map((programme) => (
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

function Register({ registerContent, contactInfo, formLinks }) {
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

function JoinTeam({ joinTeamContent, formLinks }) {
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

function ServiceCarousel({ servicePostsContent }) {
  const posts = servicePostsContent?.posts || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);

  const goToNext = () => {
    if (posts.length === 0) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    if (posts.length === 0) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  const goToNextModal = () => {
    if (posts.length === 0) return;

    setSelectedPostIndex((prevIndex) =>
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousModal = () => {
    if (posts.length === 0) return;

    setSelectedPostIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (selectedPostIndex !== null || posts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === posts.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedPostIndex, posts.length]);

  useEffect(() => {
    if (currentIndex > posts.length - 1) {
      setCurrentIndex(0);
    }

    if (selectedPostIndex !== null && selectedPostIndex > posts.length - 1) {
      setSelectedPostIndex(null);
    }
  }, [posts.length, currentIndex, selectedPostIndex]);

  if (posts.length === 0) {
    return null;
  }

  const selectedPost =
    selectedPostIndex !== null ? posts[selectedPostIndex] : null;

  return (
    <>
      <div className="service-carousel">
        <div className="carousel-header">
          <div>
            {servicePostsContent?.label && (
              <p className="small-label">{servicePostsContent.label}</p>
            )}

            <h3>{servicePostsContent?.title || "Promosi & Program"}</h3>
          </div>
        </div>

        <div className="carousel-window">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {posts.map((post, index) => (
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
          {posts.map((post, index) => (
            <button
              key={post.title}
              className={currentIndex === index ? "dot active-dot" : "dot"}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        <p className="carousel-hint">
          {servicePostsContent?.hint ||
            "Klik poster untuk lihat dengan lebih jelas"}
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
                {posts.map((post) => (
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
                {posts.map((post, index) => (
                  <button
                    key={post.title}
                    className={
                      selectedPostIndex === index ? "dot active-dot" : "dot"
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

function Footer({siteInfo, contactInfo}) {
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

async function fetchJson(path, fallback) {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return fallback;
  }
}

function App() {
  const [content, setContent] = useState({
    siteInfo: siteInfo,
    contactInfo: contactInfo,
    formLinks: formLinks,
    heroContent: heroContent,
    servicePosts: {
      label: "Perkhidmatan Semasa",
      title: "Promosi & Program",
      hint: "Klik poster untuk lihat dengan lebih jelas",
      posts: servicePosts,
    },
    benefits: {
      ...sectionContent.whyPtph,
      items: benefits,
    },
    programmes: {
      ...sectionContent.programmes,
      items: programmes,
    },
    registration: registerContent,
    joinTeam: joinTeamContent,
  });

  useEffect(() => {
    async function loadContent() {
      const [
        siteInfoData,
        formsData,
        heroData,
        servicePostsData,
        whyPtphData,
        programmesData,
        registrationData,
        joinTeamData,
        footerData,
      ] = await Promise.all([
        fetchJson("/content/site-info.json", siteInfo),
        fetchJson("/content/forms.json", {
          studentRegistration: formLinks.studentRegistration,
          careerApplication: formLinks.careerApplication,
          whatsappUrl: contactInfo.whatsappUrl,
        }),
        fetchJson("/content/hero.json", heroContent),
        fetchJson("/content/service-posts.json", {
          label: "Perkhidmatan Semasa",
          title: "Promosi & Program",
          hint: "Klik poster untuk lihat dengan lebih jelas",
          posts: servicePosts,
        }),
        fetchJson("/content/why-ptph.json", {
          ...sectionContent.whyPtph,
          items: benefits,
        }),
        fetchJson("/content/programmes.json", {
          ...sectionContent.programmes,
          items: programmes,
        }),
        fetchJson("/content/registration.json", registerContent),
        fetchJson("/content/join-team.json", joinTeamContent),
        fetchJson("/content/footer.json", contactInfo),
      ]);

      setContent({
        siteInfo: siteInfoData,
        formLinks: formsData,
        heroContent: heroData,
        servicePosts: servicePostsData,
        benefits: whyPtphData,
        programmes: programmesData,
        registration: registrationData,
        joinTeam: joinTeamData,
        contactInfo: {
          ...footerData,
          whatsappUrl: formsData.whatsappUrl,
          datangUrl: siteInfoData.datangUrl,
        },
      });
    }

    loadContent();
  }, []);

  return (
    <>
      <Navbar siteInfo={content.siteInfo} contactInfo={content.contactInfo} />

      <Hero
        heroContent={content.heroContent}
        contactInfo={content.contactInfo}
        servicePostsContent={content.servicePosts}
      />

      <Benefits benefitsContent={content.benefits} />

      <Programmes programmesContent={content.programmes} />

      <Register
        registerContent={content.registration}
        contactInfo={content.contactInfo}
        formLinks={content.formLinks}
      />

      <JoinTeam
        joinTeamContent={content.joinTeam}
        formLinks={content.formLinks}
      />

      <Footer
        siteInfo={content.siteInfo}
        contactInfo={content.contactInfo}
      />
    </>
  );
}

export default App;