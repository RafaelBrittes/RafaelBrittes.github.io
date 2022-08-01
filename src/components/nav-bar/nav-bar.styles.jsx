import styled from "styled-components";

export const NavBarContainer = styled.nav`
  ul {
    margin-top: 30px;
    display: flex;
    list-style: none;
    gap: 80px;
    place-content: center;
    color: white;
  }

  li {
    padding: 5px 15px 20px 15px;
    transition-duration: 0.4s;
    text-underline-offset: 5px;
    border-radius: 10px;

    &:hover {
      text-decoration-line: underline;
      cursor: pointer;
      background-color: #ff480052;
    }
    @media (max-width: 950px) {
      padding: 5px 5px 20px 5px;
    }
    @media (max-width: 850px) {
      display: none;
    }
  }
`;
