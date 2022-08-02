import { NavBarContainer } from "./nav-bar.styles";

const NavBar = () => {
  return (
    <NavBarContainer>
      <ul>
        <a href="#hero">Home</a>
        <a href="#skills">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </ul>
    </NavBarContainer>
  );
};

export default NavBar;
