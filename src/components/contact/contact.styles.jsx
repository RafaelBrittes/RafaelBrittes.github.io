import styled from "styled-components";

export const ContactComponent = styled.div`
  text-align: center;
  font-size: 24px;
  color: white;
  padding: 150px 150px 50px 150px;
  @media (max-width: 860px) {
    padding: 30px;
  }

  h3 {
    font-weight: 400;
    font-size: 50px;
    margin: 0px;
    color: #ff4800;
  }

  a {
    color: #ff4800;
    font-weight: 700;
    font-size: 26px;
    line-height: 10px;
  }
`;

export const IconsDiv = styled.div`
  color: #ff4800;
  svg {
    margin-top: 90px;
    padding: 20px;
    font-size: 50px;
    overflow: hidden;
    transition: 700ms;
    :hover {
      filter: invert(0.9) sepia(1) hue-rotate(1deg) saturate(7) brightness(2);
    }
  }
`;
