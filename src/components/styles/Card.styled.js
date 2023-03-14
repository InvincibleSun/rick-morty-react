import styled from "styled-components";

export const CardStyled = styled.div`
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  width: 240px;
  height: 100%;

  div > img {
    height: 168px;
    width: 240px;
    object-fit: cover;
  }
  div:has(h1, p) {
    margin: 12px 16px;
    h1 {
      font-weight: 500;
      font-size: 20px;
      line-height: 1.5;
      letter-spacing: 0.15px;
      color: rgba(0, 0, 0, 0.87);
      margin: 0;
    }
    p {
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: 0.25px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  a {
    background-color: red;
    cursor: pointer;
  }
`;
