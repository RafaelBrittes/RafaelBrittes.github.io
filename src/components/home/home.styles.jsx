import NavBar from "../nav-bar/nav-bar.component";
import { Hero } from "./home.component";

function Home() {
  return (
    <>
      <NavBar />
      <Hero>
        <p>
          Olá, eu sou Rafel Brittes o/ e amo muito minha namorada e et dolore
          magnam aliquam quaerat voluptatem. Ut enim ad minima veniam magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam
        </p>
        <img src="https://cdn-icons-png.flaticon.com/512/5969/5969113.png" />
      </Hero>
    </>
  );
}

export default Home;
