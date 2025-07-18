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
  "carouselImage",
  "carouselTitle",
] as const;

interface CarouselItem {
  id: string;
  name: string;
  link: string;
  image?: string;
}

const Carousel: FC<{ items: CarouselItem[]; type: "category" | "size" }> = ({
  items,
  type,
}) => {
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
        {items.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className={`${handles.carouselLink} ${styles.carouselLink} ${
              isSizeFilter
                ? `${handles["carouselLink--size"]} ${styles["carouselLink--size"]}`
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
        ))}
      </SliderLayout>
    </div>
  );
};

const FilterCarouselContainer: FC = () => {
  const { route } = useRuntime();
  const handles = useCssHandles(CSS_HANDLES);

  const isDepartmentPage = route.params.department && !route.params.category;
  const isCategoryPage = !!route.params.category;
  const isSearchPage = isDepartmentPage || isCategoryPage;

  let categoryOrSubCategoryItems: CarouselItem[] = [];
  if (isDepartmentPage) {
    categoryOrSubCategoryItems = Object.entries(mainCategoryData).map(
      ([key, value]) => ({
        name: key,
        id: key,
        link: value.link,
        image: value.image,
      })
    );
  } else if (isCategoryPage) {
    const slug = route.params.category as string;
    const subCategoryMap = subCategoryData[slug];
    if (subCategoryMap) {
      categoryOrSubCategoryItems = Object.entries(subCategoryMap).map(
        ([key, value]) => ({
          name: key,
          id: key,
          link: `/${value.link}`,
          image: value.image,
        })
      );
    }
  }

  let sizeItems: CarouselItem[] = [];
  if (isSearchPage) {
    sizeItems = sizeData.map((size) => ({
      id: size.name,
      name: size.name,
      link: size.link,
    }));
  }

  if (categoryOrSubCategoryItems.length === 0 && sizeItems.length === 0) {
    return null;
  }

  return (
    <div className={`${handles.container} ${styles.container}`}>
      <Carousel items={categoryOrSubCategoryItems} type="category" />
      <Carousel items={sizeItems} type="size" />
    </div>
  );
};

export default FilterCarouselContainer;
