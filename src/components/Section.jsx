import React from 'react';

const Section = () => {
  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-6 col-xl-3">
          <a href="" className="text-decoration-none">
            <div className="d-flex align-items-center gap-3 bg-white p-3 rounded shadow-sm">
              <div className="d-flex align-items-center justify-content-center bg-orange rounded-circle" style={{ height: '50px', width: '50px' }}>
                <i className="bi bi-search text-white" style={{ fontSize: '20px' }}></i> 
              </div>
              <div>
                <h6 className="mb-0 fw-bold text-black">Outfit Finder</h6>
                <p className="mb-0 text-dark d-none d-md-block">Find Outfit for Gadgets</p>
              </div>
            </div>
          </a>
        </div>

        <div className="col-6 col-xl-3">
          <a href="" className="text-decoration-none">
            <div className="d-flex align-items-center gap-3 bg-white p-3 rounded shadow-sm">
              <div className="d-flex align-items-center justify-content-center bg-orange rounded-circle" style={{ height: '50px', width: '50px' }}>
                <i className="bi bi-pen text-white" style={{ fontSize: '20px' }}></i> 
              </div>
              <div>
                <h6 className="mb-0 fw-bold text-black">Share Experience</h6>
                <p className="mb-0 text-dark d-none d-md-block">We Value your Feedback</p>
              </div>
            </div>
          </a>
        </div>

        <div className="col-6 col-xl-3">
          <a href="" className="text-decoration-none">
            <div className="d-flex align-items-center gap-3 bg-white p-3 rounded shadow-sm">
              <div className="d-flex align-items-center justify-content-center bg-orange rounded-circle" style={{ height: '50px', width: '50px' }}>
                <i className="bi bi-whatsapp text-white" style={{ fontSize: '20px' }}></i> 
              </div>
              <div>
                <h6 className="mb-0 fw-bold text-black">Online Support</h6>
                <p className="mb-0 text-dark d-none d-md-block">Get Support on WhatsApp</p>
              </div>
            </div>
          </a>
        </div>

        <div className="col-6 col-xl-3">
          <a href="" className="text-decoration-none">
            <div className="d-flex align-items-center gap-3 bg-white p-3 rounded shadow-sm">
              <div className="d-flex align-items-center justify-content-center bg-orange rounded-circle" style={{ height: '50px', width: '50px' }}>
                <i className="bi bi-apple text-white" style={{ fontSize: '20px' }}></i> 
              </div>
              <div>
                <h6 className="mb-0 fw-bold text-black">AppleGagdets Care</h6>
                <p className="mb-0 text-dark d-none d-md-block">Repair Your Device</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section;
