const ThemeToggle = ({ theme, setTheme }) => (
  <div className="theme-toggle">
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <span className="slider"></span>
    </label>
  </div>
);

const Header = ({ theme, setTheme }) => (
  <header>
    <div className="header-left">
      <strong>Rahul Chawla</strong>
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </div>
    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#hackathons">Hackathons</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

const SectionCard = ({ id, title, children }) => (
  <section id={id}>
    <div className="section-card animate">
      <h2>{title}</h2>
      {children}
    </div>
  </section>
);

const Hero = () => (
  <section className="hero animate">
    <div className="hero-modern">
      <h1>Hi, I'm Rahul — I analyze data & build with code.</h1>
      <p>Data Analyst | ML | BI | Web Dev</p>
    </div>
  </section>
);


const About = () => (
  <SectionCard id="about" title="About Me">
    <p>
      I’m a data-driven professional with a passion for insights, dashboards, and building elegant digital
      solutions. I combine analytical thinking with modern tools to turn raw data into business value.
    </p>
    <a href="Rahul Chawla Data Analyst Resume.pdf" download>
      <button>📄 Download Resume</button>
    </a>
  </SectionCard>
);

const Skills = () => (
  <SectionCard id="skills" title="Skills & Tools">
    <div className="tile-grid">
      <div className="tile"><h4>📊 Data & Visualization</h4><p>Power BI, Excel, Cleaning, Transformation</p></div>
      <div className="tile"><h4>💻 Programming & DB</h4><p>Python, SQL</p></div>
      <div className="tile"><h4>🤖 Machine Learning</h4><p>Generative AI, Predictive Modeling, SciKit</p></div>
      <div className="tile"><h4>🛠️ Tools</h4><p>Jupyter, PowerPoint</p></div>
      <div className="tile"><h4>🌐 Web Development</h4><p>HTML, CSS, ReactJS, Git, GitHub</p></div>
    </div>
  </SectionCard>
);

const Projects = () => {
  const data = [
    { title: "Gen-AI Indian Budget Assistant", type: "AI / NLP", link: "https://github.com/rahul/genai-budget" },
    { title: "Credit Card Fraud Detection", type: "Machine Learning", link: "https://github.com/rahul/fraud-detection" },
    { title: "Facebook Ad Dashboard", type: "Power BI", link: "https://github.com/rahul/fb-ads-bi" },
    { title: "Sales Data Analysis", type: "Excel", link: "https://github.com/rahul/sales-excel" },
    { title: "Portfolio Website", type: "Web Dev", link: "https://github.com/rahul/portfolio" }
  ];

  return (
    <SectionCard id="projects" title="Featured Projects">
      <div className="tile-grid">
        {data.map((p, i) => (
          <div key={i} className="tile">
            <h3>{p.title}</h3>
            <p>{p.type}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

const Hackathons = () => (
  <SectionCard id="hackathons" title="Hackathon Projects">
    <div className="tile-grid">
      <div className="tile">
        <h3>Hack-the-Data 2024</h3>
        <p>Built a predictive analytics dashboard to forecast sales for a retail chain using Python, SQL & Power BI.</p>
        <a href="https://github.com/rahul/hackathon-data-2024" target="_blank">View Project</a>
      </div>
    </div>
  </SectionCard>
);

const Experience = () => (
  <SectionCard id="experience" title="Experience & Impact">
    <ul className="experience-list">
      <li className="exp-bullet">Developed Gen-AI tool to interpret Indian budget docs using LLMs.</li>
      <li className="exp-bullet">Built BI dashboards for Facebook Ads using Power BI.</li>
      <li className="exp-bullet">Conducted sales forecasting and KPI analysis in Excel.</li>
      <li className="exp-bullet">Implemented ML models for fraud detection and weather prediction.</li>
      <li className="exp-bullet">Deployed personal projects and dashboards via GitHub & React.</li>
    </ul>
  </SectionCard>
);

const Contact = () => (
  <SectionCard id="contact" title="Let's Connect">
    <p>Open to opportunities, collaborations, or just a good data talk!</p>
    <a
      href="https://www.linkedin.com/in/yourlinkedinusername"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>Send Message!</button>
    </a>
  </SectionCard>
);


const Footer = () => (
  <footer>
    <p>© {new Date().getFullYear()} Rahul Chawla. Crafted with code, coffee & creativity.</p>
    <div className="social-icons">
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank" aria-label="LinkedIn">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
      </a>
      <a href="https://github.com/yourgithub" target="_blank" aria-label="GitHub">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"alt="GitHub"/>

      </a>
      <a href="mailto:youremail@example.com" aria-label="Gmail">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" />
      </a>
    </div>
  </footer>
);


const App = () => {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  React.useEffect(() => {
    const sections = document.querySelectorAll("section");

    const animateOnScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.1,
    });

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
