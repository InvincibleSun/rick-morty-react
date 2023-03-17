import ReactPaginate from 'react-paginate';

import { PaginationStyled } from "./styles/Pagination.styled"


export default function Pagination({ pageNumber, setPageNumber, fetchInfo }) {
  return(
    <PaginationStyled>
        <ReactPaginate 
            pageCount={fetchInfo?.pages} 
            className='pagination' 
            pageClassName="page" 
            previousClassName="prevBtn" 
            nextClassName="nextBtn" 
            nextLabel="Next" 
            previousLabel="Prev"
            activeClassName="active"
            pageRangeDisplayed="1"
            marginPagesDisplayed="1"
            // forcePage={pageNumber === 1 ? 0 : pageNumber}
            onPageChange={(data) => {
              // localStorage.setItem("pageNumber", pageNumber);
              localStorage.setItem('pageNumber', data.selected + 1);
              // setPageNumber(data.selected + 1 || localStorage.getItem('pageNumber'))
              setPageNumber(data.selected + 1);
            }}
        />
    </PaginationStyled>
  )
}