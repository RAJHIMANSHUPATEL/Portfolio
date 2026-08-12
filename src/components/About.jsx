import { profile } from '../data';

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-center">
        <div className="section-heading">
          <p className="section-label">About</p>
          <h2>Backend systems, real impact</h2>
        </div>
        <div className="about-info">
          {profile.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="about-direction">
            Direction: Software Engineer → Backend Engineer → Backend
            Infrastructure / Systems → Distributed Systems & Backend Architecture
            — built from production work in caching, concurrency, real-time
            pipelines, and high-throughput integrations, not from buzzwords.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
