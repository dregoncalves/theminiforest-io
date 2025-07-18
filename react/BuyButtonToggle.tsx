// react/BuyButtonToggle.tsx
import React, { Fragment } from "react";
import type { StorefrontFunctionComponent } from "vtex.render-runtime";
import { useProduct } from "vtex.product-context";

interface BuyButtonToggleProps {
  children: React.ReactNode;
}

const BuyButtonToggle: StorefrontFunctionComponent<BuyButtonToggleProps> = ({
  children,
}: BuyButtonToggleProps) => {
  const productContextValue = useProduct();
  const product = productContextValue?.product;

  const SOON_COLLECTION_ID = "172";

  // Verifica se o produto pertence à coleção "Em Breve".
  // A propriedade 'productClusters' (ou 'productGroup', 'productCollections')
  // pode conter os IDs das coleções/grupos do produto.
  // Nem sempre 'productClusters' estará completo via useProduct,
  // dependendo de como o contexto do produto é populado.
  const isProductInSoonCollection = product?.productClusters?.some(
    (cluster: any) => String(cluster.id) === SOON_COLLECTION_ID
  );

  if (isProductInSoonCollection) {
    return (
      <button
        style={{
          backgroundColor: "#C76C6B",
          color: "#fff",
          letterSpacing: "1px",
          fontWeight: "500",
          border: "none",
          margin: "1rem 0",
          padding: "1rem",
          cursor: "not-allowed",
          fontSize: "1em",
          width: "100%",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        EM BREVE
      </button>
    );
  }

  return <Fragment>{children}</Fragment>;
};

BuyButtonToggle.schema = {
  title: 'Botão de Compra Alternável por Coleção "Em Breve"',
  description: 'Exibe "Em Breve" se o produto pertencer à coleção específica.',
  type: "object",
  properties: {},
};

export default BuyButtonToggle;
