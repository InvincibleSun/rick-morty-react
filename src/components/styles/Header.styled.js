import styled from "styled-components";
import Search from "../../images/Search.svg";

export const HeaderStyled = styled.header`
  margin: 86px 0 61px;
  img {
    margin: 0 auto 16px;
    display: block;
  }
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
`;
