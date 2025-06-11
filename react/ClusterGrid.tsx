import React, { useEffect, useState } from "react";

const ClusterGrid = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "/api/catalog_system/pub/products/search?clusterIds=140&_from=0&_to=11"
        );
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        <p>teste</p>
      </div>
    );
  if (!products.length)
    return (
      <div style={{ textAlign: "center", padding: 40 }}>
        Nenhum produto encontrado.
      </div>
    );

  return (
    <section
      style={{
        padding: "48px 16px",
        minHeight: "60vh",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontFamily: "Montserrat, Poppins, sans-serif",
          letterSpacing: 2,
          fontWeight: 500,
          marginBottom: 32,
          fontSize: 28,
          color: "#6B4F23",
        }}
      >
        Destaques
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 36,
          maxWidth: 1260,
          margin: "0 auto",
        }}
      >
        {products.map((product: any) => {
          const sku = product.items[0];
          const image = sku.images[0];
          const offer = sku.sellers[0]?.commertialOffer;

          return (
            <div
              key={product.productId}
              style={{
                position: "relative",
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href={`/${product.linkText}/p`}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <img
                  src={image.imageUrl}
                  alt={image.imageText || product.productName}
                  style={{
                    width: "100%",
                    height: 300,
                    objectFit: "cover",
                    marginBottom: 20,
                  }}
                />
                <div
                  style={{
                    fontFamily: "Montserrat, Poppins, sans-serif",
                    fontWeight: 500,
                    color: "#7a6952",
                    fontSize: 15,
                    minHeight: 42,
                    marginBottom: 10,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {product.productName}
                </div>
                {/* Preço */}
                <div style={{ marginBottom: 5 }}>
                  {offer?.ListPrice > offer?.Price && (
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#B8A692",
                        fontSize: 15,
                        marginRight: 6,
                      }}
                    >
                      R$ {offer.ListPrice.toFixed(2)}
                    </span>
                  )}
                  <span
                    style={{
                      color: "#6B4F23",
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                  >
                    R$ {offer?.Price.toFixed(2)}
                  </span>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClusterGrid;
