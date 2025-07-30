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
    console.log("FilterCarousel: useEffect acionado.");

    // Changed obs to _obs
    const scrapeAndSetSizeData = (_obs: MutationObserver) => {
      const targetTitleSpan = Array.from(
        document.querySelectorAll(
          ".vtex-search-result-3-x-filterTitleSpan, .vtex-search-result-3-x-accordionFilterItemTitle"
        )
      ).find((el) => el.textContent?.trim() === "Tamanho");

      if (targetTitleSpan) {
        const nativeSizeFilterContainer =
          targetTitleSpan.closest('[class*="filter__container--"]') || // Desktop
          targetTitleSpan.closest(
            '.vtex-search-result-3-x-accordionFilterContainer--tamanho'
          ); // Mobile

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
            console.log("FilterCarousel: Dados de tamanho raspados:", scrapedSizes.map(s => s.name + (s.selected ? ' (selecionado)' : '')));
            setSizeData(scrapedSizes);
          } else {
            console.log("FilterCarousel: Nenhum dado de tamanho raspado ainda.");
          }
        } else {
          console.log("FilterCarousel: Contêiner de filtro de tamanho nativo não encontrado.");
        }
      } else {
        console.log("FilterCarousel: Span de título 'Tamanho' não encontrado. Pode ser que o filtro ainda não carregou ou as classes mudaram.");
      }
    };

    const observer = new MutationObserver((_mutations, obs) => {
      scrapeAndSetSizeData(obs); // Still pass obs from the observer
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Run once on initial mount to capture data if already in DOM
    scrapeAndSetSizeData(observer);

    return () => {
      console.log("FilterCarousel: Limpeza do useEffect, observer desconectado.");
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
    console.log("FilterCarousel: renderSizeCarousel chamado. sizeData.length:", sizeData.length);
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
                  console.log(`FilterCarousel: Clicado no tamanho: ${size.name}`);
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

    console.log("FilterCarousel: renderConditionalNavCarousel chamado.");
    console.log("FilterCarousel: Rota original (route.path):", route.path);
    console.log("FilterCarousel: Rota limpa para análise (cleanPath):", cleanPath);
    console.log("FilterCarousel: Partes da rota limpa:", pathParts);
    console.log("FilterCarousel: Slugs de subcategorias conhecidas:", knownCategorySlugs);

    const foundCategorySlug = pathParts.find((part: string) =>
      knownCategorySlugs.includes(part)
    );

    console.log("FilterCarousel: foundCategorySlug (subcategoria):", foundCategorySlug);

    if (foundCategorySlug) {
      const subcategoryData = DADOS_SUBCATEGORIAS[foundCategorySlug];
      console.log("FilterCarousel: Renderizando carrossel de SUBCATEGORIA para:", foundCategorySlug);
      return renderNavCarousel(subcategoryData);
    }

    if (pathParts[0] === "roupinhas") {
      console.log("FilterCarousel: Renderizando carrossel de CATEGORIAS (rota principal 'roupinhas').");
      return renderNavCarousel(DADOS_CATEGORIAS);
    }

    console.log("FilterCarousel: Nenhuma condição para carrossel de navegação atendida. Retornando null.");
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