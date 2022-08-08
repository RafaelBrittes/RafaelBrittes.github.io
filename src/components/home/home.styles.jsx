import styled from "styled-components";

export const Hero = styled.div`
  margin: 105px 25px 25px 25px;
  display: flex;
  place-content: center;
  align-items: center;
  color: ${(props) => props.theme.textWhiteCollor};

  p {
    max-width: 600px;
    border: 1px solid #ffffffa7;
    border-radius: 25px;
    padding: 60px;
    align-items: center;
    text-align: start;
    line-height: 45px;
    font-size: 26px;
  }
  img {
    padding-left: 40px;
    max-width: 50vh;
    min-width: 25vh;
    min-height: 25vh;
  }

  @media (max-width: 750px) {
    margin: 20px;
    p {
      line-height: 20px;
      padding: 20px;
      font-size: 20px;
    }
    img {
      padding-left: 0px;
      max-width: 30vh;
      min-width: 15vh;
      min-height: 15vh;
    }
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: 45px;
    p {
      order: 2;
      margin-top: 50px;
      line-height: 24px;
      padding: 10px;
      font-size: 20px;
    }
    img {
      order: 1;
      margin-top: 10px;
      width: 20vh;
      height: 20vh;
      margin-bottom: -20px;
    }
  }
`;

export const ContactButton = styled.div`
  display: flex;
  justify-content: center;
  a {
    color: white;
    text-decoration: none;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 80px;
    border-radius: 15px;
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 7px 30px;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    ::after {
      content: "";
      background-color: ${(props) => props.theme.lightPurple};
      width: 100%;
      border-radius: 15px;
      z-index: -1;
      position: absolute;
      height: 100%;
      top: 7px;
      left: 7px;
      transition: 0.3s;
    }

    :hover::after {
      top: 0px;
      left: 0px;
    }
  }
`;

export const SideText = styled.div`
  padding: 25px 0px 0px 60px;
  color: ${(props) => props.theme.strongOrange};
  background-color: #161235;
  h4 {
    font-size: 23px;
    font-weight: 400;
    margin: 0px;
  }
  span {
    font-weight: bold;
  }
  p {
    font-size: 20px;
    margin-left: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.textWhiteCollor};
    margin-bottom: 0px;
  }
  @media (max-width: 480px) {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      padding-left: 0px;
    }
  }
`;

export const IconContainer = styled.div`
  padding: 50px 15px 50px 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  place-items: center;
  background-color: #161235;
  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
`;

export const ProjectsContainer = styled.div`
  padding: 30px 0px 30px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  place-items: center;
  background-color: #161235;

  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;

export const Svg = styled.div`
  margin-top: -60px;
  margin-bottom: -60px;
`;
