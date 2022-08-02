import { ProjectsCard } from "./projects.styles";

const Projects = ({ props }) => {
  return (
    <ProjectsCard>
      <a href={props.href}>
        <img src={props.img} alt={props.name}/>
        <p>{props.name}</p>
        <div className="tag">
          {props.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </a>
    </ProjectsCard>
  );
};

export default Projects;
