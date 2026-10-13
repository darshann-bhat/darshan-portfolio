import { ArrowUpRight, BookOpen, Lightbulb, ScanFace } from "lucide-react";
import { personalInfo } from "../data/portfolioData.js";

const notes = [
  { icon: BookOpen, label: "Learning by doing", text: "Building foundations one project at a time." },
  { icon: ScanFace, label: "First project", text: "Driver Drowsiness Detection System." },
  { icon: Lightbulb, label: "Looking ahead", text: "Exploring how technology can solve real problems." },
];

export default function About() {
  return (
    <section className="section-shell section-muted" id="about">
      <div className="container section-content">
        <div className="section-heading reveal">
          <span className="section-kicker">01 / A LITTLE ABOUT ME</span>
          <h2>Beyond the <span>Code</span></h2>
        </div>
        <div className="about-layout">
          <div className="about-copy reveal">
            <p className="about-lead">
              I am a second-year B.E. Computer Science and Engineering student
              at {personalInfo.college}, Bengaluru, with a CGPA of{" "}
              {personalInfo.cgpa}. I enjoy solving problems, learning new
              technologies, and developing software solutions to practical
              challenges. My interests include software engineering,
              artificial intelligence, machine learning, and full-stack web
              development. I am continuously improving my technical skills
              through coursework, hands-on projects, and independent learning.
            </p>
            <a className="text-link" href="#education">
              A little more about my studies <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="about-notes reveal">
            {notes.map(({ icon: Icon, label, text }, index) => (
              <article className="about-note" key={label}>
                <span className="note-index">0{index + 1}</span>
                <span className="note-icon"><Icon size={18} strokeWidth={1.6} /></span>
                <div><h3>{label}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
