import { ArrowDown, ArrowUpRight, Github, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolioData.js";

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            COMPUTER SCIENCE &amp; ENGINEERING
          </div>
          <h1>
            Hi, I’m
            <br />
            <span>Darshan Bhat.</span>
          </h1>
          <p className="hero-tagline">Engineering ideas into meaningful software.</p>
          <p className="hero-description">
            I’m a Computer Science and Engineering student at BMSIT&amp;M,
            Bengaluru, interested in programming, software development, and
            solving real-world problems through technology.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my projects <ArrowUpRight size={17} />
            </a>
            <a className="button button-secondary" href="#contact">
              Get in touch <ArrowDown size={16} />
            </a>
          </div>
          <div className="hero-meta">
            <a
              className="social-link"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Darshan Bhat on GitHub (opens in a new tab)"
            >
              <Github size={17} /> GitHub <ArrowUpRight size={13} />
            </a>
            <span className="meta-divider" aria-hidden="true" />
            <span className="location-label">
              <MapPin size={16} /> {personalInfo.location}
            </span>
          </div>
        </div>

        <div className="hero-art" aria-label="Academic highlight: 9.88 CGPA">
          <div className="art-topline">
            <span>LEARNING / BUILDING</span>
            <span className="art-index">01 — 04</span>
          </div>
          <div className="art-grid" aria-hidden="true">
            <span className="art-cross cross-one">+</span>
            <span className="art-cross cross-two">+</span>
            <span className="art-orbit orbit-one" />
            <span className="art-orbit orbit-two" />
            <span className="art-center">DB</span>
            <span className="art-coordinate">13°08′N<br />77°34′E</span>
          </div>
          <div className="cgpa-card">
            <span className="cgpa-label">CURRENT CGPA</span>
            <strong>{personalInfo.cgpa}<span>/10</span></strong>
            <span className="cgpa-note">A strong foundation, still in progress.</span>
          </div>
          <span className="art-caption">Curiosity in motion <span>↗</span></span>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to the About section">
        <span>SCROLL TO EXPLORE</span><span className="scroll-line" />
      </a>
    </section>
  );
}
