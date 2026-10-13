import { ArrowUpRight, Code2, Wrench } from "lucide-react";
import { exploringSkills, skillGroups } from "../data/portfolioData.js";

const icons = [Code2, Wrench];

export default function Skills() {
  return (
    <section className="section-shell" id="skills">
      <div className="container section-content">
        <div className="section-heading reveal">
          <span className="section-kicker">02 / TOOLKIT</span>
          <h2>What I work <span>with</span></h2>
          <p className="section-intro">A snapshot of the tools and languages I currently use, alongside the areas I’m exploring.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <article className="skill-group reveal" key={group.title}>
                <div className="skill-group-heading">
                  <span className="skill-icon"><Icon size={19} strokeWidth={1.7} /></span>
                  <div>
                    <span className="mini-kicker">0{index + 1}</span>
                    <h3>{group.title}</h3>
                  </div>
                </div>
                <div className="tag-list">
                  {group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}
                </div>
              </article>
            );
          })}
        </div>
        <div className="exploring-block reveal">
          <div className="exploring-heading">
            <div>
              <span className="mini-kicker">IN PROGRESS</span>
              <h3>Currently Exploring</h3>
            </div>
            <ArrowUpRight className="exploring-arrow" size={20} />
          </div>
          <p className="exploring-note">Areas I’m learning about and building familiarity with — not a list of mastered skills.</p>
          <div className="tag-list exploring-tags">
            {exploringSkills.map((item) => <span className="explore-tag" key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
