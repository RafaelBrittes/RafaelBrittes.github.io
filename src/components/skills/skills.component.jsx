import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faPhp,
  faReact,
  faLaravel,
  faAngular,
  faHtml5,
  faCss3,
  faSass,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { IconCard } from "./skills.styles";

const Skills = ({ props }) => {
  let iconName;
  switch (props) {
    case "JavaScript":
      iconName = faJsSquare;
      break;
    case "PHP":
      iconName = faPhp;
      break;
    case "React":
      iconName = faReact;
      break;
    case "Laravel":
      iconName = faLaravel;
      break;
    case "Angular":
      iconName = faAngular;
      break;
    case "HTML":
      iconName = faHtml5;
      break;
    case "CSS":
      iconName = faCss3;
      break;
    case "SASS":
      iconName = faSass;
      break;
    case "GIT":
      iconName = faGithub;
      break;
    case "SQL":
      break;
    default:
      break;
  }
  return (
    <IconCard>
      {iconName ? (
        <FontAwesomeIcon icon={iconName} className="FontAwesomeIcon" />
      ) : (
        <img
          src="https://www.pngkey.com/png/full/231-2317080_email-databases-database-icon-white-png.png"
          alt=""
        />
      )}
      <span>{props}</span>
    </IconCard>
  );
};

export default Skills;