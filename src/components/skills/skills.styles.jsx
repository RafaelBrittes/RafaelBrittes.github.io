import styled from "styled-components";

export const IconCard = styled.div`
  height: 170px;
  width: 170px;
  border-radius: 15px;
  margin: 10px 5px 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #060220;
  border: 1px solid #ffffff8c;
  justify-content: center;
  color: #fff;
  font-size: 26px;

  .FontAwesomeIcon {
    font-size: 90px;
    transition: 500ms;
    :hover {
      font-size: 100px;
    }
  }

  img {
    width: 50px;
    transition: 500ms;
    :hover {
      width: 60px;
    }
  }

  @media (max-width: 460px) {
    height: 120px;
    width: 120px;
    font-size: 20px;
    .FontAwesomeIcon {
      font-size: 60px;
      :hover {
        font-size: 80px;
      }
    }
  }
`;
