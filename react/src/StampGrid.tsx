// react/src/StampGrid.tsx
import React from "react";
import DefaultStamps from "./utils/DefaultStamps";
import styles from "./styles/stamp-grid.css";
import StampCard from "./components/StampCard";
import { IStampSchema } from "../typings/IStampSchema";

interface StampGridProps {
  stamps?: IStampSchema[];
}

const StampGrid: React.FC<StampGridProps> = ({ stamps = DefaultStamps }) => {
  return (
    <div className={styles["grid-container"]}>
      {stamps.map((stamp, i) => (
        <StampCard stamp={stamp} key={i} />
      ))}
    </div>
  );
};

(StampGrid as any).schema = {
  title: "Estampas",
  type: "object",
  properties: {
    stamps: {
      title: "Cadastrar Estampas",
      type: "array",
      default: DefaultStamps,
      minItems: 0,
      items: {
        title: "Criar/Editar Estampa",
        type: "object",
        properties: {
          nome: {
            title: "Nome da Estampa",
            type: "string",
          },
          imagem: {
            title: "Imagem da Estampa",
            type: "string",
            widget: {
              "ui:widget": "image-uploader",
            },
          },
          alt: {
            title: "Texto alternativo",
            type: "string",
          },
          link: {
            title: "Link da coleção",
            type: "string",
          },
          esgotado: {
            title: "Esgotado",
            type: "boolean",
            default: false,
          },
        },
      },
    },
  },
};

export default StampGrid;
