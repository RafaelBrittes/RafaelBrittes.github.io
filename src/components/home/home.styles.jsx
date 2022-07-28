import NavBar from "../nav-bar/nav-bar.component";
import { Hero, SideText } from "./home.component";

function Home() {
  return (
    <>
      <NavBar />
      <Hero>
        <p>
          Olá, eu sou Rafel Brittes o/ e et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5969/5969113.png"
          alt="test"
        />
      </Hero>
      <SideText>
        <h4>COMO EU <span>POSSO TE AJUDAR?</span></h4>
        <p>Algumas de minhas habilidades</p>
      </SideText>

      <SideText>
        <h4>ALGUNS PROJETOS <span>DESENVOLVIDOS POR MIM</span></h4>
        <p>Projects &#9881;</p>
      </SideText>
    </>
  );
}

export default Home;
