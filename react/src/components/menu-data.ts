export interface MenuItemData {
  label: string;
  href?: string;
  submenu?: MenuItemData[];
}

export const menuData: MenuItemData[] = [
  { label: "NOVIDADES", href: "#" },
  {
    label: "POR IDADE",
    submenu: [
      { label: "VER TUDO", href: "#/idade" },
      { label: "RN", href: "#/idade/rn" },
      { label: "1 - 3 MESES", href: "#/idade/1-3-meses" },
      { label: "3 - 6 MESES", href: "#/idade/3-6-meses" },
      { label: "6 - 9 MESES", href: "#/idade/6-9-meses" },
      { label: "9 - 12 MESES", href: "#/idade/9-12-meses" },
      { label: "12 - 18 MESES", href: "#/idade/12-18-meses" },
      { label: "18 - 24 MESES", href: "#/idade/18-24-meses" },
      { label: "2 - 3 ANOS", href: "#/idade/2-3-anos" },
    ],
  },
  {
    label: "POR TIPO DE PEÇA",
    submenu: [
      { label: "VER TUDO", href: "#/peca" },
      { label: "BLUSAS", href: "#/peca/blusas" },
      { label: "CALÇAS", href: "#/peca/calcas" },
      { label: "VESTIDOS", href: "#/peca/vestidos" },
    ],
  },
  { label: "LISOS", href: "#/lisos" },
  { label: "ACESSÓRIOS", href: "#/acessorios" },
  { label: "SALE", href: "#/sale" },
];
