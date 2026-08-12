import { selectedWork } from '../data';

const Projects = () => {
  return (
    <section className="projects section" id="work">
      <div className="section-center">
        <div className="section-heading">
          <p className="section-label">Selected work</p>
          <h2>Systems with measurable outcomes</h2>
          <p className="section-intro">
            Case studies from production engineering — problems, stack, and
            impact. No generic “built scalable apps.”
          </p>
        </div>
        <div className="work-list">
          {selectedWork.map((item) => (
            <article className="work-card" key={item.title}>
              <div className="work-card-top">
                <h3>{item.title}</h3>
                <p className="work-context">{item.context}</p>
              </div>
              <p className="work-problem">
                <span className="work-kicker">Problem</span>
                {item.problem}
              </p>
              <p className="work-impact">
                <span className="work-kicker">Impact</span>
                {item.impact}
              </p>
              <ul className="work-stack" aria-label="Technologies">
                {item.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
