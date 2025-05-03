// import project1 from '../assets/project1.jpg';
// import project2 from '../assets/project2.jpg';

const projects = [
  { title: "Project 1", img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fpulse%2Fproject-definition-amirhossein-karimzadeh&psig=AOvVaw2kc9xcAIMRsJBH-y3YLvby&ust=1740091953662000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiR8enp0IsDFQAAAAAdAAAAABAE", live: "#", github: "#" },
//   { title: "Project 2", img: project2, live: "#", github: "#" },
];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.live} target="_blank" rel="noopener noreferrer">Live App</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;