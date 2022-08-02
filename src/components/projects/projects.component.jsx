import { ProjectsCard } from "./projects.styles";

const Projects = ({ props }) => {
  return (
    <ProjectsCard>
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <div className="tag">
        {props.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </ProjectsCard>
  );
};

export default Projects;
