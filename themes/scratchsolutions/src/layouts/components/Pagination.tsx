import Link from "next/link";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Pagination = ({
  section,
  currentPage,
  totalPages,
}: {
  section: string;
  currentPage: number;
  totalPages: number;
}) => {
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;

  let pageList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }


  return (
    <>
      {totalPages > 1 && (
        <nav
          className="flex items-center justify-center space-x-3"
          aria-label="Pagination"
        >
          {/* previous */}
          {hasPrevPage ? (
            <Link
              href={
                indexPageLink
                  ? `${section ? "/" + section : "/"}`
                  : `${section ? "/" + section : ""}/page/${currentPage - 1}`
              }
              className="px-4 py-2.5 text-primary hover:bg-primary flex items-center rounded-full gradient-border hover:text-text-dark transition-colors"
            >
              <FaAngleLeft className="mr-2" />
              <span>Previous</span>
            </Link>
          ) : (
            <span className="rounded-full gradient-border px-4 py-2.5 text-text-light/50 flex items-center opacity-50 cursor-not-allowed">
              <FaAngleLeft className="mr-2" />
              <span>Previous</span>
            </span>
          )}

          {/* page index */}
          {pageList.map((pagination, i) => (
            <React.Fragment key={`page-${i}`}>
              {pagination === currentPage ? (
                <span
                  aria-current="page"
                  className="size-12 rounded-full gradient-border flex items-center justify-center bg-primary text-text-dark font-medium"
                >
                  {pagination}
                </span>
              ) : (
                <Link
                  href={
                    i === 0
                      ? `${section ? "/" + section : "/"}`
                      : `${section ? "/" + section : ""}/page/${pagination}`
                  }
                  passHref
                  aria-current="page"
                  className="size-12 rounded-full gradient-border flex items-center justify-center hover:bg-primary text-primary hover:text-text-dark transition-colors"
                >
                  {pagination}
                </Link>
              )}
            </React.Fragment>
          ))}

          {/* next page */}
          {hasNextPage ? (
            <Link
              href={`${section ? "/" + section : ""}/page/${currentPage + 1}`}
              className="px-4 py-2.5 text-primary hover:bg-primary flex items-center rounded-full gradient-border hover:text-text-dark transition-colors"
            >
              <span className="mr-2">Next</span>
              <FaAngleRight />
            </Link>
          ) : (
            <span className="px-4 py-2.5 text-text-light/50 flex items-center rounded-full gradient-border opacity-50 cursor-not-allowed">
              <span className="mr-2">Next</span>
              <FaAngleRight />
            </span>
          )}
        </nav>
      )}
    </>
  );
};

export default Pagination;
