import React from "react";
import { Link } from "react-router-dom";


const OfferCard = ({ image, date, title, description }) => {
  return (
    <div className="card shadow-sm border-0 rounded-xl overflow-hidden">
      <figure className="w-80">
        <img
          src={image}
          alt={title}
          className="img-fluid w-100"
          style={{ maxHeight: "3800px", objectFit: "cover" }}
          loading="lazy"
        />
      </figure>

      <div className="p-4 text-center">
        <p className="fw-semibold text-muted">
        <i className="bi bi-calendar-week me-1"></i> {date}
        </p>
        <h5 className="fw-bold">{title}</h5>
        <p className="text-secondary mt-2">{description}</p>

        <Link className="btn btn-orange text-white mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default OfferCard;
