import React from "react";
import OfferCard from "../components/offerCard";

const OffersPage = () => {
  return (
    <div className="container" style={{marginTop: "10%"}}>
      <div className="row">
        <div className="col-4">
          <OfferCard
            image="/images/offer1.webp"
            date="01 January, 2025 - 31 January, 2025"
            title="Exclusive Offer on iPhone 16 Series"
            description="Don't miss out on owning the iconic iPhone 16 Series! Experience premium Apple technology with this limited-time offer."
          />
        </div>
        <div className="col-4">
          <OfferCard
            image="/images/offer1.webp"
            date="01 January, 2025 - 31 January, 2025"
            title="Exclusive Offer on iPhone 16 Series"
            description="Don't miss out on owning the iconic iPhone 16 Series! Experience premium Apple technology with this limited-time offer."
          />
        </div>
        <div className="col-4">
          <OfferCard
            image="/images/offer1.webp"
            date="01 January, 2025 - 31 January, 2025"
            title="Exclusive Offer on iPhone 16 Series"
            description="Don't miss out on owning the iconic iPhone 16 Series! Experience premium Apple technology with this limited-time offer."
          />
        </div>
        <div className="col-4">
          <OfferCard
            image="/images/offer1.webp"
            date="01 January, 2025 - 31 January, 2025"
            title="Exclusive Offer on iPhone 16 Series"
            description="Don't miss out on owning the iconic iPhone 16 Series! Experience premium Apple technology with this limited-time offer."
          />
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
