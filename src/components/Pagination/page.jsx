import React from "react";

const Pagination = ({ itemsPerPage, totalItems, onPageChange, currentOffset }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const currentPage = Math.floor(currentOffset / itemsPerPage);

  if (pageCount <= 1) return null;
  const handlePrevious = () => {
    if (currentPage > 0) {
      onPageChange({ selected: currentPage - 1 });
    }
  };

  const handleNext = () => {
    if (currentPage < pageCount - 1) {
      onPageChange({ selected: currentPage + 1 });
    }
  };

  const handlePageSelect = (index) => {
    onPageChange({ selected: index });
  };

  return (
    <div className="mt-12 mb-20 flex items-center justify-center gap-1 sm:gap-2 px-2 w-full">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 0}
        className="px-3 py-1.5 sm:px-6 sm:py-3 rounded-xl border border-white/10 bg-white/5 text-white/40 font-bebas text-sm sm:text-lg hover:text-white hover:border-blue-500/30 transition-all font-bold disabled:opacity-10 disabled:cursor-not-allowed"
      >
        {"< Prev"}
      </button>

      <div className="flex items-center gap-1 sm:gap-2">
        {[...Array(pageCount)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageSelect(i)}
            className={`px-3 py-1 sm:px-6 sm:py-3 rounded-xl border font-bebas text-sm sm:text-lg transition-all duration-300 ${
              currentPage === i
                ? "bg-blue-600 text-white border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                : "border-white/10 bg-white/5 text-white/50 hover:border-blue-500/50 hover:bg-blue-500/10"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === pageCount - 1}
        className="px-3 py-1.5 sm:px-6 sm:py-3 rounded-xl border border-white/10 bg-white/5 text-white/40 font-bebas text-sm sm:text-lg hover:text-white hover:border-blue-500/30 transition-all font-bold disabled:opacity-10 disabled:cursor-not-allowed"
      >
        {"Next >"}
      </button>
    </div>
  );
};

export default Pagination;

// modifiy with ai
