import styled from "styled-components";

export const Hero = styled.div`
  margin: 25px;
  display: flex;
place-content: center;
  align-items: center;
  color: #ffff;
  p {
    border: 1px solid #ffffffa7;
    border-radius: 15px;
    padding: 30px;
    align-items: center;
    text-align: center;
    line-height: 30px;
    font-size: 25px;
  }
  img {
    padding-left: 20px;
    max-width: 50vh;
    min-width: 25vh;
    min-height: 25vh;
  }
  @media (max-width: 750px) {
    margin: 40px;
    p {
      line-height: 20px;
      padding: 20px;
      font-size: 20px;
    }
    img {
      padding-left: 0px;
      max-width: 30vh;
      min-width: 25vh;
      min-height: 25vh;
    }
  }
  @media (max-width: 460px) {
    margin: 15px;
    img {
      padding-left: 0px;
    }
  }
`;

export const ContactButton = styled.button`
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 80px;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0); 
  ::after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  :hover::after {
    top: 0px;
    left: 0px;
  }
`;

export const SideText = styled.div`
  margin-left: 60px;
  color: #ff4800;
  h4 {
    font-weight: 400;
    margin: 0px;
  }
  span {
    font-weight: bold;
  }
  p {
    margin-left: 20px;
    font-weight: 600;
    color: #ffff;
  }
  @media (max-width: 460px) {
    margin: 15px;
    img {
      padding-left: 0px;
    }
  }
`;

export const IconContainer = styled.div`
  margin: 50px 0px 50px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  place-items: center;
  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
`;

export const ProjectsContainer = styled.div`
  margin: 30px 0px 30px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  place-items: center;
  /* @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }*/
`;