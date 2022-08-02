import styled from "styled-components";

export const NavBarContainer = styled.nav`
  ul {
    margin-top: 30px;
    display: flex;
    list-style: none;
    gap: 80px;
    place-content: center;
    color: white;
    @media (max-width: 950px) {
    gap: 40px;
    padding: 0px;
    }
  }
  a {
    padding: 5px 15px 15px 15px;
    transition-duration: 0.4s;
    text-underline-offset: 5px;
    border-radius: 10px;
    text-decoration: none;
    color: white;
    &:hover {
      text-decoration-line: underline;
      cursor: pointer;
      background-color: #ff4800;
    }
    @media (max-width: 950px) {
    padding: 5px 5px 15px 5px;
    }
    @media (max-width: 750px) {
      padding: 5px 0px 15px 0px;
    }
  }
`;
