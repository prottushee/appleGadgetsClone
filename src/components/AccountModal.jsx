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

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[a-zA-Z\s]{2,}$/.test(value)) {
          error = "Only letters, min 2 characters";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Enter a valid email address";
        }
        break;
      case "password":
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value)) {
          error = "Min 6 chars, at least one letter & one number";
        }
        break;
      case "confirmPassword":
        if (value !== formData.password) {
          error = "Passwords do not match";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error)) return;
    console.log("Form Data:", formData);
    handleClose();
  };

  return (
    <>
      {show && <div className="modal-backdrop show"></div>}
      <div className={`modal fade ${show ? "show d-block" : ""}`} tabIndex="-1" role="dialog" style={{ top: "-5%" }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content p-4">
            {/* Logo */}
            <div className="text-center">
              <img src="/images/wh-bgLogo.webp" alt="Logo" style={{ width: "120px", height: "auto" }} />
            </div>

            {/* Modal Header */}
            <div className="modal-header border-0">
              <button type="button" className="btn-close" onClick={handleClose}></button>
            </div>

            {/* Toggle Buttons */}
            <div className="d-flex justify-content-around mb-0">
              <button className={`btn ${activeTab === "login" ? "btn-orange text-white" : "btn"}`} onClick={() => setActiveTab("login")}>
                Login
              </button>
              <button className={`btn ${activeTab === "register" ? "btn-orange text-white" : "btn"}`} onClick={() => setActiveTab("register")}>
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
                        className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                        name="firstName"
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>

                    <div className="mb-1">
                      <label className="form-label">Last Name*</label>
                      <input
                        type="text"
                        className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                        name="lastName"
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                  </>
                )}

                {/* Email */}
                <div className="mb-1">
                  <label className="form-label">Email address*</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                {/* Password */}
                <div className="mb-1">
                  <label className="form-label">Password*</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>

                {/* Confirm Password for Register */}
                {activeTab === "register" && (
                  <div className="mb-3">
                    <label className="form-label">Confirm Password*</label>
                    <input
                      type="password"
                      className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
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
