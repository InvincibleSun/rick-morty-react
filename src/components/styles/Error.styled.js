import styled from "styled-components";

export const ErrorStyled = styled.div`
  margin: 30px;
  background-color: #00b0c850;
  padding: 40px;
  border-radius: 5px;
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 0;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;
    a {
      cursor: pointer;
      color: #00b0c8;
      &:hover {
        color: #0b4850;
        text-shadow: 0.5px 0.5px #00b0c8;
      }
    }
  }
`;
