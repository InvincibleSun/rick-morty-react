import styled from "styled-components";

export const PaginationStyled = styled.div`
  .pagination {
    display: flex;
    margin: 20px 10px 40px;
    align-items: center;
    .prevBtn,
    .nextBtn {
      background-color: #00b0c8;
      color: #fff;
      cursor: pointer;
      padding: 10px 15px;
      border: 1px solid #90a08d;
      border-radius: 3px;
    }
    .prevBtn {
      margin-right: 7px;
    }
    .nextBtn {
      margin-left: 7px;
    }
    .page {
      padding: 10px;
      border: 1px solid #90a08d;
      border-radius: 3px;
      cursor: pointer;
      color: #000;
      margin: 0 7px;
    }
    .active {
      background-color: #00b0c8;
      color: #fff;
    }
  }
`;
