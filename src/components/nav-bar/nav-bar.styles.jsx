import styled from "styled-components";

export const NavBarContainer = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 80px;
    place-content: center;
  }

  li {
    padding: 17px;
    transition-duration: 0.4s;
    text-underline-offset: 5px;
    border-radius: 10px;

    &:hover {
      text-decoration-line: underline;
      cursor: pointer;
      background-color: #ff480052;
    }
  }
`;
