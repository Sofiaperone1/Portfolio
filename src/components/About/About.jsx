import './About.css';
import { useEffect, useRef } from 'react';
import photo from '../../cv1.png'; // ← cambiá a violet2.jpg si preferís esa foto

function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-photo-wrap">
        <img src={photo} alt="Sofia Perone" className="about-photo" />
        <div className="about-photo-accent" />
        <div className="about-photo-accent-2" />
      </div>

      <div className="about-content">
        <div className="section-label">About me</div>
        <h2 className="about-name">Sofia Perone</h2>
        <div className="about-role">Fullstack Developer</div>
        <p className="about-text">
          I'm a developer who genuinely loves what I do. With a freelance background,
          most of my experience comes from building complete products from the ground up.
        </p>
        <p className="about-text">
          Self-taught, results-oriented and an effective communicator — I seek to
          dedicate myself fully to the IT world with total commitment and motivation.
        </p>
        <p className="about-text">📍 Buenos Aires, Argentina — serving clients worldwide.</p>
        <div className="about-tags">
          {['Self-taught', 'Team player', 'Freelance', 'Empathetic', 'Results-oriented'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;