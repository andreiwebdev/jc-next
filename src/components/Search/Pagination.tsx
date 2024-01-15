"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const Pagination = ({ currentPage, totalPages }: any) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(pageNumber: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(pageNumber));
    replace(`${pathname}?${params.toString()}`);
  }

  const renderPageNumbers = () => {
    const maxDisplayedPages = 5; // Maximum number of page numbers to display
    const pages = [];

    // Calculate the range of page numbers to display
    let startPage = Math.max(
      currentPage - Math.floor(maxDisplayedPages / 2),
      1
    );
    let endPage = startPage + maxDisplayedPages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxDisplayedPages + 1, 1);
    }

    if (startPage > 1) {
      // Display "Previous" button
      pages.push(
        <button
          key="prev"
          onClick={() => handleSearch(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
      );
      // Display "First Page" button
      pages.push(
        <button key="first" onClick={() => handleSearch(1)}>
          1
        </button>
      );

      // Display ellipsis before the first page
      if (startPage > 2) {
        pages.push(<span key="ellipsis-start">...</span>);
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <button
          key={page}
          onClick={() => handleSearch(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      );
    }

    if (endPage < totalPages) {
      // Display ellipsis after the last page
      if (endPage < totalPages - 1) {
        pages.push(<span key="ellipsis-end">...</span>);
      }

      // Display "Last Page" button
      pages.push(
        <button key="last" onClick={() => handleSearch(totalPages)}>
          {totalPages}
        </button>
      );
    }

    // Display "Next" button
    pages.push(
      <button
        key="next"
        onClick={() => handleSearch(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    );

    return pages;
  };

  return <div className="my-10">{renderPageNumbers()}</div>;
};
