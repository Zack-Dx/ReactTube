import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";
import chatSlice from "./slices/chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    liveChat: chatSlice,
  },
});

export default store;
