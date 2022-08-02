import styled from "styled-components";

export const ProjectsCard = styled.div`
  height: 320px;
  width: 300px;
  border-radius: 15px;
  margin: 10px 5px 30px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #060220;
  border: 1px solid #ffffff8c;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items: center;
    color: #fff;
    height: 100%;
    width: 100%;
  }
  p {
    margin: 3px;
  }
  .tag {
    display: flex;
    font-size: 14px;

    span {
      padding: 7px;
      background-color: #161235;
      border-radius: 10px;
      margin: 5px;
    }
  }

  img {
    width: 100%;
    height: 80%;
    border-radius: 15px;
    filter: grayscale(80%);
    transition: 0.8s ease-in-out;
    :hover {
      filter: grayscale(0%);
    }
  }

  @media (max-width: 460px) {
    height: 240px;
    width: 220px;
    font-size: 15px;
    span {
      background-color: #161235;
      border-radius: 10px;
      margin: 5px;
      font-size: 11px;
    }
  }
`;
