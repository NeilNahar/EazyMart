import { createSlice } from "@reduxjs/toolkit";
import {food_list} from "../assets/assets"

const menuSlice = createSlice({
  name: "menu",
  initialState: food_list,
  reducers: {},
});

export const {} = menuSlice.actions;

export default menuSlice.reducer;
