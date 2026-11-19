export default function Nav({ scrolled }) {
  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a className="nav__brand" href="#top">
        Olamide Olarewaju
      </a>
      <nav className="nav__links" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#approach">Approach</a>
        <a href="#contact" className="nav__cta">
          Contact
        </a>
      </nav>
    </header>
  )
}
