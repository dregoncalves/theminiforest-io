// react/components/FilterCarousel/FilterCarousel.tsx
import React, { useMemo } from "react";
import type { FC } from "react";
import { useRuntime, Link } from "vtex.render-runtime";
import { SliderLayout } from "vtex.slider-layout";
import { useCssHandles } from "vtex.css-handles";
import {
  mainCategoryData,
  subCategoryData,
  sizeData,
} from "./src/utils/dataMaps";
import styles from "./src/styles/filter-carousel.css";

const CSS_HANDLES = [
  "container",
  "carouselWrapper",
  "carouselWrapper--category",
  "carouselWrapper--size",
  "carouselLink",
  "carouselLink--size",
  "carouselLink--selected",
  "carouselImage",
  "carouselTitle",
] as const;

interface CarouselItem {
  id: string;
  name: string;
  link: string;
  image?: string;
  slug: string;
}

const Carousel: FC<{
  items: CarouselItem[];
  type: "category" | "size";
  activeSlug?: string;
}> = ({ items, type, activeSlug }) => {
  const handles = useCssHandles(CSS_HANDLES);

  if (!items || items.length === 0) return null;

  const isSizeFilter = type === "size";
  const wrapperClass = isSizeFilter
    ? "carouselWrapper--size"
    : "carouselWrapper--category";

  return (
    <div
      className={`${handles.carouselWrapper} ${handles[wrapperClass]} ${styles.carouselWrapper}`}
    >
      <SliderLayout
        itemsPerPage={{ desktop: 7, tablet: 4, phone: 3 }}
        showNavigationArrows="desktopOnly"
        showPaginationDots="never"
        infinite={false}
      >
        {items.map((item) => {
          const isSelected = activeSlug && item.slug === activeSlug;
          const linkClasses = [
            handles.carouselLink,
            styles.carouselLink,
            isSizeFilter
              ? `${handles["carouselLink--size"]} ${styles["carouselLink--size"]}`
              : "",
            isSelected
              ? `${handles["carouselLink--selected"]} ${styles["carouselLink--selected"]}`
              : "",
            "no-underline c-on-base",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <Link to={item.link} key={item.id} className={linkClasses}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className={`${handles.carouselImage} ${styles.carouselImage}`}
                />
              )}
              <span
                className={`${handles.carouselTitle} ${styles.carouselTitle}`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </SliderLayout>
    </div>
  );
};

const FilterCarouselContainer: FC = () => {
  const { route } = useRuntime();
  const handles = useCssHandles(CSS_HANDLES);

  if (!route) {
    return null;
  }

  const pathSegments = useMemo(
    () => route.path?.replace(/^\/|\/$/g, "").split("/") ?? [],
    [route.path]
  );
  const mapSegments = useMemo(
    () => route.query?.map?.split(",") ?? [],
    [route.query]
  );

  const activeFilterSlug =
    pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : "";

  const buildFilterUrl = (newSlug: string, newFacetKey: string) => {
    const currentQuery = route.query ?? {};
    const currentPath = route.path ?? "";

    const basePath = currentPath.endsWith("/")
      ? currentPath.slice(0, -1)
      : currentPath;
    const newPath =
      basePath === "" || basePath === `/${pathSegments[0]}`
        ? `/${pathSegments[0]}/${newSlug}`
        : `${basePath}/${newSlug}`;

    // --- CORREÇÃO AQUI ---
    // Determina o 'map' base correto. Se estiver na página de departamento,
    // o map para um filtro de especificação deve começar com 'category-1'.
    let baseMap = currentQuery.map;
    if (!baseMap || baseMap === "c") {
      baseMap = "category-1";
    }
    // --- FIM DA CORREÇÃO ---

    const newMap = `${baseMap},${newFacetKey}`;
    const initialMap = `initialMap=${currentQuery.initialMap || "c"}`;
    const initialQuery = `initialQuery=${
      currentQuery.initialQuery || pathSegments[0]
    }`;

    return `${newPath}?${initialMap}&${initialQuery}&map=${newMap}`;
  };

  const isDepartmentPage = mapSegments.length <= 1;
  const isCategoryPage = mapSegments.includes("tipo-de-peca");

  let categoryOrSubCategoryItems: CarouselItem[] = [];

  if (pathSegments.length > 0) {
    if (isDepartmentPage && !isCategoryPage) {
      categoryOrSubCategoryItems = Object.entries(mainCategoryData).map(
        ([name, data]) => ({
          name,
          id: name,
          slug: data.slug,
          image: data.image,
          link: `/${pathSegments[0]}/${data.slug}?map=c,tipo-de-peca`,
        })
      );
    } else if (isCategoryPage) {
      const categoryTypeIndex = mapSegments.findIndex(
        (mapSeg: string) => mapSeg === "tipo-de-peca"
      );
      const parentCategorySlug =
        categoryTypeIndex !== -1 ? pathSegments[categoryTypeIndex] : undefined;

      if (parentCategorySlug && subCategoryData[parentCategorySlug]) {
        categoryOrSubCategoryItems = Object.entries(
          subCategoryData[parentCategorySlug]
        ).map(([name, data]) => ({
          name,
          id: name,
          slug: data.slug,
          image: data.image,
          link: buildFilterUrl(data.slug, "cor"),
        }));
      }
    }
  }

  const sizeItems: CarouselItem[] = sizeData.map((size) => ({
    id: size.name,
    name: size.name,
    slug: size.slug,
    link: buildFilterUrl(size.slug, "tamanho"),
  }));

  if (categoryOrSubCategoryItems.length === 0 && sizeItems.length === 0) {
    return null;
  }

  return (
    <div className={`${handles.container} ${styles.container}`}>
      <Carousel
        items={categoryOrSubCategoryItems}
        type="category"
        activeSlug={activeFilterSlug}
      />
      <Carousel items={sizeItems} type="size" activeSlug={activeFilterSlug} />
    </div>
  );
};

export default FilterCarouselContainer;
