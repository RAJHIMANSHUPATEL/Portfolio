import { profile } from '../data';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-center">
        <div className="section-heading">
          <p className="section-label">Contact</p>
          <h2>Let&apos;s talk systems and shipping</h2>
          <p className="section-intro">
            Open to roles and collaborations focused on backend engineering,
            real-time systems, and production infrastructure problems.
          </p>
        </div>
        <div className="contact-layout">
          <form
            className="contact-form"
            action="https://formspree.io/f/xanwkkdr"
            method="POST"
          >
            <div className="form-row">
              <label htmlFor="name">
                Name
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                />
              </label>
            </div>
            <label htmlFor="subject">
              Subject
              <input id="subject" type="text" name="subject" required />
            </label>
            <label htmlFor="message">
              Message
              <textarea
                id="message"
                className="text-area"
                name="message"
                required
                rows={6}
              />
            </label>
            <button className="btn btn-primary" type="submit">
              Send message
            </button>
          </form>
          <aside className="contact-aside">
            <p>Prefer a direct channel?</p>
            <ul>
              <li>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
