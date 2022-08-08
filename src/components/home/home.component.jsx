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
  ContactSection,
  Footer,
} from "./home.styles";
import heroImg from "../../assets/heroImg.PNG";
import ecommerce from "../../assets/ecommerce.PNG";
import tagApi from "../../assets/tag api.PNG";
import tagFront from "../../assets/tag front.PNG";
import portifolio from "../../assets/portifolio.PNG";
import Contact from "../contact/contact.component";
import footerWave from "../../assets/wave-haikei.svg";

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
          Welcome! My name is Rafael Brittes, i am a software developer based in
          Brazil and this is my portfolio website. Here you’ll can find my
          journey as a software developer.
        </p>
        <img src={heroImg} alt="Dev" />
      </Hero>

      <ContactButton>
        <a href="#contact">Contact</a>
      </ContactButton>

      <Svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#161235"
            d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,69.3C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </Svg>

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

      <Svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#161235"
            d="M0,96L60,117.3C120,139,240,181,360,202.7C480,224,600,224,720,202.7C840,181,960,139,1080,128C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </Svg>

      <ContactSection id="contact">
        <Contact />
      </ContactSection>

      <Footer>
        <img src={footerWave} alt="waves footer" />
      </Footer>
    </>
  );
}

export default Home;
