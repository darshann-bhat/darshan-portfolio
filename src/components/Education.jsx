import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolioData.js";

export default function Education() {
  return (
    <section className="section-shell" id="education">
      <div className="container section-content">
        <div className="section-heading reveal">
          <span className="section-kicker">04 / ACADEMIC BACKGROUND</span>
          <h2>Built on a strong <span>foundation</span></h2>
        </div>
        <article className="education-card reveal">
          <div className="education-icon"><GraduationCap size={24} strokeWidth={1.5} /></div>
          <div className="education-main">
            <span className="mini-kicker">CURRENTLY STUDYING</span>
            <h3>{personalInfo.college}</h3>
            <p className="education-degree">{personalInfo.degree}</p>
            <p className="education-branch">{personalInfo.branch}</p>
            <div className="education-place"><MapPin size={15} /> {personalInfo.location}</div>
          </div>
          <div className="education-aside">
            <span className="education-year">{personalInfo.year}</span>
            <div className="education-score"><strong>{personalInfo.cgpa}</strong><span>CGPA / 10</span></div>
          </div>
          <a className="education-link" href="#contact" aria-label="Contact Darshan Bhat about education">
            <ArrowUpRight size={18} />
          </a>
        </article>
      </div>
    </section>
  );
}
