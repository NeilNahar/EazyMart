const Order = () => {
  return (
    <div className="order">
      <h3>Payment</h3>
      <form>
        <input type="text" placeholder="Enter Name"/>
        <input type="text" placeholder="Enter Billing Address"/>
        <input type="number" placeholder="Enter Card Number"/>
        <div>
          <input type="month"  placeholder="Enter Month/Year"/>
          <input type="password" placeholder="Enter Pin" />
        </div>
        <button onClick={() => alert("Order placed!")}>Place order</button>
      </form>
    </div>
  );
};

export default Order;
