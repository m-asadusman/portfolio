import { useEffect, useState } from "react";
import "./Nav.css";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner wrap">
        <a href="#top" className="nav__mark">
          A.U. <span className="nav__mark-dot">/</span>
        </a>

        <nav className="nav__links nav__links--desktop" aria-label="Primary">
          {LINKS.map((l, i) => (
            <a key={l.href} href={l.href}>
              <span className="nav__index">0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <a className="nav__cta" href="#contact">
            Say hello
          </a>
        </nav>

        <button
          className={`nav__toggle ${open ? "nav__toggle--open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`nav__mobile ${open ? "nav__mobile--open" : ""}`}
        aria-label="Mobile"
      >
        {LINKS.map((l, i) => (
          <a key={l.href} href={l.href} onClick={handleLink}>
            <span className="nav__index">0{i + 1}</span>
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={handleLink} className="nav__mobile-cta">
          Say hello
        </a>
      </nav>
    </header>
  );
}
