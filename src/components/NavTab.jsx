import React from "react";

const NavTab = () => {
  const handleTabClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container mt-5 col-12 col-lg-6 ps-0" style={{marginLeft: "8rem"}}>
      {/* Navigation Links */}
      <ul className="nav nav-tabs" id="productTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link text-orange"
          >
            Specification
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link text-orange"
            onClick={() => handleTabClick("description")}
          >
            Description
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link text-orange" onClick={() => handleTabClick("warranty")}>
            Warranty
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link text-orange" onClick={() => handleTabClick("video")}>
            Video
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="mt-4">
        <div id="specification" className="mb-5">
          <h2>Specification</h2>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>Apple</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>iPhone 16 Pro Max</td>
              </tr>
              <tr>
                <td>Network</td>
                <td>GSM / CDMA / HSPA / EVDO / LTE / 5G</td>
              </tr>
              <tr>
                <td>Dimensions</td>
                <td>163 x 77.6 x 8.3 mm</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>227 g</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="description" className="mb-5">
          <h2>Description</h2>
          <img className="img-fluid" src="/images/description.jpg" alt="" />
          <h4 className="mt-2 fw-semibold">iPhone 16 Pro Max</h4>
          <p>The Apple iPhone 16 Pro Max continues to surprise Apple fans with its array of upgraded features. Available in multiple colors, it offers an exceptional camera for stunning photography and high-quality video recording. Its impressive performance makes it stand out among other devices, delivering speed and power beyond expectations. With an excellent battery life, even heavy users can easily last a full day. The iPhone 16 Pro Max is sure to captivate Apple enthusiasts.</p>
          <h4 className="mt-2 fw-semibold">iPhone 16 Pro Max Price in Bangladesh</h4>
          <p>The latest iPhone 16 pro max price in Bangladesh starts from <span className="fw-semibold">154000 BDT</span>.  Get this awesome smartphone from Apple Gadgets and explore the amazing world of productivity.</p>
        </div>

        <div id="warranty" className="mb-5">
          <h2>Warranty</h2>
          <p>
            Explore our <a className="text-decoration-none text-orange" href="/page/warranty-policy">Warranty Policy</a> for
            detailed information.
          </p>
        </div>

        <div id="video" className="mb-5">
          <h2>Video</h2>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/9C3qEpKrnWQ"
              title="iPhone 16 Pro Max Unboxing"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTab;
