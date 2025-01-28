import React, { useState } from "react";
import { colorOptions } from "../Data";
import Container from "./Container";
import BreadCrumb from "./BreadCrumb"

const ViewProduct = () => {
  const [selectedColor, setSelectedColor] = useState("Desert Titanium");
  const [selectedImage, setSelectedImage] = useState(
    "/images/iPhone-16-Pro-Max---16-Pro-Desert-Titanium-1929.jpg"
  );
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (action) => {
    setQuantity((prevQuantity) => {
      if (action === "increase") {
        return prevQuantity + 1;
      } else if (action === "decrease" && prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  return (
    <Container class1="view-product-container">
      <div className="container" style={{marginTop: "10%"}}>
        <h3 className="d-block d-lg-none">Iphone 16 Pro Max</h3>
        <BreadCrumb title="iphone"/>

        <div className="row">
          {/* Product Images Section */}
          <div className="col-md-6">
            <div className="product-gallery">
              <img
                src={selectedImage}
                alt={selectedColor}
                className="img-fluid mb-3 border"
                style={{ borderRadius: "1.5px", width: "70%" }}
              />
              <div className="d-flex justify-content-start">
                {colorOptions.map((color, index) => (
                  <img
                    key={index}
                    src={color.image}
                    alt={`Thumbnail ${color.name}`}
                    className={`img-thumbnail me-2 ${
                      selectedImage === color.image ? "border-orange" : ""
                    }`}
                    style={{
                      width: "80px",
                      height: "80px",
                      cursor: "pointer",
                      objectFit: "cover",
                      borderWidth:
                        selectedImage === color.image ? "0.5px" : "0.25px",
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
            <a href="">
              <img
                src="/images/sotoApple-6176.png"
                alt=""
                width="12%"
              />
            </a>
            <h2 className="d-none d-lg-block">iPhone 16 Pro Max</h2>
            <p className="text-muted">Brand: Apple</p>
            <h4 className="text-black">Tk.154000</h4>
            <del>Tk.180000</del>
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
              <div className="d-flex">
                {colorOptions.map((color, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm me-2 ${
                      selectedColor === color.name
                        ? "btn-secondary"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => {
                      setSelectedImage(color.image);
                      setSelectedColor(color.name);
                    }}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4">
              <h5>Quantity:</h5>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-orange"
                  onClick={() => handleQuantityChange("decrease")}
                >
                  -
                </button>
                <span className="mx-3">{quantity}</span>
                <button
                  className="btn btn-outline-orange"
                  onClick={() => handleQuantityChange("increase")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart and Buy Now Buttons */}
            <div className="mt-4">
              <button className="text-orange btn btn-outline-orange me-2">
                Add to Cart
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
