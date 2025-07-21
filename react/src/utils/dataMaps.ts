// react/components/FilterCarousel/src/utils/dataMaps.ts

// --- CATEGORIAS PRINCIPAIS (TIPO DE PEÇA) ---
export const mainCategoryData: Record<string, { image: string; slug: string }> =
  {
    Pijamas: {
      image: "https://theminiforest.vteximg.com.br/arquivos/pijamas.png",
      slug: "pijamas",
    },
    Bodies: {
      image: "https://theminiforest.vteximg.com.br/arquivos/bodies.png",
      slug: "bodies",
    },
    "Calças e Shorts": {
      image: "https://theminiforest.vteximg.com.br/arquivos/calcas.png",
      slug: "calcas-e-shorts",
    },
    Macacões: {
      image: "https://theminiforest.vteximg.com.br/arquivos/macacoes.png",
      slug: "macacoes",
    },
    "Vestidos e Saias": {
      image: "https://theminiforest.vteximg.com.br/arquivos/vestidos.png",
      slug: "vestidos-e-saias",
    },
    "Blusas e Camisetas": {
      image: "https://theminiforest.vteximg.com.br/arquivos/camisetas.png",
      slug: "blusas-e-camisetas",
    },
    Conjuntos: {
      image:
        "https://theminiforest.vteximg.com.br/arquivos/faltaimagemSlider.png",
      slug: "conjuntos",
    },
  };

// --- SUBCATEGORIAS (COR) ---
type SubCategoryInfo = {
  image: string;
  slug: string;
};

export type SubCategoryMap = {
  "Estampado Colorido": SubCategoryInfo;
  Liso: SubCategoryInfo;
};

export const subCategoryData: Record<string, SubCategoryMap> = {
  pijamas: {
    "Estampado Colorido": {
      image:
        "https://theminiforest.vteximg.com.br/arquivos/pijamas-estampados.png",
      slug: "pijamas-estampados",
    },
    Liso: {
      image: "https://theminiforest.vteximg.com.br/arquivos/pijamas-lisos.png",
      slug: "pijamas-lisos",
    },
  },
  bodies: {
    "Estampado Colorido": {
      image:
        "https://theminiforest.vteximg.com.br/arquivos/bodies-estampados.png",
      slug: "bodies-estampados",
    },
    Liso: {
      image: "https://theminiforest.vteximg.com.br/arquivos/bodies-lisos.png",
      slug: "bodies-lisos",
    },
  },
  "calcas-e-shorts": {
    "Estampado Colorido": {
      image:
        "https://theminiforest.vteximg.com.br/arquivos/calcas-estampadas.png",
      slug: "calcas-e-shorts-estampados",
    },
    Liso: {
      image: "https://theminiforest.vteximg.com.br/arquivos/calcas-lisas.png",
      slug: "calcas-e-shorts-lisos",
    },
  },
  macacoes: {
    "Estampado Colorido": {
      image:
        "https://theminiforest.vteximg.com.br/arquivos/macacoes-estampados.png",
      slug: "macacoes-estampados",
    },
    Liso: {
      image: "https://theminiforest.vteximg.com.br/arquivos/macacoes-lisos.png",
      slug: "macacoes-lisos",
    },
  },
  "vestidos-e-saias": {
    "Estampado Colorido": {
      image:
        "https://theminiforest.vteximg.com.br/arquivos/vestidos-stampados.png",
      slug: "vestidos-e-saias-estampados",
    },
    Liso: {
      image: "https://theminiforest.vteximg.com.br/arquivos/vestidos-lisos.png",
      slug: "vestidos-e-saias-lisos",
    },
  },
  "blusas-e-camisetas": {
    "Estampado Colorido": {
      image:
        "https://theminiforest.vteximg.com.br/arquivos/camisetas-estampadas.png",
      slug: "blusas-e-camisetas-estampados",
    },
    Liso: {
      image: "https://theminiforest.vteximg.com.br/arquivos/blusas-lisos.png",
      slug: "blusas-e-camisetas-lisos",
    },
  },
  conjuntos: {
    "Estampado Colorido": {
      image:
        "https://theminiforest.vteximg.com.br/arquivos/faltaimagemSlider.png",
      slug: "conjuntos-estampados",
    },
    Liso: {
      image:
        "https://theminiforest.vteximg.com.br/arquivos/faltaimagemSlider.png",
      slug: "conjuntos-lisos",
    },
  },
};

// --- FILTROS DE TAMANHO ---
const sizeNames = [
  "RN",
  "1-3 meses",
  "3-6 meses",
  "6-9 meses",
  "9-12 meses",
  "12-18 meses",
  "18-24 meses",
  "2-3 anos",
  "3-4 anos",
  "4-5 anos",
  "5-6 anos",
  "6-7 anos",
  "7-8 anos",
  "8-9 anos",
  "9-10 anos",
];

export const sizeData = sizeNames.map((name) => ({
  name: name,
  // Gera um slug amigável para URL, ex: "1-3-meses"
  slug: name.replace(/\s+/g, "").toLowerCase(),
}));
