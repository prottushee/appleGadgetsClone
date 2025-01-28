import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-5 py-5 bg-dark text-white">
        <div className="container">
          <div className="row">
            {/* Support Section */}
            <section className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <p className="text-center text-md-left mb-4 text-uppercase text-orange">
                SUPPORT
              </p>
              <div className="d-flex flex-column align-items-center align-items-md-start gap-4">
                <div className="border border-white px-3 py-2 rounded-pill w-100 d-flex align-items-center">
                  <i className="bi bi-telephone-fill fs-3"></i>
                  <div className="ms-3">
                    <a
                      className="text-white text-decoration-none fs-5"
                      href="tel:09678148148"
                    >
                      09678148148
                    </a>
                  </div>
                </div>
                <a
                  href="/find-our-store"
                  className="text-white text-decoration-none border border-white px-3 py-2 rounded-pill w-100 d-flex align-items-center gap-2"
                >
                  <i className="bi bi-geo-alt-fill fs-2"></i>
                  <div className="ms-2">
                    <p className="mb-0">Store Locator</p>
                    <p className="mb-0">Find Our Stores</p>
                  </div>
                </a>
                <div className="d-flex gap-3 justify-content-center">
                  <a
                    href="#"
                    target="_blank"
                    className="text-white text-decoration-none d-flex align-items-center justify-content-center rounded-circle bg-primary"
                    style={{ width: "36px", height: "36px" }}
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-white text-decoration-none d-flex align-items-center justify-content-center rounded-circle bg-info"
                    style={{ width: "36px", height: "36px" }}
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-white text-decoration-none d-flex align-items-center justify-content-center rounded-circle bg-danger"
                    style={{ width: "36px", height: "36px" }}
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-white text-decoration-none d-flex align-items-center justify-content-center rounded-circle bg-dark"
                    style={{ width: "36px", height: "36px" }}
                  >
                    <i className="bi bi-tiktok"></i>
                  </a>
                </div>
                <div className="d-flex gap-2 justify-content-left">
                  <a href="#" target="_blank">
                    <img
                      src="/images/footerApp.svg"
                      alt="App Store"
                      style={{ maxWidth: "150px" }}
                    />
                  </a>
                  <a href="#" target="_blank">
                    <img
                      src="/images/google_play_badge.svg"
                      alt="Google Play"
                      style={{ maxWidth: "150px" }}
                    />
                  </a>
                </div>
              </div>
            </section>

            {/* About Us Section */}
            <section className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <p className="text-center text-md-left mb-4 text-uppercase text-orange">
                About Us
              </p>
              <div className="d-flex flex-column align-items-center align-items-md-start">
                {[
                  "About Us",
                  "Shop Address",
                  "Careers",
                  "Blog",
                  "Press Coverage",
                  "Order Tracking",
                  "Complain / Advice",
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white text-decoration-none text-small mb-2"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </section>

            {/* Help Section */}
            <section className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <p className="text-center text-md-left mb-4 text-uppercase text-orange">
                Help
              </p>
              <div className="d-flex flex-column align-items-center align-items-md-start">
                {[
                  "Contact Us",
                  "FAQs",
                  "EMI and Payment Policy",
                  "Privacy Policy",
                  "Warranty Policy",
                  "Exchange Any Device",
                  "Delivery Terms & Conditions",
                  "Pre-Order Policy",
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white text-decoration-none text-small mb-2"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </section>

            {/* Stay Connected Section */}
            <section className="col-12 col-md-6 col-lg-3">
              <p className="text-center text-md-left mb-4 text-uppercase text-orange">
                Stay Connected
              </p>
              <div className="d-flex flex-column align-items-center align-items-md-start">
                {[
                  "Apple Gadgets",
                  "Basement 2, Shop 26, Bashundhara City Shopping Complex",
                  "Level 6, Block D, Shop 72-73, Bashundhara City Shopping Complex",
                  "Level 4, Zone A",
                ].map((item, index) => (
                  <p
                    key={index}
                    className="text-white text-decoration-none text-small mb-2 text-center text-md-start"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </section>
          </div>
        </div>
      </footer>
      <div className="mt-0 py-2 bg-black text-white text-center">
        © 2025 Thanks From Apple Gadgets | All rights reserved
      </div>
    </>
  );
};

export default Footer;
