import ReactPaginate from 'react-paginate';

import { PaginationStyled } from "./styles/Pagination.styled"


export default function Pagination({ setPageNumber, fetchInfo }) {
  console.log(fetchInfo)
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
            onPageChange={(data) => {
              setPageNumber(data.selected + 1)
            }}
        />
    </PaginationStyled>
  )
}