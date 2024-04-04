import { useSelector, useDispatch } from "react-redux";
import { ResetKeyValue } from "../utils/foodCartSlice";
const Cart = () => {
  const food_list = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  console.log(food_list);
  const foodCartCollection = useSelector((state) => state.foodCart);
  const filteredKeys = Object.entries(foodCartCollection)
    .filter(([key, value]) => value >= 1)
    .map(([key]) => key);
  const calculateTotal = () => {
    let total = 0;
    filteredKeys.forEach((entity) => {
      const price = food_list[entity].price;
      const quantity = foodCartCollection[entity];
      total += price * quantity;
    });
    return total;
  };

  return (
    <div className="cart">
      <div className="cart-description">
        <div className="cart-header">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {filteredKeys.map((entity, index) => (
          <div key={index} className="cart-data">
            <img src={food_list[entity].image} alt="" />
            <p>{food_list[entity].name}</p>
            <p>${food_list[entity].price}</p>
            <p>{foodCartCollection[entity]}</p>
            <p>${food_list[entity].price * foodCartCollection[entity]}</p>
            <p
              className="remove"
              onClick={() => {
                dispatch(ResetKeyValue({ id: entity }));
              }}
            >
              X
            </p>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <div>
          <h3>Cart Total</h3>
          <div>
            <div className="cart-total-border">
              <p>Subtotal</p>
              <p>${calculateTotal()}</p>
            </div>
            <div className="cart-total-border">
              <p>Delivery fee</p>
              <p>${calculateTotal() === 0 ? 0 : calculateTotal() / 10}</p>
            </div>
            <div>
              <p>Total</p>
              <p>${calculateTotal() === 0 ? 0 : calculateTotal() + (calculateTotal() / 10)}</p>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
          <h3>If you have a promocode, Enter it here</h3>
          <form>
            <input type="text" placeholder="Enter promocode" />
            <button>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
