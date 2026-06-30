const programmes = [
  {
    title: "Early Education",
    description:
      "Learning support for pre-primary students to build strong basic reading, writing, counting, and learning habits.",
    subjects: ["Tadika", "Belajar", "Mengaji dan Belajar"],
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
  "Early education from pre-primary until Standard 4",
  "Experienced teachers from government schools",
  "Academic, Islamic, and reading support in one centre",
  "Easy enquiry through WhatsApp or registration form",
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
      <h2>Pusat Tuisyen Permata Hikmah</h2>

      <div className="nav-links">
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
        <p className="badge">Pusat Tuisyen Permata Hikmah</p>

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

      <div className="hero-card">
        <h3>PTPH Purpose</h3>
        <p>
          To help children build a strong learning foundation through structured
          academic classes, basic Islamic education, reading support, and
          teacher-guided learning.
        </p>

        <div className="mini-list">
          <span>Pre-primary</span>
          <span>Standard 1 - 4</span>
          <span>Academic Subjects</span>
          <span>Fardu Ain & Mengaji</span>
        </div>
      </div>
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
    <section className="section">
      <SectionTitle
        label="Why Website?"
        title="Benefits for PTPH"
        description="The website acts as a central information platform for parents and staff."
      />

      <div className="benefit-grid">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={benefit}>
            <div className="benefit-number">{index + 1}</div>
            <p>{benefit}</p>
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

function FuturePlan() {
  return (
    <section className="section light-section">
      <SectionTitle
        label="Future Upgrade"
        title="Can Grow Into a Full System Later"
        description="The first version is simple, but the structure can be expanded in the future."
      />

      <div className="timeline">
        <div>
          <h3>Phase 1</h3>
          <p>Information website with programmes, timetable, and contact.</p>
        </div>
        <div>
          <h3>Phase 2</h3>
          <p>Online registration form and enquiry management.</p>
        </div>
        <div>
          <h3>Phase 3</h3>
          <p>Admin dashboard, attendance tracking, and student records.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <h3>Pusat Tuisyen Permata Hikmah</h3>
      <p>Simple website prototype for presentation and future improvement.</p>
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
      <FuturePlan />
      <Footer />
    </>
  );
}

export default App;