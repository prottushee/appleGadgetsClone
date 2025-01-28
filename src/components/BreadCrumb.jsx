import { Link } from "react-router-dom";

const BreadCrumb = ({ title }) => {
  return (
    <div className="breadcrumb mb-0 pb-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 ps-0">
            <p className="text-left mb-0">
              <Link to="/" className="text-orange text-decoration-none">
                Home&nbsp;
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
