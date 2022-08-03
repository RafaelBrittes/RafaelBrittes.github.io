import styled from "styled-components";

export const ContactComponent = styled.div`
  text-align: center;
  font-size: 24px;
  color: ${(props) => props.theme.textWhiteCollor};
  padding: 150px 150px 50px 150px;
  @media (max-width: 860px) {
    padding: 30px;
  }

  h3 {
    font-weight: 400;
    font-size: 50px;
    margin: 0px;
    color: ${(props) => props.theme.strongOrange};
  }

  a {
    color: ${(props) => props.theme.strongOrange};
    font-weight: 700;
    font-size: 26px;
    line-height: 10px;
  }
`;

export const IconsDiv = styled.div`
  color: ${(props) => props.theme.strongOrange};
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
