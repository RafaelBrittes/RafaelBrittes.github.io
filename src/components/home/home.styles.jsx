import NavBar from "../nav-bar/nav-bar.component";
import { Hero } from "./home.component";

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
    </>
  );
}

export default Home;
