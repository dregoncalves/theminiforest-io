// react/BuyButtonToggle.tsx
import React from "react";
import type { StorefrontFunctionComponent } from "vtex.render-runtime";

interface BuyButtonToggleProps {
  showSoonButton: boolean;
  children: React.ReactNode;
}

const BuyButtonToggle: StorefrontFunctionComponent<BuyButtonToggleProps> = ({
  showSoonButton,
  children,
}: BuyButtonToggleProps) => {
  if (showSoonButton) {
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

  return <>{children}</>;
};

BuyButtonToggle.schema = {
  title: "Botão de Compra Alternável",
  description: 'Alterna entre botão de compra e "Em breve".',
  type: "object",
  properties: {
    showSoonButton: {
      title: "Em Breve",
      type: "boolean",
      default: false,
      is: "toggle",
    },
  },
};

export default BuyButtonToggle;
