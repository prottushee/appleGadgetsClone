import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { brands } from "../Data";

const BrandSlider = () => {
  
  const groupBrands = (brands, size) => {
    const grouped = [];
    for (let i = 0; i < brands.length; i += size) {
      grouped.push(brands.slice(i, i + size));
    }
    return grouped;
  };

  
  const getGroupSize = () => {
    if (window.innerWidth >= 1200) return 6; // lg to xxl screens
    if (window.innerWidth >= 576) return 4; // md to xs screens
    return 3;
  };

  const groupedBrands = groupBrands(brands, getGroupSize());
  

  return (
    <div className="container mt-4">
      <div id="brandCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {groupedBrands.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row justify-content-center">
                {group.map((brand) => (
                  <div
                    key={brand.id}
                    className="col text-center"
                    style={{
                      flex: "0 0 auto",
                      maxWidth: "100px", // Limit brand container width
                      padding: "2px", 
                    }}
                  >
                    <a href={brand.link} className="d-block w-100">
                      <img
                        src={brand.img}
                        alt={brand.name}
                        className="img-fluid"
                        style={{
                          maxWidth: "60px",
                          height: "60px",
                        }}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#brandCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-orange rounded-circle"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#brandCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-orange rounded-circle"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BrandSlider;
