import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import './styles/CardProject.css';

const CardProject = (props) => {
  const { logo, title, description, linkText, github, demo, image, tags } = props;

  return (
    <>
      <article className="card-project-article-container">
        <div className="card-project-image-wrapper">
          <div className="card-project-image-div">
            <img
              alt="Image project"
              className="card-project-image"
              loading="lazy"
              src={image}
            />
          </div>
        </div>

        <div className="card-project-content-wrapper">
          <h3 className="card-project-title">{title}</h3>
          <div className="card-project-tag-section">
            <ul className="card-project-tag-list">
              {tags.map((tag, index) => (
                <li key={index}>
                  <span className="card-project-tag">
                    {tag.icon && <i className={tag.icon}></i>}
                    {tag.name}
                  </span>
                </li>
              ))}
            </ul>

            <div className="card-project-description">{description}</div>
            <footer className="card-project-footer">
              {github && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  role="link"
                  className="card-project-link"
                  href={github}>
                  <FaGithub size={18}/>
                  Code
                </a>
              )}
              {demo && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  role="link"
                  className="card-project-link"
                  href={demo}>
                  <IoIosLink size={18}/>
                  Link
                </a>
              )}
            </footer>
          </div>
        </div>
      </article>

    </>
  )
}

export default CardProject;