import React, { useState, useEffect } from "react";
import { SliderLayout } from "vtex.slider-layout";
import { useCssHandles } from "vtex.css-handles";

// --- Tipos para os dados ---
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

// ===================================================================
//  ÁREA DE CONFIGURAÇÃO MANUAL
// ===================================================================
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
// ===================================================================

const CSS_HANDLES = [
  "container",
  "navItem",
  "navImage",
  "navName",
  "sizeItem",
  "sizeItemSelected",
  "sizeTitle",
];

const FilterCarousel = () => {
  const handles = useCssHandles(CSS_HANDLES);
  const [sizeData, setSizeData] = useState<ScrapedSize[]>([]);
  // Não precisamos mais do pageContext, a lógica agora lê a URL diretamente na renderização

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
    <SliderLayout
      itemsPerPage={{ desktop: 7, tablet: 4, phone: 3 }}
      showNavigationArrows="desktopOnly"
      showPaginationDots="never"
    >
      {Object.keys(data).map((name) => {
        const { imagem, link } = data[name];
        return (
          <a key={name} href={link} className={`${handles.navItem} link`}>
            <img className={`${handles.navImage}`} src={imagem} alt={name} />
            <span className={`${handles.navName}`}>{name}</span>
          </a>
        );
      })}
    </SliderLayout>
  );

  const renderSizeCarousel = () =>
    sizeData.length > 0 && (
      <div className="mv5">
        <h5 className={`${handles.sizeTitle} t-heading-5 mb3`}>Tamanhos</h5>
        <SliderLayout
          itemsPerPage={{ desktop: 10, tablet: 5, phone: 4 }}
          showNavigationArrows="desktopOnly"
          showPaginationDots="never"
        >
          {sizeData.map((size) => {
            const itemClasses = `${handles.sizeItem} ${
              size.selected ? handles.sizeItemSelected : ""
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

    // 3. Se não encontrou, mas estamos em uma página de departamento (ex: '/roupinhas')
    if (pathParts.length === 1 && pathParts[0] === "roupinhas") {
      return renderNavCarousel(DADOS_CATEGORIAS);
    }

    // 4. Em qualquer outro caso, não renderiza o carrossel de navegação
    return null;
  };

  return (
    <div className={`${handles.container} mv5`}>
      {renderConditionalNavCarousel()}
      {renderSizeCarousel()}
    </div>
  );
};

export default FilterCarousel;
