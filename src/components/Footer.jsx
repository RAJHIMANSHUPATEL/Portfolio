import { profile } from '../data';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { social } = profile;

  return (
    <footer className="footer">
      <div className="section section-center footer-section">
        <div className="footer-title">
          <h2>Building reliable backend systems</h2>
          <a className="btn btn-secondary" href="#contact">
            Get in touch
          </a>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href={social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={social.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        © {currentYear} · <span>{profile.name}</span>
      </div>
    </footer>
  );
}

export default Footer;
