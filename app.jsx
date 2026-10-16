
import { useState } from "react";
import "./style.css";

const skills = [
  ["🌐", "HTML", "Web structure"],
  ["🎨", "CSS", "Responsive design"],
  ["⚡", "JavaScript", "Web interactivity"],
  ["⚛️", "React", "UI development"],
  ["☕", "Java", "Programming and DSA"],
  ["🗄️", "SQL", "Database queries"],
];

const projects = [
  {
    icon: "🛍️",
    title: "E-Commerce UI",
    description: "A shopping interface with product cards, search, and responsive layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: "🎓",
    title: "Student Dashboard",
    description: "A dashboard for displaying student profiles, courses, and academic information.",
    tech: ["React", "CSS", "JavaScript"],
  },
  {
    icon: "🧮",
    title: "Calculator",
    description: "An interactive calculator for basic mathematical operations.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

function App() {
  const [light, setLight] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className={light ? "app light-theme" : "app"}>
      <header>
        <nav className="navbar">
          <a href="#home" className="logo">SK<span>.</span></a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="theme-btn" onClick={() => setLight(!light)}>
            {light ? "☾" : "☀"}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="tag">WELCOME TO MY PORTFOLIO</p>
            <h1>Hi, I'm <span>Suryansh Kumar</span></h1>
            <h2>Aspiring Web Developer</h2>
            <p className="hero-description">
              I'm a B.Tech student passionate about web development,
              Java programming, and building useful digital experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">View Projects</a>
              <a href="#contact" className="btn secondary">Contact Me</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="window-dots"><i></i><i></i><i></i></div>
            <div className="code-content">
              <p><span className="pink">const</span> developer = {"{"}</p>
              <p className="indent">name: <span className="green">"Suryansh"</span>,</p>
              <p className="indent">role: <span className="green">"Web Developer"</span>,</p>
              <p className="indent">language: <span className="green">"JavaScript"</span>,</p>
              <p className="indent">learning: <span className="green">"React"</span></p>
              <p>{"};"}</p>
              <p className="code-last">developer.buildFuture();</p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <p className="tag">GET TO KNOW ME</p>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="about-card">
            <p>
              Hello! I'm Suryansh Kumar, a third-year B.Tech student at
              Galgotias University. I enjoy solving coding problems and
              creating responsive websites. I'm improving my skills in
              HTML, CSS, JavaScript and React while strengthening my Java
              and SQL knowledge. My goal is to become a skilled full-stack
              developer and build projects that solve real problems.
            </p>
            <div className="stats">
              <div><strong>200+</strong><span>LeetCode Problems</span></div>
              <div><strong>B.Tech</strong><span>Computer Science</span></div>
              <div><strong>Web</strong><span>Development</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="tag">WHAT I WORK WITH</p>
          <h2 className="section-title">My <span>Skills</span></h2>
          <div className="skills-grid">
            {skills.map(([icon, title, description]) => (
              <div className="skill-card" key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="tag">SOME THINGS I'VE BUILT</p>
          <h2 className="section-title">My <span>Projects</span></h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  GitHub Repository ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <p className="tag">LET'S CONNECT</p>
          <h2 className="section-title">Contact <span>Me</span></h2>
          <div className="contact-card">
            <p>Have an opportunity or project idea? Feel free to get in touch.</p>
            <form id="contactForm" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <textarea
                placeholder="Your message"
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <button type="submit" className="btn primary">Send Email</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Suryansh Kumar. Built with React & CSS.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
