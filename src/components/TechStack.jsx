import { skillGroups } from '../data';

function TechStack() {
  return (
    <section className="tech-stack section" id="skills">
      <div className="section-center">
        <div className="section-heading">
          <p className="section-label">Skills</p>
          <h2>Tools I use in production</h2>
          <p className="section-intro">
            Backend and data systems first. Frontend listed as supporting
            capability for full-stack delivery.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
