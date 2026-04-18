import { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

// Importá las imágenes de tus proyectos desde src/Imgs/
import imgLM from '../../Imgs/lm.png';
import imgMagu from '../../Imgs/mp1.png';
import imgSmeet from '../../Imgs/smeet.png';
import imgFoodland from '../../Imgs/foodland.png';
import imgGea from '../../Imgs/gea.png';
import imgHeat from '../../Imgs/h1.png';

const projects = [
  {
    id: 1,
    name: 'Lideres Universales',
    type: 'Full Stack',
    desc: 'Investment platform within a mandala structure. Built from scratch with full auth and money management flows.',
    tech: ['React', 'Next.js', 'Node', 'MongoDB', 'Express', 'Vercel'],
    img: imgLM,
    url: 'https://lideresuniversales.com',
    featured: true,
  },
  {
    id: 2,
    name: 'MaguPrints',
    type: 'Full Stack',
    desc: 'E-commerce & print business built from scratch.',
    tech: ['React', 'Node', 'MongoDB', 'Express'],
    img: imgMagu,
    url: 'https://fluffy-youtiao-73fc8b.netlify.app/',
    featured: false,
  },
  {
    id: 3,
    name: 'Smeet Makwana Portfolio',
    type: 'Frontend',
    desc: 'Full transformation from fullstack to frontend. New Firebase DB configuration.',
    tech: ['React', 'SASS', 'Firebase', 'Digitalocean'],
    img: imgSmeet,
    url: 'https://www.smeetmakwana.com',
    featured: false,
  },
  {
    id: 4,
    name: 'FOODLAND',
    type: 'Full Stack',
    desc: 'E-commerce with PayPal, admin panel, product reviews and email notifications.',
    tech: ['React', 'Node', 'MongoDB', 'PayPal'],
    img: imgFoodland,
    url: null,
    featured: false,
  },
  {
    id: 5,
    name: 'Gea: Energy Store',
    type: 'Frontend',
    desc: 'Small e-commerce with independently managed Firebase account.',
    tech: ['React', 'MaterialUI', 'Firebase', 'Netlify'],
    img: imgGea,
    url: 'https://chic-toffee-93510a.netlify.app',
    featured: false,
  },
  {
    id: 6,
    name: 'Heat&Cool Budget',
    type: 'Full Stack',
    desc: 'E-commerce and print business platform built from scratch.',
    tech: ['React', 'Node', 'MongoDB', 'Vercel'],
    img: imgHeat,
    url: 'https://heatandcool-c36g.vercel.app/',
    featured: false,
  },
];

const FILTERS = ['All', 'Full Stack', 'Frontend', 'Backend'];

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M1 1h10v10M1 11L11 1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.type === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">
          My<br /><em>Work</em>
        </h2>
        <div className="filter-tabs">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filtered.map((project) => (
          <div
            key={project.id}
            className={`project-card${project.featured ? ' featured' : ''}`}
          >
            <img
              src={project.img}
              alt={project.name}
              className="project-img"
            />
            <div className="project-overlay">
              <div className="project-type">{project.type}</div>
              <div className="project-name">{project.name}</div>
              <div className="project-desc">{project.desc}</div>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
            {project.url && (
              <a
                href={project.url}
                className="project-link-btn"
                target="_blank"
                rel="noreferrer"
              >
                <ArrowIcon />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* WordPress section */}
      <div className="wp-section">
        <div className="section-label" style={{ marginTop: '100px' }}>Also</div>
        <h3 className="wp-title">WordPress Experience</h3>
        <p className="wp-desc">
          Deployed websites built from scratch with custom plugins and integrated
          custom styles for non-editable templates.
        </p>
        <div className="wp-grid">
          <div className="wp-card">
            <div className="wp-placeholder" />
            <div className="wp-card-label">Ropita Estilosa 2.0</div>
          </div>
          <div className="wp-card">
            <div className="wp-placeholder wp-placeholder-2" />
            <div className="wp-card-label">Custom WP Store</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;