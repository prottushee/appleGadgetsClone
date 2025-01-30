import React, { useState, useContext, useEffect } from "react";
import { colorOptions } from "../Data";
import Container from "./Container";
import BreadCrumb from "./BreadCrumb";
import { CartContext } from "../context/CartContext"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewProduct = () => {
  const { addToCart } = useContext(CartContext);

  const [selectedColor, setSelectedColor] = useState("Desert Titanium");
  const [selectedImage, setSelectedImage] = useState(
    "/images/iPhone-16-Pro-Max---16-Pro-Desert-Titanium-1929.jpg"
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  
  useEffect(() => {
    if (window.bootstrap && window.bootstrap.Tooltip) {
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      tooltipTriggerList.forEach((tooltip) => new window.bootstrap.Tooltip(tooltip));
    }
  }, []);
  const handleQuantityChange = (action) => {
    setQuantity((prevQuantity) => {
      if (action === "increase") return prevQuantity + 1;
      if (action === "decrease" && prevQuantity > 1) return prevQuantity - 1;
      return prevQuantity;
    });
  };
  const handleAddToCart = () => {
    if (isAdded) return; 

    const product = {
      id: "iphone-16-pro-max",
      name: "iPhone 16 Pro Max",
      price: 154000,
      image: selectedImage,
      color: selectedColor,
      quantity: quantity,
    };
    const productWithQuantity = { ...product, quantity }; 
    addToCart(productWithQuantity); 
    setIsAdded(true); 

    toast.success(`${product.name} has been added to your cart!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <Container class1="view-product-container">
      <div className="container" style={{ marginTop: "10%" }}>
        <h3 className="d-block d-lg-none">iPhone 16 Pro Max</h3>
        <BreadCrumb title="iPhone 16 Pro Max" />

        <div className="row">
          <div className="col-md-6">
            <div className="product-gallery">
              <img
                src={selectedImage}
                alt={selectedColor}
                className="img-fluid mb-3 border"
                style={{ borderRadius: "1.5px", width: "100%" }}
              />
              <div className="d-flex justify-content-start flex-wrap">
                {colorOptions.map((color, index) => (
                  <img
                    key={index}
                    src={color.image}
                    alt={`Thumbnail ${color.name}`}
                    className={`img-thumbnail me-2 ${
                      selectedImage === color.image ? "border-orange" : ""
                    }`}
                    style={{
                      width: "70px",
                      height: "70px",
                      cursor: "pointer",
                      objectFit: "cover",
                      borderWidth:
                        selectedImage === color.image ? "2px" : "1px",
                    }}
                    onClick={() => {
                      setSelectedImage(color.image);
                      setSelectedColor(color.name);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="col-md-6">
            <a href="#">
              <img
                src="/images/sotoApple-6176.png"
                alt="Apple Logo"
                width="12%"
              />
            </a>
            <h2 className="d-none d-lg-block">iPhone 16 Pro Max</h2>
            <p className="text-muted">Brand: Apple</p>
            <h4 className="text-black">Tk. 154,000</h4>
            <del>Tk. 180,000</del>
            <p className="text-danger">14% OFF</p>

            <p className="mt-3">
              The iPhone 16 Pro Max redefines elegance with a sleek titanium
              finish and unmatched performance. Experience the pinnacle of
              technology with enhanced camera, display, and battery life.
            </p>

            <p className="fw-bold">
              1 Year Official Warranty Support for Australia, Dubai & Singapore
              Variant Only
            </p>

            {/* Color Selector */}
            <div className="mt-3">
              <h5>Color:</h5>
              <div className="d-flex flex-wrap">
                {colorOptions.map((color, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm me-2 ${
                      selectedColor === color.name
                        ? "btn-secondary"
                        : "btn-outline-secondary"
                    }`}
                    style={{
                      width: "8px",
                      backgroundColor: color.hex,
                      color: selectedColor === color.name ? "white" : "black",
                      padding: "10px 10px",
                      borderRadius: 0,
                    }}
                    onClick={() => {
                      setSelectedImage(color.image);
                    }}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={color.name} 
                  ></button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4">
              <h5>Quantity:</h5>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-orange btn-sm"
                  onClick={() => handleQuantityChange("decrease")}
                >
                  -
                </button>
                <span className="mx-3">{quantity}</span>
                <button
                  className="btn btn-outline-orange btn-sm"
                  onClick={() => handleQuantityChange("increase")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart and Buy Now Buttons */}
            <div className="mt-4 d-flex flex-column flex-sm-row">
              <button
                className={`btn me-2 mb-2 mb-sm-0 ${
                  isAdded
                    ? "btn-success text-white"
                    : "btn-outline-orange text-orange"
                }`}
                onClick={handleAddToCart}
                disabled={isAdded}
              >
                {isAdded ? "Added" : "Add to Cart"}
              </button>
              <button className="text-white btn btn-orange">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ViewProduct;
