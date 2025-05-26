import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import settingsReducer from "../slices/settingsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    settings: settingsReducer,
    // Add other reducers as needed
  },
});
