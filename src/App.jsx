import { useEffect, useState } from "react";

const servicePosts = [
  {
    title: "Pengambilan 2026",
    description: "Subjek sekolah rendah, small group, guru berpengalaman.",
    image: "/fb-post/ambilan2026.png",
  },
  {
    title: "Pakej Peperiksaan Darjah 4",
    description: "Fokus BM, BI, Matematik dan Sains untuk persediaan peperiksaan.",
    image: "/fb-post/darjah4.png",
  },
  {
    title: "Kelas Khas Persiapan Darjah 1",
    description: "Membaca BM, membaca BI dan Matematik untuk kanak-kanak 5/6 tahun.",
    image: "/fb-post/darjah1.png",
  },
];

const programmes = [
  {
    title: "Early Education",
    description:
      "Learning support for pre-primary students to build strong basic reading, writing, counting, and learning habits.",
    subjects: ["Tadika", "Belajar"],
  },
  {
    title: "Primary School Tuition",
    description:
      "Academic support for primary school students from Year 1 until Year 4, following important school subjects.",
    subjects: ["Tahun 1", "Tahun 2", "Tahun 3", "Tahun 4"],
  },
  {
    title: "Academic Subjects",
    description:
      "Core subject guidance to help students improve their understanding and confidence in class.",
    subjects: [
      "Bahasa Melayu",
      "Bahasa Inggeris",
      "Matematik",
      "Sains",
    ],
  },
  {
    title: "Islamic & Reading Classes",
    description:
      "Basic Islamic education and reading support to help children strengthen their foundation.",
    subjects: ["Fardu Ain", "Mengaji", "Jawi"],
  },
];

const benefits = [
  {
    title: "Early Learning Support",
    description:
      "PTPH supports children from pre-primary level until Standard 4 to build a strong learning foundation.",
    image: "/why-ptph/early-learning.jpg",
  },
  {
    title: "Experienced Teachers",
    description:
      "Classes are guided by experienced teachers who also teach in government schools.",
    image: "/why-ptph/cikgu.jpg",
  },
  {
    title: "Complete Learning Support",
    description:
      "PTPH offers academic subjects, Islamic education, reading support, Mengaji, and Jawi.",
    image: "/why-ptph/quran-recite.jpg",
  },
  {
    title: "Easy Parent Enquiry",
    description:
      "Parents can easily check information and contact PTPH through WhatsApp or registration form.",
    image: "/why-ptph/whatsapp.jpg",
  },
];

const timetable = [
  {
    day: "Monday",
    time: "8:00 PM - 9:30 PM",
    className: "Mathematics / Science",
  },
  {
    day: "Wednesday",
    time: "8:00 PM - 9:30 PM",
    className: "Bahasa Melayu / English",
  },
  {
    day: "Saturday",
    time: "10:00 AM - 12:00 PM",
    className: "SPM Intensive Class",
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="brand">
        <div className="brand-logo">
          <img src="/icons/ptph-icon.jpeg" alt="PTPH Logo" />
        </div>

        <h2>Pusat Tuisyen Permata Hikmah</h2>
      </div>

      <div className="nav-links">
        <a href="#why-ptph">Why PTPH?</a>
        <a href="#programmes">Programmes</a>
        <a href="#timetable">Timetable</a>
        <a href="#register">Register</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">

        <h1>Early Education & Tuition Support for Young Learners</h1>

        <p>
          PTPH provides early education and tuition support for children from
          pre-primary level until Standard 4. Classes are guided by experienced
          teachers who also teach in government schools.
        </p>

        <div className="hero-buttons">
          <a href="#register" className="primary-btn">
            Register Interest
          </a>
          <a
            href="https://wa.me/60123456789"
            target="_blank"
            className="secondary-btn"
          >
            Contact WhatsApp
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
        label="Why PTPH?"
        title="Why Parents Choose PTPH?"
        description="PTPH focuses on early learning, experienced teaching, and complete support for young students."
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
        label="Programmes"
        title="Subjects and Classes Offered"
        description="PTPH offers early education, academic tuition, and basic Islamic learning support for young students."
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

function Timetable() {
  return (
    <section className="section" id="timetable">
      <SectionTitle
        label="Schedule"
        title="Sample Class Timetable"
        description="A timetable section helps reduce repeated questions about class time and availability."
      />

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((item) => (
              <tr key={item.day}>
                <td>{item.day}</td>
                <td>{item.time}</td>
                <td>{item.className}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Register() {
  return (
    <section className="section register-section" id="register">
      <div>
        <p className="badge">Enquiry</p>
        <h2>Interested to Register?</h2>
        <p>
          Parents can contact PTPH through WhatsApp or submit a simple Google
          Form. This keeps enquiries more organized and easier to follow up.
        </p>
      </div>

      <div className="register-card">
        <h3>Quick Registration Flow</h3>
        <ol>
          <li>Parent views programme and timetable</li>
          <li>Parent clicks WhatsApp or registration form</li>
          <li>Staff confirms class availability</li>
          <li>Student joins the suitable class</li>
        </ol>

        <a
          href="https://forms.gle/"
          target="_blank"
          className="primary-btn full-btn"
        >
          Open Registration Form
        </a>
      </div>
    </section>
  );
}

function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="service-carousel">
      <div className="carousel-header">
        <div>
          <h3>Promotions & Programmes</h3>
        </div>
      </div>

      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {servicePosts.map((post) => (
            <div className="carousel-slide" key={post.title}>
              <img src={post.image} alt={post.title} />
              <div className="slide-content">
                <h4>{post.title}</h4>
                <p>{post.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn prev-btn" onClick={goToPrevious}>
          ‹
        </button>
        <button className="carousel-btn next-btn" onClick={goToNext}>
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
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h3>Pusat Tuisyen Permata Hikmah</h3>

        <div className="footer-info">
          <p>
            <strong>Address:</strong> NO 93-2 JALAN BINA 1, BANDAR SERI ALAM,
            MASAI, 81750, JOHOR
          </p>
          <p>
            <strong>Tel:</strong> 012 - 345 6789
          </p>
          <p>
            <strong>Email:</strong> permatahikmah@example.com
          </p>
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
      <Benefits />
      <Programmes />
      <Timetable />
      <Register />
      <Footer />
    </>
  );
}

export default App;