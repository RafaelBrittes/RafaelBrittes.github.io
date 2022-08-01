import styled from "styled-components";

export const Hero = styled.div`
  margin: 100px;
  display: flex;
  align-items: center;
  color: #ffff;
  p {
    border: 1px solid #ffffffa7;
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    line-height: 30px;
  }
  img {
    padding-left: 20px;
    max-width: 30vh;
    max-height: 30vh;
    min-width: 20vh;
    min-height: 20vh;
  }
  @media (max-width: 750px) {
    margin: 40px;
    p {
      line-height: 20px;
      padding: 20px;
    }
    img {
      padding-left: 10px;
      max-width: 30vh;
      max-height: 30vh;
      min-width: 15vh;
      min-height: 15vh;
    }
  }
  @media (max-width: 460px) {
    margin: 15px;
    img {
      padding-left: 0px;
    }
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
