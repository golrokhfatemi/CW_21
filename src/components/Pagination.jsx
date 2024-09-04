// import { useContext } from "react";
// import { RootContext } from "../../context/RootContextProvider";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumber = () => {
    const pages = [];
    const maxPageToshow = 5;
    const halfMaxPageToShow = Math.floor(maxPageToshow / 2);

    if (totalPages <= maxPageToshow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(currentPage - halfMaxPageToShow, 1);
      let endPage = Math.min(currentPage + halfMaxPageToShow, totalPages);
      if (startPage === 1) {
        endPage = maxPageToshow;
      } else if (endPage === totalPages) {
        startPage = totalPages - maxPageToshow + 1;
      }
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (startPage > 1) {
        if (startPage - 1 >= 2) {
          pages.unshift("...");
        }
        pages.unshift(1);
      }

      if (endPage < totalPages) {
        if (totalPages - endPage !== 1) pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-x-4 mt-4">
      <button
        className="px-3 py-1 rounded-lg bg-slate-300"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        previous
      </button>
      {getPageNumber().map((page) => (
        <button
          className={`px-3 py-1 rounded-lg bg-slate-300 ${
            currentPage === page ? "bg-slate-500" : ""
          }`}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled ={typeof page !== "number"}
          key={page}
        >
          {page}
        </button>
      ))}
      <button
        className="px-3 py-1 rounded-lg bg-slate-300"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
