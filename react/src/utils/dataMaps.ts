export const mainCategoryData: Record<string, { image: string; link: string }> =
  {
    Pijamas: {
      image: "https://theminiforest.vteximg.com.br/arquivos/pijamas.png",
      link: "/roupinhas/pijamas?O=OrderByReleaseDateDESC",
    },
    Bodies: {
      image: "https://theminiforest.vteximg.com.br/arquivos/bodies.png",
      link: "/roupinhas/bodies?O=OrderByReleaseDateDESC",
    },
    "Calças e Shorts": {
      image: "https://theminiforest.vteximg.com.br/arquivos/calcas.png",
      link: "/roupinhas/calcas-e-shorts?O=OrderByReleaseDateDESC",
    },
    Macacões: {
      image: "https://theminiforest.vteximg.com.br/arquivos/macacoes.png",
      link: "/roupinhas/macacoes?O=OrderByReleaseDateDESC",
    },
    "Vestidos e Saias": {
      image: "https://theminiforest.vteximg.com.br/arquivos/vestidos.png",
      link: "/roupinhas/vestidos-e-saias?O=OrderByReleaseDateDESC",
    },
    "Blusas e Camisetas": {
      image: "https://theminiforest.vteximg.com.br/arquivos/camisetas.png",
      link: "/roupinhas/blusas-e-camisetas?O=OrderByReleaseDateDESC",
    },
    Conjuntos: {
      image:
        "https://theminiforest.vteximg.com.br/arquivos/faltaimagemSlider.png",
      link: "/roupinhas/conjuntos?O=OrderByReleaseDateDESC",
    },
  };

type SubCategoryInfo = {
  link: string;
  image: string;
};

export type SubCategoryMap = {
  "Estampado Colorido": SubCategoryInfo;
  Liso: SubCategoryInfo;
};

export const subCategoryData: Record<string, SubCategoryMap> = {
  pijamas: {
    "Estampado Colorido": {
      link: "roupinhas/pijamas/pijamas-estampados",
      image:
        "https://theminiforest.vteximg.com.br/arquivos/pijamas-estampados.png",
    },
    Liso: {
      link: "roupinhas/pijamas/pijamas-lisos",
      image: "https://theminiforest.vteximg.com.br/arquivos/pijamas-lisos.png",
    },
  },
  bodies: {
    "Estampado Colorido": {
      link: "roupinhas/bodies/bodies-estampados",
      image:
        "https://theminiforest.vteximg.com.br/arquivos/bodies-estampados.png",
    },
    Liso: {
      link: "roupinhas/bodies/bodies-lisos",
      image: "https://theminiforest.vteximg.com.br/arquivos/bodies-lisos.png",
    },
  },
  "calcas-e-shorts": {
    "Estampado Colorido": {
      link: "roupinhas/calcas-e-shorts/calcas-e-shorts-estampados",
      image:
        "https://theminiforest.vteximg.com.br/arquivos/calcas-estampadas.png",
    },
    Liso: {
      link: "roupinhas/calcas-e-shorts/calcas-e-shorts-lisos",
      image: "https://theminiforest.vteximg.com.br/arquivos/calcas-lisas.png",
    },
  },
  macacoes: {
    "Estampado Colorido": {
      link: "roupinhas/macacoes/macacoes-estampados",
      image:
        "https://theminiforest.vteximg.com.br/arquivos/macacoes-estampados.png",
    },
    Liso: {
      link: "roupinhas/macacoes/macacoes-lisos",
      image: "https://theminiforest.vteximg.com.br/arquivos/macacoes-lisos.png",
    },
  },
  "vestidos-e-saias": {
    "Estampado Colorido": {
      link: "roupinhas/vestidos-e-saias/vestidos-e-saias-estampados",
      image:
        "https://theminiforest.vteximg.com.br/arquivos/vestidos-stampados.png",
    },
    Liso: {
      link: "roupinhas/vestidos-e-saias/vestidos-e-saias-lisos",
      image: "https://theminiforest.vteximg.com.br/arquivos/vestidos-lisos.png",
    },
  },
  "blusas-e-camisetas": {
    "Estampado Colorido": {
      link: "roupinhas/blusas-e-camisetas/blusas-e-camisetas-estampados",
      image:
        "https://theminiforest.vteximg.com.br/arquivos/camisetas-estampadas.png",
    },
    Liso: {
      link: "roupinhas/blusas-e-camisetas/blusas-e-camisetas-lisos",
      image: "https://theminiforest.vteximg.com.br/arquivos/blusas-lisos.png",
    },
  },
  conjuntos: {
    "Estampado Colorido": {
      link: "roupinhas/conjuntos/conjuntos-estampados",
      image:
        "https://theminiforest.vteximg.com.br/arquivos/faltaimagemSlider.png",
    },
    Liso: {
      link: "roupinhas/conjuntos/conjuntos-lisos",
      image:
        "https://theminiforest.vteximg.com.br/arquivos/faltaimagemSlider.png",
    },
  },
};

export const sizeData = [
  { name: "RN", link: "?filter.Tamanho=RN" },
  { name: "P", link: "?filter.Tamanho=P" },
  { name: "M", link: "?filter.Tamanho=M" },
  { name: "G", link: "?filter.Tamanho=G" },
  { name: "GG", link: "?filter.Tamanho=GG" },
  { name: "1", link: "?filter.Tamanho=1" },
  { name: "2", link: "?filter.Tamanho=2" },
  { name: "3", link: "?filter.Tamanho=3" },
];
