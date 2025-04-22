import { TbDeviceDesktopCheck } from "react-icons/tb";
import INFO from "../data/user";
import CardProject from "./common/CardProject";
import './styles/Projects.css';

const Projects = () => {
  return (
    <>
    <h2 className="section-project-title"><TbDeviceDesktopCheck size={28}/> Projects</h2>
    <div className="all-projects-container">
			{INFO.projects.map((project, index) => (
          <CardProject
          key={index}
          title={project.title}
          description={project.description}
          github={project.github}
          image={project.image}
          demo={project.demo}
          tags={project.tags}
          />
			))}
		</div>
    </>
  )
};

export default Projects;