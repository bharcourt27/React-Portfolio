import resume from '../assets/resume.pdf';

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href={resume} download="resume.pdf">Download Resume</a>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
      </ul>
    <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MangoDB, Mongoose</li>
        <li>Rest</li>
        <li>GraphQL</li>
      </ul>
    </section>
  );
}

export default Resume;