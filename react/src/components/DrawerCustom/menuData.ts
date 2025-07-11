export interface MenuItemData {
  label: string;
  href?: string;
  submenu?: Array<{
    label: string;
    href: string;
  }>;
}

export const menuData: MenuItemData[] = [
  { label: "NOVIDADES", href: "/novidades" },
  {
    label: "POR IDADE",
    submenu: [
      { label: "VER TUDO", href: "/roupinhas?O=OrderByReleaseDateDESC" },
      {
        label: "RN",
        href: "/roupinhas/RN?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "1 - 3 MESES",
        href: "/roupinhas/1-3meses?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "3 - 6 MESES",
        href: "/roupinhas/3-6meses?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "6 - 9 MESES",
        href: "/roupinhas/6-9meses?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "9 - 12 MESES",
        href: "/roupinhas/9-12meses?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "12 - 18 MESES",
        href: "/roupinhas/12-18meses?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "18 - 24 MESES",
        href: "/roupinhas/18-24meses?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "2 - 3 ANOS",
        href: "/roupinhas/2-3anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "3 - 4 ANOS",
        href: "/roupinhas/3-4anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "4 - 5 ANOS",
        href: "/roupinhas/4-5anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "5 - 6 ANOS",
        href: "/roupinhas/5-6anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "6 - 7 ANOS",
        href: "/roupinhas/6-7anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "7 - 8 ANOS",
        href: "/roupinhas/7-8anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "8 - 9 ANOS",
        href: "/roupinhas/8-9anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
      {
        label: "9 - 10 ANOS",
        href: "/roupinhas/9-10anos?map=c,specificationFilter_91&O=OrderByReleaseDateDESC",
      },
    ],
  },
  {
    label: "POR TIPO DE PEÇA",
    submenu: [
      { label: "VER TUDO", href: "/roupinhas?O=OrderByReleaseDateDESC" },
      {
        label: "BLUSAS E CAMISETAS",
        href: "/roupinhas/blusas-e-camisetas?O=OrderByReleaseDateDESC",
      },
      { label: "BODIES", href: "/roupinhas/bodies?O=OrderByReleaseDateDESC" },
      {
        label: "CALÇAS E SHORTS",
        href: "/roupinhas/calcas-e-shorts?O=OrderByReleaseDateDESC",
      },
      {
        label: "MACACÕES",
        href: "/roupinhas/macacoes?O=OrderByReleaseDateDESC",
      },
      { label: "PIJAMAS", href: "/roupinhas/pijamas?O=OrderByReleaseDateDESC" },
      {
        label: "VESTIDOS E SAIAS",
        href: "/roupinhas/vestidos-e-saias?O=OrderByReleaseDateDESC",
      },
      { label: "PRAIA", href: "/roupinhas/praia?O=OrderByReleaseDateDESC" },
    ],
  },
  {
    label: "LISOS",
    submenu: [
      {
        label: "VER TUDO",
        href: "/roupinhas/Lisos?map=c,specificationFilter_107&O=OrderByReleaseDateDESC",
      },
      {
        label: "BLUSAS E CAMISETAS",
        href: "/roupinhas/Lisos/Blusas%20e%20Camisetas?O=OrderByReleaseDateDESC&map=c,specificationFilter_107,specificationFilter_110",
      },
      {
        label: "BODIES",
        href: "/roupinhas/Lisos/Bodies?O=OrderByReleaseDateDESC&map=c,specificationFilter_107,specificationFilter_110",
      },
      {
        label: "CALÇAS E SHORTS",
        href: "/roupinhas/Lisos/Calças e Shorts?O=OrderByReleaseDateDESC&map=c,specificationFilter_107,specificationFilter_110",
      },
      {
        label: "MACACÕES",
        href: "/roupinhas/Lisos/Macacões?O=OrderByReleaseDateDESC&map=c,specificationFilter_107,specificationFilter_110",
      },
      {
        label: "VESTIDOS E SAIAS",
        href: "/roupinhas/Lisos/Vestidos e Saias?O=OrderByReleaseDateDESC&map=c,specificationFilter_107,specificationFilter_110",
      },
    ],
  },
  {
    label: "ACESSÓRIOS",
    submenu: [
      { label: "VER TUDO", href: "/acessorios?O=OrderByReleaseDateDESC" },
      {
        label: "BABADORES",
        href: "/acessorios/babadores?O=OrderByReleaseDateDESC",
      },
      { label: "BOLSAS", href: "/acessorios/bolsas?O=OrderByReleaseDateDESC" },
      {
        label: "CALCINHAS",
        href: "/acessorios/calcinhas?O=OrderByReleaseDateDESC",
      },
      { label: "MANTAS", href: "/acessorios/mantas?O=OrderByReleaseDateDESC" },
      { label: "MEIAS", href: "/acessorios/meias?O=OrderByReleaseDateDESC" },
      {
        label: "PANINHOS DE BOCA",
        href: "/acessorios/paninhos-de-boca?O=OrderByReleaseDateDESC",
      },
      { label: "TATOO", href: "/acessorios/tatoo?O=OrderByReleaseDateDESC" },
      { label: "JOGOS", href: "/acessorios/jogos?O=OrderByReleaseDateDESC" },
    ],
  },
  {
    label: "CASA E DECOR",
    submenu: [
      { label: "VER TUDO", href: "/casa-e-decor?O=OrderByReleaseDateDESC" },
      {
        label: "ALIMENTAÇÃO",
        href: "/casa-e-decor/alimentacao?O=OrderByReleaseDateDESC",
      },
      { label: "CAMA", href: "/casa-e-decor/cama?O=OrderByReleaseDateDESC" },
      {
        label: "PAINEL DE PAREDE",
        href: "/casa-e-decor/painel-de-parede?O=OrderByReleaseDateDESC",
      },
      {
        label: "QUADROS",
        href: "/casa-e-decor/quadros?O=OrderByReleaseDateDESC",
      },
      {
        label: "TAPETES",
        href: "/casa-e-decor/tapetes?O=OrderByReleaseDateDESC",
      },
    ],
  },
  {
    label: "HIGIENE",
    submenu: [
      { label: "VER TUDO", href: "/higiene?O=OrderByReleaseDateDESC" },
      { label: "CREMES", href: "/higiene/cremes?O=OrderByReleaseDateDESC" },
      {
        label: "DENTINHOS",
        href: "/higiene/dentinhos?O=OrderByReleaseDateDESC",
      },
      { label: "LOÇÃO", href: "/higiene/locao?O=OrderByReleaseDateDESC" },
      {
        label: "SABONETES",
        href: "/higiene/sabonetes?O=OrderByReleaseDateDESC",
      },
      {
        label: "SHAMPOO E CONDICIONADOR",
        href: "/higiene/shampoo-e-condicionador?O=OrderByReleaseDateDESC",
      },
    ],
  },
  {
    label: "PARA AS MAMÃES",
    submenu: [
      { label: "VER TUDO", href: "/para-mamaes?O=OrderByReleaseDateDESC" },
      {
        label: "ACESSÓRIOS",
        href: "/para-mamaes/acessorios?O=OrderByReleaseDateDESC",
      },
      { label: "ROUPAS", href: "/para-mamaes/roupas?O=OrderByReleaseDateDESC" },
    ],
  },
  {
    label: "PARA PRESENTE",
    submenu: [
      { label: "VER TUDO", href: "/para-presentes?O=OrderByReleaseDateDESC" },
      {
        label: "CARTÕES",
        href: "/para-presentes/cartoes?O=OrderByReleaseDateDESC",
      },
      {
        label: "SACOLINHAS",
        href: "/para-presentes/sacolinhas?O=OrderByReleaseDateDESC",
      },
      { label: "KITS", href: "/para-presentes/kit?O=OrderByReleaseDateDESC" },
    ],
  },
  { label: "PRIMEIROS MESES", href: "/primeiros-meses" },
  { label: "ESTAMPAS", href: "/estampas" },
  { label: "SALE", href: "/sale" },
];
