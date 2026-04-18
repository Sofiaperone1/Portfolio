import { useRef, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // conectá tu lógica de envío acá (EmailJS, Formspree, etc.)
    alert('Message sent!');
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-left">
        <div className="section-label">Contact</div>
        <h2 className="contact-big">
          Let's<br /><em>Talk</em>
        </h2>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-item-label">Email</div>
            <div className="contact-item-value">
              <a href="mailto:sofiaperone62@gmail.com">sofiaperone62@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-label">Location</div>
            <div className="contact-item-value">
              Buenos Aires, Argentina<br />
              <span className="contact-sub">Available worldwide</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-label">Socials</div>
            <div className="contact-item-value contact-socials">
              <a href="https://github.com/sofiaperone1" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/sofia-perone" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input type="text" className="form-input" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" className="form-input" placeholder="your@email.com" required />
        </div>
        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea className="form-input form-textarea" placeholder="Tell me about your project..." required />
        </div>
        <button type="submit" className="form-submit">Send message →</button>
      </form>
    </section>
  );
}

export default Contact;