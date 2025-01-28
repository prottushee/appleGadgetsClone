import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="position-relative text-center shadow-sm bg-white bg-opacity-25 p-4 d-flex flex-column justify-content-between align-items-center rounded-3">
      <a
        className="d-flex flex-column justify-content-between align-items-center text-black text-decoration-none fs-sm"
        href={`/product/${product.slug}`}
      >
        <img
          alt={product.name}
          loading="lazy"
          decoding="async"
          src={product.image}
          className="img-fluid rounded"
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
        <p className="d-block fw-semibold text-sm mt-1 px-1 text-nowrap">
          {product.name}
        </p>
        <p className="d-block fw-semibold text-muted mt-1">
          {product.price}৳
          {product.originalPrice && (
            <del className="ms-2 text-secondary">{product.originalPrice}৳</del>
          )}
        </p>
      </a>
      <div className="d-flex justify-content-center gap-2 mt-2 w-100">
        <button className="btn btn-orange px-1 text-white text-nowrap btn-sm">Buy Now</button>
        <button className="btn btn-outline-orange px-1 text-orange text-nowrap btn-sm">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
