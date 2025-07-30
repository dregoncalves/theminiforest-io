import React, { useState, useEffect } from "react";
import { SliderLayout } from "vtex.slider-layout";
import { useRuntime } from "vtex.render-runtime";
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
  const { route } = useRuntime();
  const [sizeData, setSizeData] = useState<ScrapedSize[]>([]);

  useEffect(() => {
    const scrapeAndSetSizeData = (_obs: MutationObserver) => {
      const targetTitleSpan = Array.from(
        document.querySelectorAll(
          ".vtex-search-result-3-x-filterTitleSpan, .vtex-search-result-3-x-accordionFilterItemTitle"
        )
      ).find((el) => el.textContent?.trim() === "Tamanho");

      if (targetTitleSpan) {
        const nativeSizeFilterContainer =
          targetTitleSpan.closest('[class*="filter__container--"]') ||
          targetTitleSpan.closest(
            '.vtex-search-result-3-x-accordionFilterContainer--tamanho'
          );

        if (nativeSizeFilterContainer) {
          const scrapedSizes: ScrapedSize[] = [];
          
          const checkboxes = nativeSizeFilterContainer.querySelectorAll(
            'input[type="checkbox"]'
          );

          checkboxes.forEach((element: Element) => {
            const checkbox = element as HTMLInputElement;
            
            const label =
              (checkbox.labels && checkbox.labels[0]) ||
              (checkbox.nextElementSibling as HTMLLabelElement);

            if (label && label.tagName === 'LABEL') {
              scrapedSizes.push({
                name: label.innerText,
                selected: checkbox.checked,
                element: checkbox,
              });
            }
          });

          if (scrapedSizes.length > 0) {
            setSizeData(scrapedSizes);
          }
        }
      }
    };

    const observer = new MutationObserver((_mutations, obs) => {
      scrapeAndSetSizeData(obs);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    scrapeAndSetSizeData(observer);

    return () => {
      observer.disconnect();
    };
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

  const renderSizeCarousel = () => {
    return sizeData.length > 0 && (
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
                onClick={() => {
                  size.element?.click();
                }}
              >
                {size.name}
              </div>
            );
          })}
        </SliderLayout>
      </div>
    );
  };

  const renderConditionalNavCarousel = () => {
    let cleanPath = route.path.split('?')[0]; 
    
    const vtexPathPrefix1 = '/vtex.store@2.x/category/search/';
    const vtexPathPrefix2 = '/_v/segment/routing/vtex.store@2.x/category/search/';

    if (cleanPath.includes(vtexPathPrefix2)) {
      cleanPath = cleanPath.substring(cleanPath.indexOf(vtexPathPrefix2) + vtexPathPrefix2.length);
    } else if (cleanPath.includes(vtexPathPrefix1)) {
      cleanPath = cleanPath.substring(cleanPath.indexOf(vtexPathPrefix1) + vtexPathPrefix1.length);
    }

    const pathParts = cleanPath.split("/").filter(Boolean);
    const knownCategorySlugs = Object.keys(DADOS_SUBCATEGORIAS);

    const foundCategorySlug = pathParts.find((part: string) =>
      knownCategorySlugs.includes(part)
    );

    if (foundCategorySlug) {
      const subcategoryData = DADOS_SUBCATEGORIAS[foundCategorySlug];
      return renderNavCarousel(subcategoryData);
    }

    if (pathParts[0] === "roupinhas") {
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