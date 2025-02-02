import { ChartData } from '@/components/PieChart';
import { useState } from 'react';

function usePaginator(items?: ChartData[], rowsPerPage?: number) {
  const itemsPerPage = rowsPerPage || 3;
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the indices of the items to display
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = items?.slice(start, end) || [];
  const totalPages = items ? Math.ceil(items.length / itemsPerPage) : 0;

  // Function to go to the previous page
  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to go to the next page
  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const isAtStart = currentPage === 0;
  const isAtEnd = currentPage >= totalPages - 1;
console.log(currentPage, 'currentPage');

  return {
    isAtStart,
    isAtEnd,
    currentItems,
    currentPage,
    totalPages,
    handleBack,
    handleNext,
    setCurrentPage,
  };
}

export default usePaginator;
