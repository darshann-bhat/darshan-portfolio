import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolioData.js";

export default function Contact() {
  return (
    <section className="section-shell contact-section" id="contact">
      <div className="container section-content">
        <div className="contact-panel reveal">
          <div className="contact-copy">
            <span className="section-kicker">06 / OPEN TO CONNECTION</span>
            <h2>Let’s <span>Connect</span></h2>
            <p>
              I’m always interested in learning, building projects, and
              connecting with people who share an interest in technology.
            </p>
            <div className="contact-location"><MapPin size={16} /> {personalInfo.location}</div>
          </div>
          <div className="contact-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile, opens in a new tab">
              <Github size={18} /><span className="contact-link-label">GitHub Profile</span><ArrowUpRight size={15} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile, opens in a new tab">
              <Linkedin size={18} /><span className="contact-link-label">LinkedIn Profile</span><ArrowUpRight size={15} />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label={`Email ${personalInfo.displayName}`}>
              <Mail size={18} /><span className="contact-link-label">{personalInfo.email}</span><ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
