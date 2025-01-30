import React, { useState } from "react";

const AccountModal = ({ show, handleClose }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    handleClose();
  };

  return (
   <> {show && 
      <div className="modal-backdrop show"></div>}
    <div
      className={`modal fade ${show ? "show d-block" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{
        top: "-5%",
      }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-4">
          {/* Logo */}
          <div className="text-center">
            <img
              src="/images/wh-bgLogo.webp"
              alt="Logo"
              style={{ width: "120px", height: "auto" }}
            />
          </div>

          {/* Modal Header */}
          <div className="modal-header border-0">
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>

          {/* Toggle Buttons */}
          <div className="d-flex justify-content-around mb-0">
            <button
              className={`btn ${activeTab === "login" ? "btn-orange text-white" : "btn"}`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`btn ${activeTab === "register" ? "btn-orange text-white" : "btn"}`}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/* Register Form: First & Last Name */}
              {activeTab === "register" && (
                <>
                  <div className="mb-1">
                    <label className="form-label">First Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-1">
                    <label className="form-label">Last Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </>
              )}

              {/* Email */}
              <div className="mb-1">
                <label className="form-label">Email address*</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-1">
                <label className="form-label">Password*</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Confirm Password for Register */}
              {activeTab === "register" && (
                <div className="mb-3">
                  <label className="form-label">Confirm Password*</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}

              <button type="submit" className="btn btn-orange w-100 text-white">
                {activeTab === "login" ? "Login" : "Create Account"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AccountModal;
