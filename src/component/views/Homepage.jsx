import "./Homepage.css";

import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";

function Homepage() {
  return (
    <div className="homepage-page">

      {/* Contenedor de dos columnas para llenar el espacio */}
      <div className="hero-grid">

        {/* Columna Izquierda: Presentación */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot"></span> Web Developer & Software Enthusiast
          </div>

          <h1>
            I build clear, functional, and <span className="highlight">scalable</span> web solutions.
          </h1>

          <p>
            Hi, I'm Ronald Palacios, a web developer committed to continuous learning. I work with JavaScript, Node.js, and databases, and I am currently expanding my skills in React to build modern, useful, and user-focused web experiences.
          </p>
        </div>

        {/* Columna Derecha: El Mockup de Código tipo VS Code */}
        <div className="hero-visual">
          <div className="code-editor">
            <div className="editor-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="editor-title">portfolio.js</span>
            </div>
            <div className="editor-body">
              <p><span className="keyword">const</span> <span className="variable">developer</span> = &#123;</p>
              <p className="indent"><span className="property">name</span>: <span className="string">"Ronald Palacios"</span>,</p>
              <p className="indent"><span className="property">stack</span>: [<span className="string">"React"</span>, <span className="string">"Node.js"</span>, <span className="string">"TS"</span>],</p>
              <p className="indent"><span className="property">status</span>: <span className="string">"Ready to code!"</span></p>
              <p>&#125;;<span className="cursor">|</span></p>
            </div>
          </div>
        </div>

      </div> {/* Fin de .hero-grid */}

      <section id="projects" className="latest-work">
        <h2>Latest Projects</h2>
        <p>A selection of projects where I apply my skills in web development, problem-solving, and continuous learning.</p>
        <div className="project-grid">
          {projects.slice(0, 3).map((proj) => (
            <ProjectCard key={proj.title} {...proj} />
          ))}
        </div>

      </section >

    </div >
  )
}

export default Homepage