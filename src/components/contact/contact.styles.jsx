import styled from "styled-components";

export const ContactComponentMobile = styled.div`
  display: none;
  flex-direction: column;
  text-align: center;
  font-size: 23px;
  color: ${(props) => props.theme.textWhiteCollor};
  padding: 10px 150px 50px 150px;
  @media (max-width: 1000px) {
    display: flex;
    padding: 30px;
  }

  h3 {
    align-self: center;
    font-weight: 500;
    font-size: 40px;
    padding: 0px 20px;
    color: ${(props) => props.theme.textWhiteCollor};
    background-color: ${(props) => props.theme.lightPurple};
    border-radius: 20px 5px 20px 5px;
    @media (max-width: 560px) {
      font-size: 30px;
      margin-top: 30%;
    }
  }

  a {
    color: ${(props) => props.theme.strongOrange};
    font-weight: 700;
    font-size: 23px;
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
    @media (max-width: 360px) {
      padding: 17px;
      margin-top: 50px;
    }
  }
`;

export const ContactDesktopSideText = styled.div`
  display: none;
  @media (min-width: 1001px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.theme.textWhiteCollor};
    text-align: center;
    padding: 0px 50px;
    font-size: 26px;
    h3 {
      align-self: center;
      font-weight: 500;
      font-size: 40px;
      padding: 0px 20px;
      margin-top: 0px;
      color: ${(props) => props.theme.textWhiteCollor};
      background-color: ${(props) => props.theme.lightPurple};
      border-radius: 20px 5px 20px 5px;
      font-size: 30px;
    }
    a {
      color: ${(props) => props.theme.strongOrange};
      font-weight: 700;
      font-size: 26px;
      line-height: 10px;
    }
  }
`;

export const ContactComponentDesktop = styled.form`
  display: none;
  @media (min-width: 1001px) {
    font-size: 26px;
    padding: 30px;
    border: solid 1px #ffffff49;
    color: ${(props) => props.theme.textWhiteCollor};
    background-color: rgb(22, 18, 53);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 500ms;

    input {
      color: ${(props) => props.theme.textWhiteCollor};
      background-color: #ebfaff55;
      font-size: 17px;
      width: 40vw;
      padding: 10px 0px 10px 20px;
      border-radius: 5px;
      border: 0px;
      margin-top: 14px;
      ::placeholder {
        color: ${(props) => props.theme.textWhiteCollor};
      }
    }
    textarea {
      border: solid 1px #ffffff49;
      color: ${(props) => props.theme.textWhiteCollor};
      background-color: #ebfaff55;
      border-radius: 5px;
      margin-top: 14px;
      width: 40vw;
      height: 180px;
      padding: 5px 0px 5px 20px;
      font-size: 18px;
      ::placeholder {
        font-size: 20px;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        color: ${(props) => props.theme.textWhiteCollor};
      }
    }
  }
  button {
    color: ${(props) => props.theme.textWhiteCollor};
    margin-top: 15px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 10px 15px;
    border: 0px;
    cursor: pointer;
    position: relative;
    background-image: linear-gradient(to right, #c961de, #2957a3);
    box-shadow: 8px 5px 5px black;
  }
`;
