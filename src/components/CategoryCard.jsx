import React from "react";

const FeaturedCategories = () => {
  return (
    <section className="container mt-5">
      <div className="text-center">
        <h3 className="mb-2">
          FEATURED CATEGORIES
        </h3>
        <p className="text-sm md:text-base mt-2">
          Get your desired product from featured category
        </p>
      </div>
      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 g-3 mt-5">
        <CategoryCard
          href="/category/phones-tablets"
          src="/images/FCat1.webp"
          alt="Phones & Tablets"
          title="Phones & Tablets"
        />
        <CategoryCard
          href="/category/laptop-and-desktop/macbook"
          src="/images/FCat2.webp"
          alt="MacBook"
          title="MacBook"
        />
        <CategoryCard
          href="/category/peripherals/hubs-and-docks"
          src="/images/FCat3.webp"
          alt="Hubs & Docks"
          title="Hubs & Docks"
        />
        <CategoryCard
          href="/category/peripherals/stylus"
          src="/images/FCat4.webp"
          alt="Stylus"
          title="Stylus"
        />
        <CategoryCard
          href="/category/fitness-and-wearable/smart-watch"
          src="/images/FCat5.webp"
          alt="Smart Watch"
          title="Smart Watch"
        />
        <CategoryCard
          href="/category/fitness-and-wearable/watch-accessories/watch-strap"
          src="/images/FCat6.webp"
          alt="Watch Strap"
          title="Watch Strap"
        />
        <CategoryCard
          href="/category/sound-equipment/airpods"
          src="/images/FCat7.webp"
          alt="Airpods"
          title="Airpods"
        />
        <CategoryCard
          href="/category/sound-equipment/wired-headphone"
          src="/images/FCat8.webp"
          alt="Wired Headphone"
          title="Wired Headphone"
        />
        <CategoryCard
          href="/category/sound-equipment/wireless-headphone"
          src="/images/FCat9.webp"
          alt="Neckband"
          title="Neckband"
        />
        <CategoryCard
          href="/category/power-accessories/power-adapter"
          src="/images/FCat10.webp"
          alt="Power Adapter"
          title="Power Adapter"
        />
        <CategoryCard
          href="/category/power-accessories/power-bank"
          src="/images/FCat11.webp"
          alt="Power Bank"
          title="Power Bank"
        />
        <CategoryCard
          href="/category/power-accessories/cable-and-interconnects"
          src="/images/FCat12.webp"
          alt="Cable & Interconnects"
          title="Cable & Interconnects"
        />
      </div>
    </section>
  );
};

const CategoryCard = ({ href, src, alt, title }) => {
  return (
    <div className="col">
      <a className="category-card p-3 text-center" href={href}>
        <figure className="mb-3">
          <img
            className="img-fluid rounded-circle category-image"
            src={src}
            alt={alt}
            width="70"
            height="70"
          />
        </figure>
        <p className="category-title text-sm">{title}</p>
      </a>
    </div>
  );
};

export default FeaturedCategories;
