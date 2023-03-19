import styled from "styled-components";

export const AuthStyled = styled.section`
  background-color: #00b0c830;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    height: 312px;
    width: 412px;
    background-color: #00b0c880;
    margin: 1rem auto;
    padding: 1rem;
    border-radius: 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
    h1 {
      margin: 0 0.5rem 1.3rem;
      font-size: 1.9rem;
      color: #00000080;
    }
    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 3px;
      box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
      color: #757575;
      background-color: white;
      font-size: 1rem;
      font-weight: 500;
      &:hover {
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
      }
      &:active {
        background-color: #eeeeee;
      }
      &:focus {
        outline: none;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
          0 0 0 3px #c8dafc;
      }
      i {
        margin-right: 10px;
        color: #00b0c8;
      }
    }
    @media (max-width: 480px) {
      width: 312px;
    }
  }
`;
