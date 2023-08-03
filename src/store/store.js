import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
