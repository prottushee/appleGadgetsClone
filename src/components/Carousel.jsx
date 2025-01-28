import React from "react";
import Container from "./Container";

const CarouselComponent = () => {
  return (
    <Container class1="carousel-container">
      <div className="row d-flex align-items-center">
        {/* Carousel Section */}
        <div className="col-lg-9" style={{height: "20%"}}>
          <div
            id="carouselExampleIndicators"
            className="carousel slide "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/Apple-5110.webp"
                  className="d-inline w-100"
                  alt="First Slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/Samsung-25-ultra-web-banner-9304.webp"
                  className="d-inline w-100"
                  alt="Second Slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/mini-Banner.webp"
                  className="d-inline w-100"
                  alt="Third Slide"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
             
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Side Image Links Section */}
        <div className="col-12 col-lg-3 mt-3 col-xl-3 d-flex flex-row flex-lg-column gap-3 mt-lg-0">
          <a href="#link1">
            <img
              src="\images\Xiaomi-Smart-Band-9-Pro-6779.webp"
              className="img-fluid"
              alt="Side Link 1"
              width= "1200"
              height="1200"
            />
          </a>
          <a href="#link2">
            <img
              src="\images\realme-Buds-Air-6-Pro-1002.webp"
              className="img-fluid"
              alt="Side Link 2"
               width= "1000"
              height="1000"
            />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default CarouselComponent;
