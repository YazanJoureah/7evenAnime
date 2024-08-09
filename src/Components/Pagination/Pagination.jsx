import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import "./Pagination.css";

const Pagination = ({ postsPerPage, length, pageCahnge }) => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = Math.ceil(length / postsPerPage);
  const [displayedPages, setDisplayedPages] = useState([1, 2, 3, 4, 5]); // Initial scope

  const maxPagesToShow = 5; // Show 5 pages at a time

  // Function to update displayed pages based on activePage

  useEffect(() => {
    let startPage = Math.max(1, activePage - 2); // Ensure startPage is at least 1
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages); // Ensure endPage is at most totalPages
    const pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => i + startPage
    );
    setDisplayedPages(pages);
    pageCahnge(activePage);
  }, [activePage, totalPages]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  // Functions to jump to first/last page
  const handleFirstPage = () => {
    setActivePage(1);
  };
  const handleLastPage = () => {
    setActivePage(totalPages);
  };

  // Functions to go to previous/next page
  const handlePreviousPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };
  const handleNextPage = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  return (
    <div className="L_pagination">
      <button onClick={handleFirstPage} disabled={activePage === 1}>
        First
      </button>
      <button onClick={handlePreviousPage} disabled={activePage === 1}>
        Previous
      </button>

      {displayedPages.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`pagination-button ${
            pageNumber === activePage ? "active" : ""
          }`}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      <button onClick={handleNextPage} disabled={activePage === totalPages}>
        Next
      </button>
      <button onClick={handleLastPage} disabled={activePage === totalPages}>
        Last
      </button>
    </div>
  );
};
Pagination.propTypes = {
  length: PropTypes.number,
  PerPage: PropTypes.number,
  lastPage: PropTypes.number,
  currentPage: PropTypes.number,
  handlePagination: PropTypes.func,
};

export default Pagination;
