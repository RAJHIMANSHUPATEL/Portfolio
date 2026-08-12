import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <header>
      <div className="navbar">
        <a className="logo" href="#hero" aria-label="Home" onClick={closeNav}>
          <div className="square1" aria-hidden="true"></div>
          <div className="square2" aria-hidden="true"></div>
        </a>
        {!navOpen ? (
          <button
            type="button"
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={false}
            onClick={() => setNavOpen(true)}
          >
            <RxHamburgerMenu className="menu-icon" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="button"
            className="menu-toggle"
            aria-label="Close menu"
            aria-expanded={true}
            onClick={() => setNavOpen(false)}
          >
            <IoMdClose className="close-icon" aria-hidden="true" />
          </button>
        )}
        <nav className="nav-info" aria-label="Primary">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <nav
        className={`accordion ${navOpen ? 'is-open' : ''}`}
        aria-label="Mobile"
        aria-hidden={!navOpen}
      >
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeNav}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
