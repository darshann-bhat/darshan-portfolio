import { ArrowUpRight, BrainCircuit, Braces, Database, Layers3 } from "lucide-react";
import { learningGroups } from "../data/portfolioData.js";

const icons = [Braces, Layers3, BrainCircuit, Database];

export default function Learning() {
  return (
    <section className="section-shell section-muted" id="learning">
      <div className="container section-content">
        <div className="learning-intro reveal">
          <div className="section-heading">
            <span className="section-kicker">05 / ALWAYS IN PROGRESS</span>
            <h2>Currently Learning <span>&amp; Exploring</span></h2>
          </div>
          <p>
            I’m focused on strengthening my foundations while branching into
            new areas of software engineering. The goal is steady progress,
            curiosity, and putting what I learn into practice.
          </p>
        </div>
        <div className="learning-grid">
          {learningGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <article className="learning-card reveal" key={group.title}>
                <div className="learning-card-top">
                  <span className="learning-icon"><Icon size={19} strokeWidth={1.6} /></span>
                  <span className="mini-kicker">0{index + 1}</span>
                </div>
                <h3>{group.title}</h3>
                <div className="learning-topics">
                  {group.topics.map((topic) => <span key={topic}>{topic}</span>)}
                </div>
                <ArrowUpRight className="learning-card-arrow" size={17} aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
