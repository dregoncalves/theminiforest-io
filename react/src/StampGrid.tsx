import React, { useState } from "react";
import StampsDefault from "./utils/StampsDefault";
import styles from "./styles/stamp-grid.css";
import StampCard from "./components/StampCard";
import { IStampSchema } from "../typings/IStampSchema";

interface StampGridProps {
  stamps?: IStampSchema[];
}

const PAGE_SIZE = 24;

const StampGrid: React.FC<StampGridProps> = ({ stamps }) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);

  const customStamps = stamps && stamps.length > 0 ? [...stamps].reverse() : [];
  const stampsToShow = customStamps.length
    ? [
        ...customStamps,
        ...StampsDefault.filter(
          (d) => !customStamps.some((s) => s.nome === d.nome)
        ),
      ]
    : StampsDefault;

  const visibleStamps = stampsToShow.slice(0, visibleCount);

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + PAGE_SIZE);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className={styles["grid-container"]}>
        {visibleStamps.map((stamp, i) => (
          <StampCard stamp={stamp} key={i} />
        ))}
      </div>
      {visibleCount < stampsToShow.length && (
        <button
          className={styles["show-more"]}
          onClick={handleShowMore}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className={styles.spinner}></span>
            </>
          ) : (
            "Mostrar mais"
          )}
        </button>
      )}
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
      default: StampsDefault,
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
