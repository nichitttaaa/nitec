import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalItems: number;
  take: number;
}

const CustomPagination = ({
  currentPage,
  setCurrentPage,
  totalItems,
  take,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / take);

  const onPrev = () => {
    setCurrentPage((prev) => {
      return prev - 1;
    });
  };

  const onNext = () => {
    setCurrentPage((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="flex items-center disabled:opacity-50 disabled:cursor-default gap-2 px-3 py-2 bg-gray-300 rounded-lg cursor-pointer"
      >
        <ChevronLeft />
        <span>Previous</span>
      </button>

      {Array(totalPages)
        .fill(0)
        .map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index + 1);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
                index + 1 === currentPage
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-300 text-black'
              }`}
            >
              {index + 1}
            </button>
          );
        })}

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-3 py-2 bg-gray-300 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-default"
      >
        <span>Next</span>
        <ChevronRight />
      </button>
    </div>
  );
};

export default CustomPagination;
