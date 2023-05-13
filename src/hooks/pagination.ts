import { useState } from "react";

interface MyPaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

type MyPaginationState = {
  currentPage: number;
};

function usePagination(props: MyPaginationProps) {
  const [currentPage, setCurrentPage] = useState<MyPaginationState["currentPage"]>(1);

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
    // Custom logic here
  };

  return [currentPage, handlePageChange];
}
export default usePagination;
