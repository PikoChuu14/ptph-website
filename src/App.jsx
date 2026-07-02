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
    title: "Pendidikan Awal",
    description:
      "Sokongan pembelajaran untuk kanak-kanak pra-sekolah bagi membina asas membaca, menulis, mengira dan tabiat belajar yang baik.",
    subjects: ["Tadika", "Belajar", "Mengaji dan Belajar"],
  },
  {
    title: "Tuisyen Sekolah Rendah",
    description:
      "Bimbingan akademik untuk murid Tahun 1 hingga Tahun 4 berdasarkan subjek penting di sekolah.",
    subjects: ["Tahun 1", "Tahun 2", "Tahun 3", "Tahun 4"],
  },
  {
    title: "Subjek Akademik",
    description:
      "Bimbingan subjek teras untuk membantu murid meningkatkan kefahaman dan keyakinan dalam pembelajaran.",
    subjects: [
      "Bahasa Melayu",
      "Bahasa Inggeris",
      "Matematik",
      "Sains",
      "Sains / BI",
      "Matematik & Sains",
      "BM & English",
    ],
  },
  {
    title: "Kelas Islamik & Membaca",
    description:
      "Pendidikan asas Islam dan sokongan membaca untuk membantu kanak-kanak mengukuhkan asas pembelajaran.",
    subjects: ["Fardu Ain", "Mengaji", "Jawi", "Mengaji dan Jawi"],
  },
];
const benefits = [
  {
    title: "Sokongan Pembelajaran Awal",
    description:
      "PTPH membantu kanak-kanak dari peringkat pra-sekolah sehingga Tahun 4 membina asas pembelajaran yang kukuh.",
    image: "/why-ptph/early-learning.jpg",
  },
  {
    title: "Guru Berpengalaman",
    description:
      "Kelas dibimbing oleh guru berpengalaman yang juga mengajar di sekolah kerajaan.",
    image: "/why-ptph/cikgu.jpg",
  },
  {
    title: "Sokongan Pembelajaran Lengkap",
    description:
      "PTPH menawarkan subjek akademik, pendidikan Islam, membaca, mengaji dan Jawi.",
    image: "/why-ptph/quran-recite.jpg",
  },
  {
    title: "Pertanyaan Ibu Bapa Lebih Mudah",
    description:
      "Ibu bapa boleh melihat maklumat kelas dan terus menghubungi PTPH melalui WhatsApp.",
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
        <a href="#why-ptph">Kenapa PTPH?</a>
        <a href="#programmes">Program</a>
        <a href="#timetable">Jadual</a>
        <a href="#register">Daftar</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">

        <h1>Pendidikan Awal & Bimbingan Tuisyen untuk Anak Anda</h1>

        <p>
          PTPH menyediakan pendidikan awal dan bimbingan tuisyen untuk kanak-kanak
          dari peringkat pra-sekolah sehingga Tahun 4. Kelas dibimbing oleh guru
          berpengalaman yang juga mengajar di sekolah kerajaan.
        </p>

        <div className="hero-buttons">
          <a href="#register" className="primary-btn">
            Daftar Minat
          </a>
          <a
            href="https://wa.me/60123456789"
            target="_blank"
            className="secondary-btn"
          >
            Hubungi WhatsApp
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
        label="Kenapa PTPH?"
        title="Mengapa Ibu Bapa Memilih PTPH?"
        description="PTPH menekankan pada pembelajaran awal, pengajaran berpengalaman, dan sokongan menyeluruh untuk pelajar muda."
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
        label="Program"
        title="Mata Pelajaran dan Kelas yang Ditawarkan"
        description="PTPH menawarkan pendidikan awal, bimbingan akademik, dan sokongan pembelajaran Islam asas untuk pelajar muda."
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
      <div className="register-content">
        <p className="badge">Pertanyaan</p>

        <h2>Minat untuk mendaftar?</h2>

        <p>
          Hubungi kami melalui WhatsApp untuk pertanyaan lanjut atau klik butang di bawah untuk mendaftar minat anda.
        </p>

        <a
          href="https://wa.me/60123456789"
          target="_blank"
          className="primary-btn register-whatsapp-btn"
        >
          Hubungi WhatsApp
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
          <h3>Promosi & Program</h3>
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
        <div className="footer-info-block">
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

        <div className="footer-map-block">
          <h4>Cari Kami</h4>

          <div className="footer-map">
            <iframe
              title="Pusat Tuisyen Permata Hikmah Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.441389112916!2d103.86993067310021!3d1.5053229610602785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6bf0727d7073%3A0xe4702d1829fbfe37!2sPusat%20Tuisyen%20Permata%20Hikmah%20PTPH!5e0!3m2!1sen!2smy!4v1782828384861!5m2!1sen!2smy"
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
      <Benefits />
      <Programmes />
      <Timetable />
      <Register />
      <Footer />
    </>
  );
}

export default App;