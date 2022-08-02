import NavBar from "../nav-bar/nav-bar.component";
import Projects from "../projects/projects.component";
import Skills from "../skills/skills.component";
import {
  ContactButton,
  Hero,
  IconContainer,
  ProjectsContainer,
  SideText,
} from "./home.styles";
import heroImg from "../../assets/heroImg.PNG";
import ecommerce from "../../assets/ecommerce.PNG";
import tagApi from "../../assets/tag api.PNG";
import tagFront from "../../assets/tag front.PNG";
import portifolio from "../../assets/portifolio.PNG";


function Home() {
  const skills = [
    "JavaScript",
    "React",
    "PHP",
    "Laravel",
    "Angular",
    "HTML",
    "CSS",
    "SASS",
    "GIT",
    "SQL",
  ];

  const projects = [
    {
      id: 1,
      img: ecommerce,
      name: "E-commerce",
      tags: ["React"],
    },
    {
      id: 2,
      img: tagApi,
      name: "Tag management API",
      tags: ["PHP", "Laravel", "Docker", "MySql"],
    },
    {
      id: 3,
      img: tagFront,
      name: "Tag management Front end",
      tags: ["React"],
    },
    {
      id: 4,
      img: portifolio,
      name: "Portifólio",
      tags: ["React"],
    },
  ];

  return (
    <>
      <NavBar />
      <Hero>
        <p>
          Olá, me chamo Rafael Brittes, sou desenvolvedor full stack apaixonado
          por tecnologia, robótica e games.
        </p>
        <img src={heroImg} alt="test" />

      </Hero>
      <ContactButton>Entre em contato</ContactButton>

      <SideText>
        <h4>
          COMO EU <span>POSSO TE AJUDAR?</span>
        </h4>
        <p>Algumas de minhas habilidades</p>
      </SideText>
      <IconContainer>
        {skills.map((skill) => (
          <Skills key={skill} props={skill} />
        ))}
      </IconContainer>

      <SideText>
        <h4>
          ALGUNS PROJETOS <span>DESENVOLVIDOS POR MIM</span>
        </h4>
        <p>Projects &#9881;</p>
      </SideText>

      <ProjectsContainer>
        {projects.map((project) => (
          <Projects key={project.id} props={project} />
        ))}
      </ProjectsContainer>
    </>
  );
}

export default Home;
