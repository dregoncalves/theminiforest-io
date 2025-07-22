import React, { useState, useEffect } from "react";
import { SliderLayout } from "vtex.slider-layout";
import styles from "./src/styles/filter-carousel.css";

interface CarouselDataItem {
  imagem: string;
  link: string;
}
interface CarouselData {
  [key: string]: CarouselDataItem;
}
interface SubcategoryData {
  [key: string]: CarouselData;
}
interface ScrapedSize {
  name: string;
  selected: boolean;
  element: HTMLInputElement | null;
}

const DADOS_CATEGORIAS: CarouselData = {
  Pijamas: {
    imagem: "https://theminiforest.vteximg.com.br/arquivos/pijamas.png",
    link: "/roupinhas/pijamas?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca",
  },
  Bodies: {
    imagem: "https://theminiforest.vteximg.com.br/arquivos/bodies.png",
    link: "/roupinhas/bodies?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca",
  },
  "Calças e Shorts": {
    imagem: "https://theminiforest.vteximg.com.br/arquivos/calcas.png",
    link: "/roupinhas/calcas-e-shorts?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca",
  },
  Macacões: {
    imagem: "https://theminiforest.vteximg.com.br/arquivos/macacoes.png",
    link: "/roupinhas/macacoes?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca",
  },
  "Vestidos e Saias": {
    imagem: "https://theminiforest.vteximg.com.br/arquivos/vestidos.png",
    link: "/roupinhas/vestidos-e-saias?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca",
  },
  "Blusas e Camisetas": {
    imagem: "https://theminiforest.vteximg.com.br/arquivos/camisetas.png",
    link: "/roupinhas/blusas-e-camisetas?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca",
  },
  Conjuntos: {
    imagem:
      "https://theminiforest.vteximg.com.br/arquivos/faltaimagemSlider.png",
    link: "/roupinhas/conjuntos?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca",
  },
};

const DADOS_SUBCATEGORIAS: SubcategoryData = {
  pijamas: {
    "Estampado Colorido": {
      imagem:
        "https://theminiforest.vteximg.com.br/arquivos/pijamas-estampados.png",
      link: "/roupinhas/pijamas/estampado-colorido?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca,cor",
    },
    Liso: {
      imagem: "https://theminiforest.vteximg.com.br/arquivos/pijamas-lisos.png",
      link: "/roupinhas/pijamas/liso?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca,cor",
    },
  },
  bodies: {
    "Estampado Colorido": {
      imagem:
        "https://theminiforest.vteximg.com.br/arquivos/bodies-estampados.png",
      link: "/roupinhas/bodies/estampado-colorido?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca,cor",
    },
    Liso: {
      imagem: "https://theminiforest.vteximg.com.br/arquivos/bodies-lisos.png",
      link: "/roupinhas/bodies/liso?initialMap=c&initialQuery=roupinhas&map=category-1,tipo-de-peca,cor",
    },
  },
};

const FilterCarousel = () => {
  const [sizeData, setSizeData] = useState<ScrapedSize[]>([]);

  useEffect(() => {
    const observer = new MutationObserver((_mutations, obs) => {
      const targetTitle = Array.from(
        document.querySelectorAll(".vtex-search-result-3-x-filterTitleSpan")
      ).find((el) => el.textContent?.trim() === "Tamanho");

      if (targetTitle) {
        const nativeSizeFilter = targetTitle.closest(
          '[class*="filter__container--"]'
        );
        if (nativeSizeFilter) {
          const scrapedSizes: ScrapedSize[] = [];
          const filterItems = nativeSizeFilter.querySelectorAll(
            ".vtex-search-result-3-x-filterItem"
          );

          filterItems.forEach((item: Element) => {
            const label = item.querySelector("label");
            const checkbox = item.querySelector(
              'input[type="checkbox"]'
            ) as HTMLInputElement;
            if (label && checkbox) {
              scrapedSizes.push({
                name: label.innerText,
                selected: checkbox.checked,
                element: checkbox,
              });
            }
          });

          if (scrapedSizes.length > 0) {
            setSizeData(scrapedSizes);
            obs.disconnect();
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const renderNavCarousel = (data: CarouselData) => (
    <div className="mv5">
      <SliderLayout
        itemsPerPage={{ desktop: 7, tablet: 4, phone: 3 }}
        showNavigationArrows="desktopOnly"
        showPaginationDots="never"
      >
        {Object.keys(data).map((name) => {
          const { imagem, link } = data[name];
          return (
            <a key={name} href={link} className={`${styles.navItem} link`}>
              <img className={styles.navImage} src={imagem} alt={name} />
              <span className={styles.navName}>{name}</span>
            </a>
          );
        })}
      </SliderLayout>
    </div>
  );

  const renderSizeCarousel = () =>
    sizeData.length > 0 && (
      <div className="mv5">
        <SliderLayout
          itemsPerPage={{ desktop: 10, tablet: 5, phone: 4 }}
          showNavigationArrows="always"
          showPaginationDots="never"
        >
          {sizeData.map((size) => {
            const itemClasses = `${styles.sizeItem} ${
              size.selected ? styles.sizeItemSelected : ""
            }`;
            return (
              <div
                key={size.name}
                className={itemClasses}
                onClick={() => size.element?.click()}
              >
                {size.name}
              </div>
            );
          })}
        </SliderLayout>
      </div>
    );

  const renderConditionalNavCarousel = () => {
    if (typeof window === "undefined") {
      return null;
    }

    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const knownCategorySlugs = Object.keys(DADOS_SUBCATEGORIAS);
    const foundCategorySlug = pathParts.find((part) =>
      knownCategorySlugs.includes(part)
    );

    if (foundCategorySlug) {
      const subcategoryData = DADOS_SUBCATEGORIAS[foundCategorySlug];
      return renderNavCarousel(subcategoryData);
    }

    if (pathParts.length === 1 && pathParts[0] === "roupinhas") {
      return renderNavCarousel(DADOS_CATEGORIAS);
    }

    return null;
  };

  return (
    <div className={styles.container}>
      {renderConditionalNavCarousel()}
      {renderSizeCarousel()}
    </div>
  );
};

export default FilterCarousel;
