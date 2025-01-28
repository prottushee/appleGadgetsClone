import React from "react";

const ProductBanners = () => {
  return (
    <section className="container mt-4">
      <div className="row g-2 g-md-4">
        {/* Banner 1 */}
        <div className="col-12 col-md-6">
          <a className="d-block" href="/product/galaxy-s25-5g">
            <p className="visually-hidden">S25 Middle Banner-5777</p>
            <figure>
              <img
                src="/images/S25-Middle-Banner-5777.png"
                alt="S25 Middle Banner-5777"
                className="img-fluid"
                loading="lazy"
                sizes="(max-width: 800px) 100vw, 1200px"
              />
            </figure>
          </a>
        </div>

        {/* Banner 2 */}
        <div className="col-12 col-md-6">
          <a className="d-block" href="/product/redmi-note-14-pro-plus-5g">
            <p className="visually-hidden">Redmi Note 14 Pro+ 5G-8458</p>
            <figure>
              <img
                src="/images/Redmi-Middle_Banner.png"
                alt="Redmi Note 14 Pro+ 5G-8458"
                className="img-fluid"
                loading="lazy"
                sizes="(max-width: 800px) 100vw, 1200px"
              />
            </figure>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductBanners;
