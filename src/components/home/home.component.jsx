import NavBar from "../nav-bar/nav-bar.component";
import Projects from "../projects/projects.component";
import Skills from "../skills/skills.component";
import {
  ContactButton,
  Hero,
  IconContainer,
  ProjectsContainer,
  SideText,
  Svg,
} from "./home.styles";
import heroImg from "../../assets/heroImg.PNG";
import ecommerce from "../../assets/ecommerce.PNG";
import tagApi from "../../assets/tag api.PNG";
import tagFront from "../../assets/tag front.PNG";
import portifolio from "../../assets/portifolio.PNG";
import Contact from "../contact/contact.component";

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
      href: "https://github.com/RafaelBrittes/E-commerce-with-React",
    },
    {
      id: 2,
      img: tagApi,
      name: "Tag management API",
      tags: ["PHP", "Laravel", "Docker", "MySql"],
      href: "https://github.com/RafaelBrittes/Product-management",
    },
    {
      id: 3,
      img: tagFront,
      name: "Tag management Front end",
      tags: ["React"],
      href: "https://github.com/RafaelBrittes/Product-management-front",
    },
    {
      id: 4,
      img: portifolio,
      name: "Portifólio",
      tags: ["React"],
      href: "https://github.com/RafaelBrittes/RafaelBrittes.github.io",
    },
  ];

  return (
    <>
      <NavBar />
      <Hero id="#hero">
        <p>
          Welcome! My name is Rafael Brittes, i am a software developer and this
          is my portfolio website. Here you’ll can find my journey as a software
          developer.
        </p>
        <img src={heroImg} alt="Dev" />
      </Hero>

      <ContactButton>
        <a href="#contact">Contact</a>
      </ContactButton>

      <SideText id="skills">
        <h4>
          HOW CAN I <span>HELP YOU?</span>
        </h4>
        <p>Some of my skills</p>
      </SideText>
      <IconContainer>
        {skills.map((skill) => (
          <Skills key={skill} props={skill} />
        ))}
      </IconContainer>

      <SideText id="projects">
        <h4>
          SOME PROJECTS THAT <span>I'VE MADE</span>
        </h4>
        <p>Projects &#9881;</p>
      </SideText>

      <ProjectsContainer>
        {projects.map((project) => (
          <Projects key={project.id} props={project} />
        ))}
      </ProjectsContainer>

      <section id="contact">
        <Contact />
      </section>

      <Svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#350267"
            fill-opacity="1"
            d="M0,224L720,288L1440,256L1440,320L720,320L0,320Z"
          ></path>
        </svg>
      </Svg>
    </>
  );
}

export default Home;
