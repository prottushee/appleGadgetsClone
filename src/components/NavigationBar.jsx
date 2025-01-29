import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { CartContext } from "../context/CartContext";
import { menuItems } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [dropdownStates, setDropdownStates] = useState(
    menuItems.map(() => ({ isOpen: false }))
  );
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [expandedSubMenu, setExpandedSubMenu] = useState(null);
  const { getTotalItemCount } = useContext(CartContext);
  const totalItems = getTotalItemCount();

  const handleMouseEnter = (e, index) => {
    if (window.innerWidth > 992) {
      const newState = [...dropdownStates];
      newState[index].isOpen = true;
      setDropdownStates(newState);
    }
  };

  const handleSubMenuClick = (index) => {
    setExpandedSubMenu(expandedSubMenu === index ? null : index); // Toggle submenu
  };
  const handleMouseLeave = (e, index) => {
    if (window.innerWidth > 992) {
      const newState = [...dropdownStates];
      newState[index].isOpen = false;
      setDropdownStates(newState);
    }
  };

  const handleDropdownClick = (e, index) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      const newState = [...dropdownStates];
      newState[index].isOpen = !newState[index].isOpen;
      setDropdownStates(newState);
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="fixed-top">
        <nav className="py-3 bg-black">
          <div className="container-xxl">
            <div className="row align-items-center">
              {/* Mobile View: Hamburger Menu on the Right */}
              <div className="d-flex d-lg-none justify-content-between align-items-center w-100">
                <button
                  className="navbar-toggler ms-2 fs-4"
                  type="button"
                  onClick={() => setShowOffcanvas(true)}
                  aria-controls="mobileNavbar"
                  aria-label="Toggle navigation"
                  style={{ color: "darkorange" }}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>

                {/* Logo in the Center */}
                <Link to="/" className="mx-auto">
                  <img
                    src="/images/logo.jpg"
                    alt="logo"
                    style={{ width: "125px" }}
                  />
                </Link>

                {/* Search Icon on the Right */}
                <button
                  className="btn btn-outline-light me-2"
                  onClick={() => setShowSearchBar((prev) => !prev)}
                  style={{ border: "none", color: "darkorange" }}
                >
                  <BiSearch className="fs-3" />
                </button>
              </div>

              {/* Search Bar for Mobile View */}
              {showSearchBar && (
                <div className="d-flex d-lg-none justify-content-center w-100 mt-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </div>
              )}

              {/* Large Screen Navigation */}
              <div className="d-none d-lg-flex col-lg-12 justify-content-between align-items-center">
                {/* Logo */}
                <div className="col-lg-2">
                  <Link to="/">
                    <img
                      src="/images/logo.jpg"
                      alt="logo"
                      style={{ width: "125px" }}
                    />
                  </Link>
                </div>

                {/* Search Bar */}
                <div className="col-lg-3 mx-3 d-flex justify-content-center">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <span className="input-group-text">
                      <BiSearch className="fs-4" />
                    </span>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="col-lg-7 mx-auto d-flex justify-content-end gap-3">
                  <div>
                    <Link
                      to="/offer"
                      className="nav-link d-flex align-items-center text-white"
                    >
                      <img
                        src="/images/gift.webp"
                        alt="Offers"
                        width="27"
                        height="27"
                      />
                      <p className="mb-0 mx-2">
                        Offers
                        <br />
                        <small>Latest Offers</small>
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/cart"
                      className="nav-link d-flex align-items-center text-white"
                    >
                      <img
                        src="/images/cart.webp"
                        alt="Cart"
                        width="27"
                        height="27"
                      />
                      <p className="mb-0 mx-2">
                        Cart ({totalItems})
                        <br />
                        <small>
                          {totalItems > 0 ? "View Cart" : "Add items"}
                        </small>
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/pre-order"
                      className="nav-link d-flex align-items-center text-white"
                    >
                      <img
                        src="/images/shop.webp"
                        alt="Pre-Order"
                        width="27"
                        height="27"
                      />
                      <p className="mb-0 mx-2">
                        Pre-Order
                        <br />
                        <small>Order Today</small>
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/account"
                      className="nav-link d-flex align-items-center text-white me-4"
                    >
                      <img
                        src="/images/user.webp"
                        alt="Account"
                        width="27"
                        height="27"
                      />
                      <p className="mb-0 mx-2">
                        My Account
                        <br />
                        <small>Register or Login</small>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Offcanvas Menu */}
        <div
          className={`offcanvas offcanvas-start ${showOffcanvas ? "show" : ""}`}
          id="mobileNavbar"
          style={{
            visibility: showOffcanvas ? "visible" : "hidden",
            transition: "visibility 0s, transform 0.3s ease-in-out",
          }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-orange">Categories</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowOffcanvas(false)}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="list-unstyled">
              {menuItems.map((item, index) => (
                <li key={index} className="mb-3">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    onClick={() => handleSubMenuClick(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <span>{item.label}</span>
                    {item.subItems.length > 0 && (
                      <FontAwesomeIcon
                        icon={
                          expandedSubMenu === index
                            ? faChevronDown
                            : faChevronRight
                        }
                      />
                    )}
                  </div>
                  {/* Render Submenu Items */}
                  {expandedSubMenu === index && (
                    <ul className="list-unstyled ms-3 mt-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="mb-2">
                          <Link
                            to={subItem.link}
                            className="text-decoration-none text-orange"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Category navbar */}
        <nav className="navbar navbar-expand-lg bg-white shadow-sm py-0">
          <div className="container">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="nav-item dropdown"
                    onMouseEnter={(e) => handleMouseEnter(e, index)}
                    onMouseLeave={(e) => handleMouseLeave(e, index)}
                  >
                    <a
                      className="nav-link dropdown-toggle text-black"
                      href={item.link}
                      onClick={(e) => handleDropdownClick(e, index)}
                    >
                      {item.label}
                    </a>
                    {dropdownStates[index].isOpen && (
                      <ul className="dropdown-menu">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a className="dropdown-item" href={subItem.link}>
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Footer for Mobile Screens */}
      <div className="d-xs-inline vw-100 fixed-bottom bg-black pt-2 pb-0 d-lg-none">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-3 text-center">
              <Link
                to="/offer"
                className="nav-link text-white d-flex flex-column align-items-center"
              >
                <img
                  src="/images/gift.webp"
                  alt="Offers"
                  width="27"
                  height="27"
                />
                <p className="mt-2 mb-1" style={{ fontSize: "smaller" }}>
                  Offers
                </p>
              </Link>
            </div>
            <div className="col-3 text-center">
              <Link
                to="/cart"
                className="nav-link text-white d-flex flex-column align-items-center"
              >
                <img
                  src="/images/cart.webp"
                  alt="Cart"
                  width="27"
                  height="27"
                />
               <p className="mb-0 mx-2">
                        Cart ({totalItems})
                      </p>
              </Link>
            </div>
            <div className="col-3 text-center">
              <Link
                to="/pre-order"
                className="nav-link text-white d-flex flex-column align-items-center"
              >
                <img
                  src="/images/shop.webp"
                  alt="Pre-Order"
                  width="27"
                  height="27"
                />
                <p className="mt-2 mb-1" style={{ fontSize: "smaller" }}>
                  Pre-Order
                </p>
              </Link>
            </div>
            <div className="col-3 text-center">
              <Link
                to="/account"
                className="nav-link text-white d-flex flex-column align-items-center"
              >
                <img
                  src="/images/user.webp"
                  alt="Account"
                  width="27"
                  height="27"
                />
                <p className="mt-2 mb-1" style={{ fontSize: "smaller" }}>
                  Account
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
