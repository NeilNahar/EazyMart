import { useSelector, useDispatch } from "react-redux";
import { AddKeyValue, RemoveKeyValue } from "../utils/foodCartSlice";
const FoodCard = (props) => {
  const foodCartCollection = useSelector((state) => state.foodCart);
  const dispatch = useDispatch();
  const foodID=props.food["_id"]
  return (
    <div className="food-card">
      <img src={props.food.image} alt="" />
      {foodCartCollection[foodID]===0 ? (
        <div className="food-card-button">
          <button
            onClick={() =>
              dispatch(AddKeyValue({ id: foodID }))
            }
          >
            +
          </button>
        </div>
      ) : (
        <div className="food-card-button">
          <button
            onClick={() => {
              dispatch(RemoveKeyValue({ id: foodID }))
            }}
          >
            -
          </button>
          <span>{foodCartCollection[foodID]}</span>
          <button
            onClick={() =>
                dispatch(AddKeyValue({ id: foodID }))
            }
          >
            +
          </button>
        </div>
      )}
      <div className="food-card-data">
        <h4>{props.food.name}</h4>
        <p>{props.food.description}</p>
        <div>
          <span>{props.food.price}$</span>
          <span>Rating: {props.food.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
