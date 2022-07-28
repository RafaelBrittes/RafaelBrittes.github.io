import styled from "styled-components";

export const Hero = styled.div`
  margin: 180px;
  display: flex;
  align-items: center;
  color:#ffff;
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
    color:#ffff;
  }
`;
