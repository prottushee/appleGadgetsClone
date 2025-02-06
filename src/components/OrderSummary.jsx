const OrderSummary = ({ cartItems = [] }) => {
    if (!Array.isArray(cartItems)) {
      cartItems = []; // Fallback in case cartItems is undefined or not an array
    }
  
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryCharge = 70;
    const total = subtotal + deliveryCharge;
  
    return (
      <div className="card p-4 shadow-sm">
        <h2 className="h5 mb-3">Your Order</h2>
        <div className="list-group mb-3">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={item.image} alt={item.name} className="me-2" style={{ width: 50, height: 50 }} />
                  <div>
                    <p className="mb-1">{item.name}</p>
                    <small className="text-muted">Qty: {item.quantity}</small>
                  </div>
                </div>
                <span className="text-orange">BDT {item.price * item.quantity}</span>
              </div>
            ))
          ) : (
            <p className="text-muted">Your cart is empty.</p>
          )}
        </div>
        <div className="d-flex justify-content-between">
          <span>Subtotal:</span>
          <span>BDT {subtotal}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Delivery Charge:</span>
          <span>BDT {deliveryCharge}</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between fw-bold">
          <span>Total:</span>
          <span>BDT {total}</span>
        </div>
      </div>
    );
  };
  
  export default OrderSummary;
  