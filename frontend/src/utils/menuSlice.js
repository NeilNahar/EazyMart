import { createSlice } from "@reduxjs/toolkit";
import {food_list} from "../assets/assets"

const menuSlice = createSlice({
  name: "menu",
  initialState: food_list,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = menuSlice.actions;

export default menuSlice.reducer;
