import { configureStore } from '@reduxjs/toolkit'
import menuReducer from "./menuSlice";
import foodCartReducer from "./foodCartSlice"

export const store = configureStore({
  reducer: {menu:menuReducer, foodCart:foodCartReducer},
})