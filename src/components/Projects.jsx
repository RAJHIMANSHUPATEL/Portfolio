import { projects } from '../data';

const ShowcaseLinks = ({ item }) => {
  if (!item.github && !item.portal) return null;

  return (
    <div className="showcase-links">
      {item.github && (
        <a
          className="btn btn-primary"
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      )}
      {item.portal && (
        <a
          className="btn btn-secondary"
          href={item.portal}
          target="_blank"
          rel="noopener noreferrer"
        >
          Portal
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
};

const ShowcaseMedia = ({ item }) => {
  const image = (
    <img
      src={item.image}
      alt=""
      width="640"
      height="400"
      loading="lazy"
      decoding="async"
    />
  );

  if (!item.portal) {
    return <div className="showcase-media">{image}</div>;
  }

  return (
    <a
      className="showcase-media"
      href={item.portal}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${item.title} portal (opens in a new tab)`}
    >
      {image}
    </a>
  );
};

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="section-center">
        <div className="section-heading">
          <p className="section-label">Projects</p>
          <h2>Shipped products</h2>
        </div>
        {projects.map((project) => (
          <article className="project-group" key={project.title}>
            <header className="project-intro">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="project-stack" aria-label="Technologies">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </header>
            <ul className="showcase-list">
              {project.showcases.map((item) => (
                <li key={item.title}>
                  <article className="showcase-card">
                    <ShowcaseMedia item={item} />
                    <div className="showcase-body">
                      <h4>{item.title}</h4>
                      <p>{item.summary}</p>
                      <ShowcaseLinks item={item} />
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
