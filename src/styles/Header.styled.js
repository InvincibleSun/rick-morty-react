import styled from "styled-components";
import Search from "../images/Search.svg";

export const HeaderStyled = styled.header`
  margin: 56px 0 61px;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h1 {
      font-size: 16px;
      font-weight: 500;
    }
    button {
      background-color: #00b0c8;
      color: #fff;
      cursor: pointer;
      padding: 10px 15px;
      border: 1px solid #90a08d;
      border-radius: 3px;
    }
  }
  img {
    margin: 0 auto 16px;
    display: block;
  }
  form {
    display: flex;
    justify-content: center;
    input {
      padding: 16px 16px 16px 48px;
      font-size: 18px;
      height: 56px;
      width: 1020px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 8px;
      background: url(${Search}) 16px no-repeat;
      &::placeholder {
        font-size: 16px;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  @media (max-width: 1040px) {
    form input {
      width: 750px;
    }
  }
  @media (max-width: 768px) {
    form input {
      width: 540px;
    }
  }
  @media (max-width: 600px) {
    img {
      width: 450px;
    }
    form input {
      width: 450px;
    }
  }
  @media (max-width: 480px) {
    margin-bottom: 32px;
    h1 {
      font-size: 13px;
    }
    button {
      margin-bottom: 30px;
    }
    img {
      width: 312px;
      margin-bottom: 32px;
    }
    form input {
      width: 312px;
    }
  }
`;
