import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BillingForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    // Full Name Validation (Only letters & spaces, min 2 chars)
    if (!/^[a-zA-Z\s]{2,}$/.test(formData.fullName)) {
      newErrors.fullName = "Enter a valid name (letters only, min 2 chars)";
    }

    // Phone Number Validation (Only digits, 10-15 chars)
    if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (10-15 digits)";
    }

    // Address Validation (Min 10 characters)
    if (!/^.{10,}$/.test(formData.address)) {
      newErrors.address = "Address must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      // Submit form data to backend or process further
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="border-lg-end border-light pt-4 pt-md-5 pb-4">
      {/* Notification Messages */}
      <div className="mb-4">
        <div className="alert alert-warning text-sm">
          <em>
            অর্ডার সংক্রান্ত যেকোনো প্রয়োজনে কথা বলুন আমাদের কাস্টমার সার্ভিস
            প্রতিনিধির সাথে - <strong>09678148148</strong>
          </em>
        </div>
      </div>

      {/* Payment Method */}
      <h5 className="fw-semibold">Payment Method</h5>
      <div className="d-flex gap-2 mt-3 bg-light border rounded px-3 py-2">
        <button
          type="button"
          className="btn btn-light d-flex align-items-center"
          onClick={() => setPaymentMethod("COD")}
        >
          {paymentMethod === "COD" && (
            <i className="bi bi-check-circle-fill me-1 text-success"></i>
          )}
          Cash on Delivery
        </button>

        <button
          type="button"
          className="btn btn-light d-flex align-items-center"
          onClick={() => setPaymentMethod("Online")}
        >
          {paymentMethod === "Online" && (
            <i className="bi bi-check-circle-fill me-1 text-success"></i>
          )}
          Online Payment
        </button>
      </div>

      {/* Billing Details */}
      <form className="mt-4" onSubmit={handleSubmit}>
        <h5 className="fw-semibold">Billing Details</h5>

        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
        </div>

        {/* Phone Number */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="text-danger">*</span>
          </label>
          <div className="input-group">
            <input
              type="text"
              id="phone"
              name="phone"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button className="btn btn-outline-secondary" type="button">
              Verify
            </button>
          </div>
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Full Address <span className="text-danger">*</span>
          </label>
          <textarea
            id="address"
            name="address"
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
            placeholder="Enter Address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
          {errors.address && <div className="invalid-feedback">{errors.address}</div>}
        </div>

        {/* Terms & Confirm Order */}
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start mt-4">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="acceptPolicy"
              defaultChecked
              required
            />
            <label
              htmlFor="acceptPolicy"
              className="form-check-label text-muted"
            >
              I have read and agree to the{" "}
              <a href="/page/terms-and-conditions" className="text-decoration-none text-orange">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="/page/privacy-policy" className="text-decoration-none text-orange">
                Privacy Policy
              </a>
            </label>
          </div>
          <button
            className="d-none d-lg-block btn btn-orange btn-md text-nowrap mt-3 mt-lg-0 text-white fw-semibold"
            type="submit"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;
