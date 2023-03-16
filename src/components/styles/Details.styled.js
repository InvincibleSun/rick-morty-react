import styled from "styled-components";

export const DetailsStyled = styled.div`
  .arrow-back {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 20px 0 0 50px;
    /* position: fixed; */
    span {
      font-family: "Karla", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.2;
      color: #000;
      margin-left: 8px;
      text-transform: uppercase;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px 20px;
    font-family: "Roboto", sans-serif;
    color: #081f32;
    height: 100%;
    div img {
      height: 300px;
      width: 300px;
      object-fit: cover;

      border: 5px solid #f2f2f7;
      border-radius: 50%;
      margin-bottom: 16px;
    }
    h1 {
      font-size: 48px;
      line-height: 1.2;
      margin: 0 0 48px 0;
      text-align: center;
    }
    & > p {
      font-weight: 500;
      font-size: 20px;
      line-height: 1.2;
      letter-spacing: 0.15px;
      color: #8e8e93;
      margin-bottom: 48px;
    }
    ul {
      width: 412px;
      padding: 0 16px 16px;
    }
    li {
      font-weight: 700;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: 0.15px;
      border-bottom: 1px solid #e3e4e7b2;
      margin-top: 9px;
      text-transform: capitalize;
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
        letter-spacing: 0.25px;
        color: #6e798c;
        margin-bottom: 12px;
      }
    }
  }
`;
