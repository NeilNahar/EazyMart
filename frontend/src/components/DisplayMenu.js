import React, { useState } from "react";
import FoodCard from "./FoodCard"

const DisplayMenu = (props) => {
  return (
    <div className="display-menu">
      <h3>Top Picked Items</h3>
      <div>
        {props.food_collection.map((food) => (
          <FoodCard key={food._id}  food={food} />
        ))}
      </div>
    </div>
  );
};

export default DisplayMenu;
