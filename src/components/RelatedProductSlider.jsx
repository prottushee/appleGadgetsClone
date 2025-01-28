import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { relatedProducts } from "../Data";
import Container from "./Container";


const RelatedProduct = () => {
  const chunkProducts = (relatedProducts, chunkSize) => {
    let result = [];
    for (let i = 0; i < relatedProducts.length; i += chunkSize) {
      result.push(relatedProducts.slice(i, i + chunkSize));
    }
    return result;
  };
  const getChunkSize = () => {
      if (window.innerWidth >= 1200) return 6; // lg to xxl screens
      if (window.innerWidth >= 576) return 3; // md to xs screens
      return 2;
    };
  
  const chunkedProducts = chunkProducts(relatedProducts, getChunkSize());

  return (
    <Container> 
      <h3 className="mt-5 mb-3 text-center">Related Products</h3>
      <div
        id="relatedProductsCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {chunkedProducts.map((chunk, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="row justify-content-center">
                {chunk.map((product) => (
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2 text-center"
                    key={product.id}
                  >
                    <a href={product.link} className="text-decoration-none">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid rounded"
                        style={{
                            maxWidth: "130px",
                            height: "130px",
                          }}
                      />
                      <h5 className="mt-3 text-dark">{product.name}</h5>
                      <p className="text-muted mb-1">
                        <strong>{product.price}</strong>
                        {product.originalPrice && (
                          <del className="ms-2 text-secondary">
                            {product.originalPrice}
                          </del>
                        )}
                      </p>
                    </a>
                    {product.price !== "TBA" && (
                      <div className="mt-2">
                        <button className="text-white text-nowrap btn btn-orange btn-sm me-2">
                          Buy Now
                        </button>
                        <button className="text-orange text-no-wrap btn btn-outline-orange btn-sm">
                          Add to Cart
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#relatedProductsCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#relatedProductsCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </Container>
  );
};

export default RelatedProduct;
