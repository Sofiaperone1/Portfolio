import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">Sofia Perone</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-socials">
        <a href="https://github.com/sofiaperone1" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/sofia-perone" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </nav>
  );
}

export default Navbar;