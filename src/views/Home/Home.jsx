import './Home.css';

function Home() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-line" />
      <div className="hero-bg-line-2" />

      <div className="hero-label fade-up">Full Stack Developer — Buenos Aires</div>

      <h1 className="hero-title fade-up delay-1">
        Building things<br />
        <span>that work.</span>
      </h1>

      <div className="hero-bottom fade-up delay-2">
        <p className="hero-desc">
          Freelance developer based in Buenos Aires. I build full stack products
          from scratch — with focus on clean code, real results, and experiences
          people actually want to use.
        </p>
        <a href="#portfolio" className="hero-cta">
          View my work
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1h12v12M1 13L13 1" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </a>
      </div>

      <div className="hero-scroll">Scroll</div>
    </section>
  );
}

export default Home;