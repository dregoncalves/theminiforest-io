import React, { useState } from "react";
import IStoreSchema from "../types/IStoreSchema";
import defaultStores from "./utils/DefaultStores";

const EstampasPage = ({ stores = defaultStores }) => {
  const [selectedStore, setSelectedStore] = useState<IStoreSchema | null>(null);

  return (
    <React.Fragment>
      <div className="content">
        <h1>teste</h1>
      </div>
    </React.Fragment>
  );
};

StoresContainer.schema = {
  title: "Lojas",
  type: "object",
  properties: {
    stores: {
      title: "Cadastrar Lojas",
      type: "array",
      default: defaultStores,
      minItems: 0,
      items: {
        title: "Criar/Editar Lojas",
        type: "object",
        properties: {
          title: {
            title: "Título",
            type: "string",
            description: "Texto principal da loja",
          },
          image: {
            title: "Imagem da loja",
            type: "string",
            widget: {
              "ui:widget": "image-uploader",
            },
          },
          available: {
            title: "Horário de funcionamento",
            type: "string",
          },
          phone: {
            title: "Telefone",
            type: "string",
          },
          whatsapp: {
            title: "WhatsApp",
            type: "string",
          },
          whatsappLink: {
            title: "Link do WhatsApp",
            type: "string",
          },
          address: {
            title: "Endereço",
            type: "string",
          },
          addressLink: {
            title: "Link do Endereço",
            type: "string",
          },
          addressDetails: {
            title: "Endereço detalhado",
            type: "string",
            description:
              "Esse endereço aparece quando o usuário seleciona a loja",
          },
          contact: {
            title: "E-mail",
            type: "string",
          },
          link: {
            title: "Link do Mapa",
            type: "string",
            description: "Você deve inserir a URL da loja no Maps",
          },
        },
      },
    },
  },
};

export default StoresContainer;
