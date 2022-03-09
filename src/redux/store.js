import { configureStore } from "@reduxjs/toolkit";
import navTogglerReducer from "./navToggleSlice";

export const store = configureStore({
  reducer: {
    navToggler : navTogglerReducer
  },
})