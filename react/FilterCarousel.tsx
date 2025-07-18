import React from "react";
import type { FC } from "react";
import { useRuntime } from "vtex.render-runtime";
import { SliderLayout } from "vtex.slider-layout";
import { Link } from "vtex.render-runtime";
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
  slug?: string;
}

const Carousel: FC<{
  items: CarouselItem[];
  type: "category" | "size";
  activeSlug?: string;
}> = ({ items, type, activeSlug }) => {
  const handles = useCssHandles(CSS_HANDLES);

  if (!items || items.length === 0) {
    return null;
  }

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

          return (
            <Link
              to={item.link}
              key={item.id}
              className={`${handles.carouselLink} ${styles.carouselLink} ${
                isSizeFilter
                  ? `${handles["carouselLink--size"]} ${styles["carouselLink--size"]}`
                  : ""
              } ${
                isSelected
                  ? `${handles["carouselLink--selected"]} ${styles["carouselLink--selected"]}`
                  : ""
              } no-underline c-on-base`}
            >
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

  const pathSegments = route.canonicalPath?.replace(/^\//, "").split("/") ?? [];
  const pageLevel = pathSegments.length; // 1 para departamento, 2 para categoria, etc.

  // O slug ativo é sempre o último segmento do caminho
  const activeFilterSlug = pathSegments[pageLevel - 1];

  const isDepartmentPage = pageLevel === 1;
  const isCategoryOrFilterPage = pageLevel >= 2;

  let categoryOrSubCategoryItems: CarouselItem[] = [];
  if (isDepartmentPage) {
    categoryOrSubCategoryItems = Object.entries(mainCategoryData).map(
      ([key, value]) => ({
        name: key,
        id: key,
        link: value.link,
        image: value.image,
        slug: value.link.split("/")[2]?.split("?")[0],
      })
    );
  } else if (isCategoryOrFilterPage) {
    // A categoria pai é o primeiro segmento para subcategorias (ex: 'pijamas' em /roupinhas/pijamas)
    const parentCategorySlug = pathSegments[1];
    const subCategoryMap = subCategoryData[parentCategorySlug];
    if (subCategoryMap) {
      categoryOrSubCategoryItems = Object.entries(subCategoryMap).map(
        ([key, value]) => ({
          name: key,
          id: key,
          link: `/${value.link}`,
          image: value.image,
          slug: value.link.split("/").pop(), // Pega o último segmento do link como slug
        })
      );
    }
  }

  let sizeItems: CarouselItem[] = [];
  if (isDepartmentPage || isCategoryOrFilterPage) {
    sizeItems = sizeData.map((size) => ({
      id: size.name,
      name: size.name,
      link: size.link,
      slug: size.slug,
    }));
  }

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
