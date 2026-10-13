import { ArrowUpRight, Bell, Camera, Eye, ScanFace } from "lucide-react";
import { projects } from "../data/portfolioData.js";

function ProjectPreview() {
  return (
    <div className="project-preview" aria-label="Illustration of a facial landmark detection interface">
      <div className="preview-toolbar">
        <span className="preview-brand"><span className="preview-brand-dot" /> DRIVER SAFETY / CONCEPT</span>
        <span className="preview-live"><span /> UI MOCKUP</span>
      </div>
      <div className="preview-content">
        <div className="face-visual" aria-hidden="true">
          <span className="face-outline" />
          <span className="face-eye face-eye-left"><i /></span>
          <span className="face-eye face-eye-right"><i /></span>
          <span className="face-nose" />
          <span className="face-mouth" />
          <span className="face-jaw" />
          <span className="face-point point-a" /><span className="face-point point-b" />
          <span className="face-point point-c" /><span className="face-point point-d" />
        </div>
        <div className="preview-readings">
          <div className="reading-row"><span><Eye size={13} /> EYE CUES</span><strong>ANALYSIS</strong></div>
          <div className="reading-row"><span><ScanFace size={13} /> HEAD POSE</span><strong>ESTIMATE</strong></div>
          <div className="reading-row"><span><Bell size={13} /> ALERTS</span><strong>FEATURE</strong></div>
          <div className="reading-graph"><span>CONCEPTUAL SIGNAL</span><div className="graph-line" /></div>
        </div>
      </div>
      <div className="preview-footer"><span><Camera size={13} /> FACIAL LANDMARKS</span><span>STATIC ILLUSTRATION</span></div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section-shell section-muted" id="projects">
      <div className="container section-content">
        <div className="section-heading reveal">
          <span className="section-kicker">03 / SELECTED WORK</span>
          <h2>Projects &amp; <span>Experiments</span></h2>
          <p className="section-intro">A first step from classroom learning toward building useful things.</p>
        </div>
        <div className="project-card reveal">
          <ProjectPreview />
          {projects.map((project) => (
            <article className="project-details" key={project.title}>
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.yearLabel}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-subheading">WHAT IT EXPLORES</div>
              <ul className="feature-list">
                {project.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <div className="project-subheading technology-heading">TECHNOLOGIES &amp; TOOLS</div>
              <div className="tag-list project-tags">
                {project.technologies.map((technology) => <span className="skill-tag" key={technology}>{technology}</span>)}
              </div>
              <div className="project-bottom">
                <span className="project-environment">Built in <strong>{project.environment}</strong></span>
                <div className="project-links">
                  {project.repository ? (
                    <a className="project-link" href={project.repository} target="_blank" rel="noopener noreferrer">
                      Repository <ArrowUpRight size={14} />
                    </a>
                  ) : <span className="project-unavailable">Repository coming soon</span>}
                  {project.demo && (
                    <a className="project-link" href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live demo <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="project-disclaimer reveal">A learning project — not clinically validated or intended as a production safety system.</p>
      </div>
    </section>
  );
}
