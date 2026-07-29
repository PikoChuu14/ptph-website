import { useEffect, useState } from "react";

import {
  siteInfo as defaultSiteInfo,
  contactInfo as defaultContactInfo,
  formLinks as defaultFormLinks,
  heroContent as defaultHeroContent,
  servicePosts as defaultServicePosts,
  benefits as defaultBenefits,
  programmes as defaultProgrammes,
  sectionContent as defaultSectionContent,
  registerContent as defaultRegisterContent,
  joinTeamContent as defaultJoinTeamContent,
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
        <a href="#why-ptph">Kenapa Kami?</a>
        <a href="#programmes">Program</a>
        <a href="#register">Daftar</a>
        <a href="#join-team">Sertai Kami</a>
        <a href="#gallery"> Galeri</a>
      </div>
    </nav>
  );
}

function Hero({ heroContent, contactInfo, servicePostsContent }) {
  return (
    <section className="hero">
      <div className="hero-text reveal reveal-left">
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
    <div className="section-title reveal">
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

function Programmes({ programmesContent }) {
  const programmes = programmesContent?.items || [];
  const [currentProgramme, setCurrentProgramme] = useState(0);

  const goToNextProgramme = () => {
    if (programmes.length === 0) return;

    setCurrentProgramme((prevIndex) =>
      prevIndex === programmes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousProgramme = () => {
    if (programmes.length === 0) return;

    setCurrentProgramme((prevIndex) =>
      prevIndex === 0 ? programmes.length - 1 : prevIndex - 1
    );
  };

  if (programmes.length === 0) {
    return null;
  }

  const programme = programmes[currentProgramme];

  return (
    <section className="section programmes-section reveal" id="programmes">
      <div className="section-title">
        <p>{programmesContent.label}</p>
        <h2>{programmesContent.title}</h2>
        <span>{programmesContent.description}</span>
      </div>

      <div className="programme-carousel">
        <button
          className="programme-arrow programme-prev"
          onClick={goToPreviousProgramme}
          aria-label="Program sebelumnya"
        >
          ‹
        </button>

        <div className="programme-feature-card reveal">
          <div className="programme-card-header">
            <p className="programme-count">
              Program {currentProgramme + 1} / {programmes.length}
            </p>

            <h3>{programme.title}</h3>

            <span className="programme-target">{programme.target}</span>
          </div>

          <div className="programme-info-grid">
            <div>
              <h4>Fokus Pembelajaran</h4>
              <p>{programme.focus}</p>
            </div>

            <div>
              <h4>Masa Kelas</h4>

              <div className="schedule-list">
                {(programme.schedules || []).map((schedule, index) => (
                  <div className="schedule-row" key={`${schedule.day}-${index}`}>
                    <span className="schedule-day">{schedule.day}</span>
                    <span className="schedule-time">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4>Yuran</h4>
              <p>{programme.fee}</p>
            </div>

            <div>
              <h4>Yuran Pendaftaran</h4>
              <p>{programme.registrationFee}</p>
            </div>
          </div>

          <div className="programme-subjects">
            {(programme.subjects || []).map((subject) => (
              <span key={subject}>{subject}</span>
            ))}
          </div>

          {programme.note && <p className="programme-note">{programme.note}</p>}
        </div>

        <button
          className="programme-arrow programme-next"
          onClick={goToNextProgramme}
          aria-label="Program seterusnya"
        >
          ›
        </button>
      </div>

      <div className="programme-dots">
        {programmes.map((item, index) => (
          <button
            key={item.title}
            className={
              currentProgramme === index
                ? "programme-dot active-programme-dot"
                : "programme-dot"
            }
            onClick={() => setCurrentProgramme(index)}
            aria-label={`Lihat ${item.title}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

function Gallery({ galleryContent }) {
  const images = galleryContent?.images || [];

  if (images.length === 0) {
    return null;
  }

  const loopingImages = [...images, ...images];

  return (
    <section className="section gallery-section reveal" id="gallery">
      <div className="section-title">
        <p>{galleryContent.label}</p>
        <h2>{galleryContent.title}</h2>
        <span>{galleryContent.description}</span>
      </div>

      <div className="gallery-marquee">
        <div className="gallery-track">
          {loopingImages.map((image, index) => (
            <div className="gallery-item" key={`${image}-${index}`}>
              <img src={image} alt={`Galeri PTPH ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Register({ registerContent, contactInfo, formLinks }) {
  return (
    <section className="section register-section reveal" id="register">
      <div className="register-content">
        <p className="badge">{registerContent.label}</p>

        <h2>{registerContent.title}</h2>

        <p>{registerContent.description}</p>

        <div className="cta-buttons">
          <a
            href={formLinks.studentRegistration}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
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
    <section className="section join-team-section reveal" id="join-team">
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
      <div className="service-carousel reveal reveal-right reveal-delay-1">
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

const defaultGalleryContent = {
  label: "Galeri",
  title: "Galeri PTPH",
  description:
    "Lihat suasana kelas, aktiviti pembelajaran dan persekitaran di Pusat Tuisyen Permata Hikmah.",
  images: [],
};

function useScrollReveal(dependency) {
  useEffect(() => {
    const selector = ".reveal";

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        } else {
          entry.target.classList.remove("reveal-visible");
        }
      });
    };

    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(handleIntersect, {
            threshold: 0.15,
            rootMargin: "0px 0px -60px 0px",
          })
        : null;

    const observed = new WeakSet();

    const observeAll = () => {
      if (!observer) return;

      const elements = Array.from(document.querySelectorAll(selector));
      elements.forEach((el) => {
        if (!observed.has(el)) {
          observer.observe(el);
          observed.add(el);
        }
      });
    };

    observeAll();

    // Watch for DOM changes so newly added .reveal elements are observed
    const mo = new MutationObserver((mutations) => {
      let needsObserve = false;

      for (const m of mutations) {
        if (m.type === "childList") {
          for (const node of Array.from(m.addedNodes)) {
            if (node.nodeType === 1 && node.matches && node.matches(selector)) {
              needsObserve = true;
              break;
            }
            if (node.nodeType === 1 && node.querySelector && node.querySelector(selector)) {
              needsObserve = true;
              break;
            }
          }
        }

        if (m.type === "attributes" && m.target && m.target.matches && m.target.matches(selector)) {
          needsObserve = true;
        }

        if (needsObserve) break;
      }

      if (needsObserve) observeAll();
    });

    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });

    return () => {
      if (observer) observer.disconnect();
      mo.disconnect();
    };
  }, [dependency]);
}

function App() {
  const [content, setContent] = useState({
    siteInfo: defaultSiteInfo,
    contactInfo: defaultContactInfo,
    formLinks: defaultFormLinks,
    heroContent: defaultHeroContent,
    servicePosts: {
      label: "Perkhidmatan Semasa",
      title: "Promosi & Program",
      hint: "Klik poster untuk lihat dengan lebih jelas",
      posts: defaultServicePosts,
    },
    benefits: {
      ...defaultSectionContent.whyPtph,
      items: defaultBenefits,
    },
    programmes: {
      ...defaultSectionContent.programmes,
      items: defaultProgrammes,
    },
    gallery: defaultGalleryContent,
    registration: defaultRegisterContent,
    joinTeam: defaultJoinTeamContent,
  });

  useScrollReveal(content);

  useEffect(() => {
    async function loadContent() {
      const [
          siteInfoData,
          formsData,
          heroData,
          servicePostsData,
          whyPtphData,
          programmesData,
          galleryData,
          registrationData,
          joinTeamData,
          footerData,
        ] = await Promise.all([
          fetchJson("/content/site-info.json", defaultSiteInfo),
          fetchJson("/content/forms.json", {
            studentRegistration: defaultFormLinks.studentRegistration,
            careerApplication: defaultFormLinks.careerApplication,
            whatsappUrl: defaultContactInfo.whatsappUrl,
          }),
          fetchJson("/content/hero.json", defaultHeroContent),
          fetchJson("/content/service-posts.json", {
            label: "Perkhidmatan Semasa",
            title: "Promosi & Program",
            hint: "Klik poster untuk lihat dengan lebih jelas",
            posts: defaultServicePosts,
          }),
          fetchJson("/content/why-ptph.json", {
            ...defaultSectionContent.whyPtph,
            items: defaultBenefits,
          }),
          fetchJson("/content/programmes.json", {
            ...defaultSectionContent.programmes,
            items: defaultProgrammes,
          }),
          fetchJson("/content/gallery.json", {
            label: "Galeri",
            title: "Suasana Pembelajaran di PTPH",
            description:
              "Lihat suasana kelas, aktiviti pembelajaran dan persekitaran di Pusat Tuisyen Permata Hikmah.",
            images: [],
          }),
          fetchJson("/content/registration.json", defaultRegisterContent),
          fetchJson("/content/join-team.json", defaultJoinTeamContent),
          fetchJson("/content/footer.json", defaultContactInfo),
        ]);

      setContent({
        siteInfo: siteInfoData,
        formLinks: formsData,
        heroContent: heroData,
        servicePosts: servicePostsData,
        benefits: whyPtphData,
        programmes: programmesData,
        gallery: galleryData,
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

      <Gallery galleryContent={content.gallery} />

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