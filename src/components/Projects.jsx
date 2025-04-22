import INFO from "../data/user";
import CardProject from "./common/CardProject";
import './styles/Projects.css';

const Projects = () => {
  return (
    <div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
          <CardProject
          logo={project.logo}
          title={project.title}
          description={project.description}
          linkText={project.linkText}
          github={project.github}
          image={project.image}
          demo={project.demo}
          tags={project.tags}
          />
				</div>
			))}
		</div>
  )
};

export default Projects;