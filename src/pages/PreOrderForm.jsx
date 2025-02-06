import React, { useState } from "react";

const PreOrderForm = () => {
  const [formData, setFormData] = useState({
    product_info: "",
    image: null,
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    customer_address: "",
    termsAccepted: true,
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "product_info":
        if (!/^.{3,}$/.test(value)) {
          error = "Enter at least 3 characters";
        }
        break;
      case "customer_name":
        if (!/^[a-zA-Z\s]{2,}$/.test(value)) {
          error = "Enter a valid name (letters only, min 2 chars)";
        }
        break;
      case "customer_phone":
        if (!/^\d{10,15}$/.test(value)) {
          error = "Enter a valid phone number (10-15 digits)";
        }
        break;
      case "customer_email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Enter a valid email address";
        }
        break;
      case "customer_address":
        if (!/^.{10,}$/.test(value)) {
          error = "Address must be at least 10 characters long";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    validateField(name, newValue);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error)) return;
    alert("Form submitted successfully!");
    console.log("Form submitted: ", formData);
  };

  return (
    <section className="container mt-5">
      <h2 className="text-center text-orange">Looking For Something Different ??</h2>
      <p className="text-center">Put Your Information in The Box...</p>

      <div className="mt-4 mx-auto" style={{ maxWidth: "640px" }}>
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
          {/* Product Information */}
          <div className="mb-3">
            <label className="form-label">Product Information</label>
            <input
              type="text"
              className={`form-control ${errors.product_info ? "is-invalid" : ""}`}
              placeholder="Enter Product Name/URL"
              name="product_info"
              value={formData.product_info}
              onChange={handleChange}
              required
            />
            {errors.product_info && <div className="invalid-feedback">{errors.product_info}</div>}
          </div>

          {/* Image Upload */}
          <div className="mb-3">
            <label className="form-label">Insert Image</label>
            <input type="file" className="form-control" accept="image/*" onChange={handleImageUpload} />
          </div>

          {/* Customer Name */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={`form-control ${errors.customer_name ? "is-invalid" : ""}`}
              placeholder="Enter Name"
              name="customer_name"
              value={formData.customer_name}
              onChange={handleChange}
              required
            />
            {errors.customer_name && <div className="invalid-feedback">{errors.customer_name}</div>}
          </div>

          {/* Phone and Email */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className={`form-control ${errors.customer_phone ? "is-invalid" : ""}`}
                placeholder="Enter Phone No"
                name="customer_phone"
                value={formData.customer_phone}
                onChange={handleChange}
                required
              />
              {errors.customer_phone && <div className="invalid-feedback">{errors.customer_phone}</div>}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.customer_email ? "is-invalid" : ""}`}
                placeholder="Enter Email Address"
                name="customer_email"
                value={formData.customer_email}
                onChange={handleChange}
                required
              />
              {errors.customer_email && <div className="invalid-feedback">{errors.customer_email}</div>}
            </div>
          </div>

          {/* Address */}
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              className={`form-control ${errors.customer_address ? "is-invalid" : ""}`}
              rows="4"
              placeholder="Enter Address"
              name="customer_address"
              value={formData.customer_address}
              onChange={handleChange}
              required
            ></textarea>
            {errors.customer_address && <div className="invalid-feedback">{errors.customer_address}</div>}
          </div>

          {/* Terms and Conditions */}
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="terms">
              I accept the terms and conditions of pre-order.
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-orange w-25" disabled={Object.values(errors).some((err) => err)}>
            Submit
          </button>
        </form>
      </div>

      {/* How to Pre-Order Section */}
      <h2 className="text-center text-orange mt-5">How to Pre-Order</h2>
      <p className="text-center">Watch the video and learn more about the pre-order process</p>
      <div className="mt-4 mx-auto p-2 bg-white shadow rounded" style={{ maxWidth: "640px" }}>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/7fkif715igA"
            title="How to preorder"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default PreOrderForm;
