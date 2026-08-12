import { profile } from '../data';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-center">
        <div className="hero-title">
          <p className="hero-eyebrow">
            {profile.role} · {profile.location}
          </p>
          <h1>{profile.name}</h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              View selected work
            </a>
            <a
              className="btn btn-secondary"
              href={profile.cvPath}
              download={profile.cvFilename}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
