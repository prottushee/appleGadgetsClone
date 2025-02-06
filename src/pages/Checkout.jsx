import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import BillingForm from "../components/BillingForm";
import OrderSummary from "../components/OrderSummary";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6" style={{ marginTop: "10%" }}>
          <BillingForm />
        </div>
        <div
          className="col-md-4 d-none d-lg-block"
          style={{ marginTop: "15%" }}
        >
          <OrderSummary cartItems={cart} />
        </div>

        <div className="col-12 col-md-8 d-block d-lg-none mt-4">
          <OrderSummary cartItems={cart} />
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-orange mt-3 mt-lg-0 text-white text-nowrap  fw-semibold"
              type="submit"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
