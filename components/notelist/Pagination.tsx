import React, { useState } from "react";

const Pagination = ({
  currentPage,
  cardsPerPage,
  totalCards,
  paginate,
  setCardsPerPage,
}: {
  currentPage: any;
  cardsPerPage: any;
  totalCards: any;
  paginate: any;
  setCardsPerPage: any;
}) => {
  const pageNumbers: any = [];
  const maxCardsPerPage = 24;

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCardsPerPage(parseInt(e.target.value));
    paginate(1);
  };

  const renderPaginationButtons = () => {
    return (
      <>
        {pageNumbers.map((number: number) => (
          <li key={number} className="mx-1">
            <button
              className={`${
                currentPage === number
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700"
              } px-3 py-1 rounded-lg`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </>
    );
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center">
        <p className="text-sm text-gray-400">Cards per page:</p>
        <select
          className="mx-2 border border-gray-400 rounded-md text-sm"
          value={cardsPerPage}
          onChange={handleSelectChange}
        >
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
          <option value={24}>24</option>
          <option value={32}>32</option>
          <option value={maxCardsPerPage}>All</option>
        </select>
      </div>
      <ul className="flex">
        {totalCards > maxCardsPerPage && (
          <li className="mx-1">
            <button
              className={`${
                currentPage === 1
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700"
              } px-3 py-1 rounded-lg`}
              onClick={() => paginate(1)}
            >
              {"<<"}
            </button>
          </li>
        )}
        {renderPaginationButtons()}
        {totalCards > maxCardsPerPage && (
          <li className="mx-1">
            <button
              className={`${
                currentPage === Math.ceil(totalCards / cardsPerPage)
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-700"
              } px-3 py-1 rounded-lg`}
              onClick={() => paginate(Math.ceil(totalCards / cardsPerPage))}
            >
              {">>"}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
