import './App.css'

const currentYear = new Date().getFullYear()

const skills = [
  'React',
  'JavaScript',
  'HTML & CSS',
  'Tailwind CSS',
  'REST APIs',
  'Firebase',
  'Clerk',
  'Convex',
  'Node.js',
  'Three.js',
  'Git & GitHub',
]

const projects = [
  {
    number: '01',
    name: 'ReelChat',
    type: 'Video chat application',
    description:
      'Built responsive interface components and interactive features, with a focus on accessibility and a consistent user experience.',
    tags: ['React', 'UI development', 'Responsive design'],
  },
  {
    number: '02',
    name: 'State of Origin Digitization',
    type: 'SecSystems',
    link: 'https://oolgdp.ng/',
    image: '/state-of-origin-preview.png',
    description:
      'Helped streamline State of Origin processing by translating UI/UX specifications into a working solution and integrating backend APIs.',
    tags: ['API integration', 'Workflow', 'Frontend'],
  },
  {
    number: '03',
    name: 'POS Transaction File Server',
    type: 'SecSystems',
    description:
      'Created a file management interface for viewing, downloading, and deleting POS transaction files.',
    tags: ['File management', 'User experience', 'Frontend'],
  },
]

const experience = [
  {
    dates: '2024 — 2025',
    role: 'Software Developer',
    company: 'Flexisaf',
    location: 'Nigeria',
    description:
      'Developed responsive features for accessing previous cohort information, translated design requirements into functional interfaces, and improved usability through testing and iteration.',
  },
  {
    dates: 'Project experience',
    role: 'Front-End Developer',
    company: 'SecSystems',
    description:
      'Built interfaces for Ogun State of Origin certificate processing and a POS transaction file server, including API integrations and secure file management workflows.',
  },
  {
    dates: 'Completed',
    role: 'Software Development Mentee',
    company: 'LadderTech Mentorship Program',
    description:
      'Completed a structured mentorship focused on system design and software architecture, and received a Certificate of Participation.',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  )
}

function Home() {
  return (
    <div className="portfolio">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Gideon Ogunronbi home">
          <span className="wordmark-mark">G.</span>
          <span>Gideon Ogunronbi</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Selected work</a>
        </nav>
        <a className="header-contact" href="mailto:gideonogunronbi693@gmail.com">
          Let&apos;s talk <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> FRONT-END DEVELOPER · LAGOS, NIGERIA</p>
            <h1>
              I build thoughtful
              <br />
              digital <span>experiences.</span>
            </h1>
            <p className="hero-intro">
              I&apos;m Gideon, a front-end developer with 4 years of experience
              turning ideas into responsive, user-friendly web applications.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <ArrowIcon />
              </a>
            </div>
            <div className="hero-links">
              <a href="mailto:gideonogunronbi693@gmail.com">Email</a>
              <span aria-hidden="true">/</span>
              <a
                href="https://www.linkedin.com/in/gideon-ogunronbi-b88485329"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <span className="hero-remote">Available for remote collaboration</span>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-card">
              <span className="art-card-label">A little about me</span>
              <span className="art-monogram">GO<span>.</span></span>
              <span className="art-card-name">Gideon Ogunronbi</span>
              <span className="art-card-role">Software developer</span>
              <div className="art-divider" />
              <div className="art-card-bottom">
                <span>Building for the web</span>
                <span className="art-sparkle" aria-hidden="true">✳</span>
              </div>
            </div>
            <span className="art-sticker sticker-top">Curious by nature</span>
            <span className="art-sticker sticker-bottom">Design-minded · Detail-driven</span>
          </div>
          <a className="scroll-cue" href="#about">
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="intro-section section-wrap" id="about">
          <div className="section-label">
            <span>01</span>
            <span>ABOUT</span>
          </div>
          <div className="intro-content">
            <h2>
              Good interfaces make
              <br />
              the complex feel <em>simple.</em>
            </h2>
            <div className="intro-bottom">
              <p>
                I create responsive, accessible interfaces with React,
                JavaScript, and modern web technologies. From reusable
                components to API integrations, I enjoy bringing product ideas
                to life and making every interaction feel considered.
              </p>
              <div className="education-card">
                <span className="education-year">2020 — Present</span>
                <span className="education-degree">B.Sc. Metallurgical and Materials Engineering</span>
                <span className="education-school">University of Lagos</span>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-label">
            <span>02</span>
            <span>EXPERIENCE</span>
          </div>
          <div className="experience-content">
            <div className="section-heading-row">
              <h2>A few places I&apos;ve <em>grown.</em></h2>
              <p>Learning, building, and improving with every project.</p>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={item.company}>
                  <span className="experience-dates">{item.dates}</span>
                  <div className="experience-detail">
                    <h3>{item.role}</h3>
                    <p className="experience-company">
                      {item.company && <strong>{item.company}</strong>}
                      {item.company && item.location && <span>·</span>}
                      {item.location}
                    </p>
                    <p className="experience-description">{item.description}</p>
                  </div>
                  <span className="experience-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-label">
            <span>03</span>
            <span>SELECTED WORK</span>
          </div>
          <div className="work-content">
            <div className="section-heading-row">
              <h2>Made with purpose<span className="heading-period">.</span></h2>
              <p>A few projects I&apos;ve contributed to along the way.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className={`project-visual project-visual-${project.number}${project.image ? ' project-visual-has-image' : ''}`}>
                    <span className="project-number">{project.number}</span>
                    {project.image ? (
                      <img className="project-preview-image" src={project.image} alt={`${project.name} website screenshot`} />
                    ) : (
                      <>
                        <span className="project-visual-title">{project.name}</span>
                        <span className="project-visual-type">{project.type}</span>
                        <span className="project-visual-mark" aria-hidden="true">
                          {project.number === '01' ? '◉' : '▤'}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="project-copy">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul className="tag-list" aria-label={`${project.name} technologies`}>
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    {project.link && (
                      <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                        Visit live site <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap">
          <div className="section-label">
            <span>04</span>
            <span>MY TOOLKIT</span>
          </div>
          <div className="skills-content">
            <h2>Tools I reach for.</h2>
            <p>Technology is always changing. Here are some of the tools I use to make things work.</p>
            <ul className="skills-list">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow"><span className="eyebrow-dot" /> HAVE A PROJECT IN MIND?</p>
          <h2>Let&apos;s make something<br /><em>meaningful.</em></h2>
          <a className="button button-light" href="mailto:gideonogunronbi693@gmail.com">
            Get in touch <ArrowIcon />
          </a>
          <span className="contact-location">Lagos, Nigeria · Open to remote opportunities</span>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <span>© {currentYear} Gideon Ogunronbi</span>
        <a href="tel:+2349064836951">+234 9064836951</a>
        <a href="https://www.linkedin.com/in/gideon-ogunronbi-b88485329" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default Home
