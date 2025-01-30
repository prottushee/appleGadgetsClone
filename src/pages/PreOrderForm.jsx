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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };

  return (
    <section className="container mt-5">
      <h2 className="text-center text-orange">
        Looking For Something Different ??
      </h2>
      <p className="text-center">Put Your Information in The Box...</p>

      <div className="mt-4 mx-auto" style={{ maxWidth: "640px" }}>
        <form
          onSubmit={handleSubmit}
          className="p-4 border rounded shadow-sm bg-light"
        >
          <div className="mb-3">
            <label className="form-label">Product Information</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Name/URL"
              name="product_info"
              value={formData.product_info}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Insert Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="customer_name"
              value={formData.customer_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone No"
                name="customer_phone"
                value={formData.customer_phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email Address"
                name="customer_email"
                value={formData.customer_email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter Address"
              name="customer_address"
              value={formData.customer_address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="terms">
              I accept the terms and conditions of pre-order.
            </label>
          </div>

          <button type="submit" className="btn btn-orange w-25">
            Submit
          </button>
        </form>
      </div>

      <h2 className="text-center text-orange mt-5">How to Pre-Order</h2>
      <p className="text-center">
        Watch the video and learn more about the pre-order process
      </p>
      <div
        className="mt-4 mx-auto p-2 bg-white shadow rounded"
        style={{ maxWidth: "640px" }}
      >
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
