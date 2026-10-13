import { ArrowUpRight, Github } from "lucide-react";
import { personalInfo } from "../data/portfolioData.js";

const footerLinks = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-identity">
          <a className="footer-name" href="#home">{personalInfo.displayName}<span>.</span></a>
          <p>Computer Science &amp; Engineering Student</p>
          <p>{personalInfo.shortLocation}</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </nav>
        <a className="footer-github" href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="Visit Darshan Bhat on GitHub">
          <Github size={17} /> GitHub <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Darshan Bhat</span>
        <a href="#home">Back to top ↑</a>
        <span>Designed with intention.</span>
      </div>
    </footer>
  );
}
