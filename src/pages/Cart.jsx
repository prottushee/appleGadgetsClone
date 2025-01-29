import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const isCartEmpty = cart.length === 0;

  const handleIncrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container bg-light shadow-sm rounded px-5" style={{marginTop: "10%"}}>
      {isCartEmpty ? (
        <div className="text-center">
          <div className="d-flex justify-content-center" >
            <img
              className="img-fluid"
              src="/images/emptyCart.png"
              alt="emptyCart"
              style={{ maxWidth: "200px" }}
            />
          </div>
          <p className="fw-semibold mt-3">
            Your cart is <span className="text-orange">Empty</span>
          </p>
          <p className="text-secondary">Add items to proceed to checkout.</p>
          <div className="d-flex justify-content-center">
            <Link className="btn btn-orange text-white" to="/">
              Return Home
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-start mb-4">Shopping Cart</h3>

        
          <div className="table-responsive">
            <table className="table table-bordered border-white">
              <thead className="table-secondary text-start" style={{fontSize: "90%"}}>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th className="d-none d-md-table-cell">Unit Price</th>
                  <th>Total</th>
                  <th className="d-none d-md-table-cell">Actions</th>
                </tr>
              </thead>
              <tbody className="text-start" style={{fontSize: "85%"}}>
                {cart.map((item) => (
                  <tr key={item.id} className="text-start align-middle">
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ maxWidth: "50px" }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>
                      <div className="btn-group btn-group-sm" role="group">
                        <button
                          className="btn btn-outline-secondary py-0"
                          onClick={() => handleDecrease(item.id)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span className="px-2 border border-secondary">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary py-0"
                          onClick={() => handleIncrease(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      {item.price.toLocaleString()}
                    </td>
                    <td  className="text-left no-wrap">{(item.price * item.quantity).toLocaleString()}
                    <button className="btn d-md-none" onClick={() => handleRemove(item.id)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                    <td>
                      <button className="btn d-none d-md-table-cell" onClick={() => handleRemove(item.id)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
          <div className="row mt-4">
            <div className="col-12 col-md-6 d-flex justify-content-between align-items-end">
              <Link to="/" className="btn btn-orange btn-sm text-white w-40 p-2">
                Continue Shopping
              </Link>
            </div>
            <div className="col-12 col-md-6 text-end">
              <p>
                <strong>Sub-Total:</strong> <span className="text-orange">BDT {subTotal.toLocaleString()}</span>
              </p>
              <p>
                <strong>Delivery Charge:</strong> <span className="text-orange">(will be added)</span>
              </p>
              <p>
                <strong>Total Discount:</strong> <span className="text-orange"> 0</span>
              </p>
              <p>
                <strong>Total:</strong> <span className="text-orange">BDT {subTotal.toLocaleString()}</span>
              </p>
              <Link to="/checkout" className="btn btn-orange btn-sm text-white w-40 p-2">
                Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
