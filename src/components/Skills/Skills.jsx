import './Skills.css';

const skills = [
  'React', 'Node.js', 'MongoDB', 'TypeScript', 'Express',
  'CSS3', 'JavaScript', 'Redux', 'Git', 'Netlify',
  'PostgreSQL', 'Firebase', 'Vercel', 'WordPress',
];

function Skills() {
  // duplicate for seamless loop
  const allSkills = [...skills, ...skills];

  return (
    <div className="skills-marquee">
      <div className="marquee-track">
        {allSkills.map((skill, i) => (
          <span key={i} className="marquee-item">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default Skills;