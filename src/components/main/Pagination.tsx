import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
          style={{
            margin: '0 5px',
            backgroundColor: page === currentPage ? '#007bff' : '#fff',
            color: page === currentPage ? '#fff' : '#000'
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;