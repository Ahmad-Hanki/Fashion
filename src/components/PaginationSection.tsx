import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "./ui/pagination";
  
  export const PaginationSection = ({
    totalItem,
    ItemsPerPage,
    currentPage,
    setCurrentPage,
  }: {
    totalItem: any;
    ItemsPerPage: any;
    currentPage: any;
    setCurrentPage: any;
  }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalItem / ItemsPerPage); i++) {
      pages.push(i); //6 pages
    }
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextPage = () => {
      if (currentPage < pages.length) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handleNextPage2 = () => {
      if (currentPage + 1 < pages.length) {
        setCurrentPage(currentPage + 2);
      }
    };
    return (
      <Pagination className="cursor-pointer">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                handlePrevPage();
              }}
            />
          </PaginationItem>
  
          <PaginationItem>
            <PaginationLink className="bg-black/15">{currentPage}</PaginationLink>
          </PaginationItem>
  
          {currentPage < pages.length && (
            <PaginationItem>
              <PaginationLink onClick={handleNextPage}>
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
          )}
  
          {currentPage + 2 <= pages.length && (
            <PaginationItem>
              <PaginationLink onClick={handleNextPage2}>
                {currentPage + 2}
              </PaginationLink>
            </PaginationItem>
          )}
  
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                handleNextPage();
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };
  