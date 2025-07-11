// react/UserInfoAccordion.tsx
import React, { useState } from "react";
import { Link } from "vtex.render-runtime";
import styles from "../styles/drawer-user-info.css";

interface UserInfoAccordionProps {}

const UserInfoAccordion: React.FC<UserInfoAccordionProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const ArrowIcon = () => (
    <svg
      className={`${styles["accordion-icon"]}`}
      width="16"
      height="16"
      viewBox="0 0 284.929 284.929"
      fill="currentColor"
      style={{
        transition: "transform 0.3s ease-in-out",
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
    </svg>
  );

  return (
    <div className={`${styles["accordion-container"]}`}>
      <div
        className={`${styles["accordion-header"]} flex justify-between items-center pointer`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <img
            src="https://theminiforest.vtexassets.com/assets/vtex.file-manager-graphql/images/a1399931-b0e2-4fca-a6e1-05f810cf5749___3a56bdf13c3f54982e52c580a252755f.svg"
            width={40}
            alt="Ícone The Mini Forest"
          />
          <div>
            <p className={`${styles["header-title"]} b ma0`}>Olá!</p>
            <p className={`${styles["header-subtitle"]} ma0 c-muted-1`}>
              Acesse sua conta e pedidos
            </p>
          </div>
        </div>
        <ArrowIcon />
      </div>

      <div
        className={`${styles["accordion-content"]} ${
          isOpen ? styles["accordion-content--is-open"] : ""
        }`}
      >
        <Link to="/login" className={`${styles["login-link"]} c-link`}>
          Clique aqui e faça seu login =)
        </Link>
      </div>
    </div>
  );
};

(UserInfoAccordion as any).schema = {
  title: "User Info Accordion",
  description:
    "Custom accordion for user info and login link using CSS Modules.",
  type: "object",
  properties: {},
};

export default UserInfoAccordion;
