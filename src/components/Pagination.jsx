import ReactPaginate from "react-paginate";

import { PaginationStyled } from "../styles/Pagination.styled";

export default function Pagination({ pageNumber, onPageChange, fetchInfo }) {
  return (
    <PaginationStyled>
      <ReactPaginate
        pageCount={fetchInfo?.pages}
        className="pagination"
        pageClassName="page"
        previousClassName="prevBtn"
        nextClassName="nextBtn"
        nextLabel="Next"
        previousLabel="Prev"
        activeClassName="active"
        pageRangeDisplayed="1"
        marginPagesDisplayed="1"
        forcePage={pageNumber}
        onPageChange={onPageChange}
      />
    </PaginationStyled>
  );
}
