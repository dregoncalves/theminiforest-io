import React from "react";
import { path } from "ramda";
import { useSearchPage } from "vtex.search-page-context/SearchPageContext";
import styles from "./src/styles/pagination.css";

const Pagination: React.FC = () => {
  const { searchQuery, maxItemsPerPage, page } = useSearchPage();

  const totalNumberProducts: number =
    path(["data", "productSearch", "recordsFiltered"], searchQuery) || 0;

  const totalPages: number = Math.ceil(totalNumberProducts / maxItemsPerPage);

  // Mostra até 5 páginas, centralizando a atual
  const getPageNumbers = (): number[] => {
    const max = 5;
    let start = Math.max(1, page - Math.floor(max / 2));
    let end = Math.min(totalPages, start + max - 1);
    if (end - start < max - 1) start = Math.max(1, end - max + 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumbers = getPageNumbers();

  // Monta filtros
  const queryData = {
    query: path(["variables", "query"], searchQuery) as string,
    map: path(["variables", "map"], searchQuery) as string,
    order: path(["variables", "orderBy"], searchQuery) as string,
    priceRange: (
      path(["variables", "selectedFacets"], searchQuery) as any[] | undefined
    )?.find((facet) => facet.key === "priceRange")?.value as string | undefined,
  };

  const map =
    queryData.map && !["c", "c,c", "c,c,c"].includes(queryData.map)
      ? `&map=${queryData.map}`
      : "";
  const order =
    queryData.order !== "OrderByReleaseDateDESC"
      ? `&order=${queryData.order}`
      : "";
  const priceRange = queryData.priceRange
    ? `&priceRange=${queryData.priceRange}`
    : "";

  const getPageHref = (thePage: number): string =>
    `/${queryData.query}?page=${thePage}${map}${order}${priceRange}`.trim();

  return (
    <div className={styles["pagination-container"]}>
      {/* Botão Anterior */}
      <a
        className={
          page === 1
            ? `${styles["pagination-btn"]} ${styles["disabled"]}`
            : styles["pagination-btn"]
        }
        href={page === 1 ? undefined : getPageHref(page - 1)}
        aria-disabled={page === 1}
        tabIndex={page === 1 ? -1 : 0}
      >
        &lt;
      </a>

      {/* Números das páginas */}
      {pageNumbers.map((p) =>
        p === page ? (
          <span
            key={p}
            className={`${styles["pagination-btn"]} ${styles["active"]}`}
          >
            {p}
          </span>
        ) : (
          <a key={p} className={styles["pagination-btn"]} href={getPageHref(p)}>
            {p}
          </a>
        )
      )}

      {/* Botão Próxima */}
      <a
        className={
          page === totalPages
            ? `${styles["pagination-btn"]} ${styles["disabled"]}`
            : styles["pagination-btn"]
        }
        href={page === totalPages ? undefined : getPageHref(page + 1)}
        aria-disabled={page === totalPages}
        tabIndex={page === totalPages ? -1 : 0}
      >
        &gt;
      </a>
    </div>
  );
};

export default Pagination;
