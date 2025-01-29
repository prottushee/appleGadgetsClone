import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product); 
    toast.success(`${product.name} has been added to your cart!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
          style={{ maxWidth: "180px", maxHeight: "180px" }}
        />
        <p className="d-block fw-semibold text-sm mt-1 px-1 text-nowrap" style={{fontSize: "18px"}}>
          {product.name}
        </p>
        <a className="hover d-block text-decoration-none fw-semibold text-muted mt-1" style={{fontSize: "15px"}}>
          {product.price}৳
          {product.originalPrice && (
            <del className="ms-2 text-secondary" style={{fontSize: "12px"}}>{product.originalPrice}৳</del>
          )}
        </a>
      </a>
      <div className="d-flex justify-content-center gap-2 mt-2 w-100">
        <button className="btn btn-orange btn-sm px-1 text-white text-nowrap "
                style={{fontSize: "10px"}}
        >Buy Now</button>
        <button
          onClick={handleAddToCart}
          className="btn btn-outline-orange btn-sm px-1 text-orange text-nowrap"
          style={{fontSize: "10px"}}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
