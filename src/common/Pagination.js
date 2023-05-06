import React from "react";
import "./Pagination.css";

export default function Pagination({ page, total, setPage }) {
  const handlePageChange = (pageNumber) => () => {
    setPage(pageNumber);
  };

  return (
    <div className="pagination">
      {page !== 1 && (
        <span className="arrow" onClick={() => setPage((page) => page - 1)}>
          ⬅
        </span>
      )}
      {[...Array(total)].map((_, i) => (
        <button
          className={page === i + 1 ? "active" : ""}
          key={i}
          onClick={handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      {page !== total && (
        <span className="arrow" onClick={() => setPage((page) => page + 1)}>
          ⮕
        </span>
      )}
    </div>
  );
}
