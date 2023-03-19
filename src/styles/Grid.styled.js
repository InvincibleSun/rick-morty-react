import styled from "styled-components";

export const GridStyled = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px 20px;
  padding-bottom: 22px;
  @media (max-width: 1040px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 32px 0px;
  }
`;
