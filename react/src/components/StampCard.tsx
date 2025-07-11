import React from "react";
import styles from "../styles/stamp-card.css";
import { IStampSchema } from "../../typings/IStampSchema";

interface StampCardProps {
  stamp: IStampSchema;
}

const StampCard: React.FC<StampCardProps> = ({ stamp }) => {
  return (
    <a
      href={stamp.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles["stamp-card"]}
    >
      <img
        src={stamp.imagem}
        alt={stamp.alt || stamp.nome}
        className={styles["stamp-image"]}
      />
      <div className={styles["overlay"]}>
        <span className={styles["stamp-name"]}>
          {stamp.esgotado
            ? `${stamp.nome} - OPS! ESSA ESTAMPA JÁ ESGOTOU`
            : stamp.nome}
        </span>
      </div>
    </a>
  );
};

export default StampCard;
