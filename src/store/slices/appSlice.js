import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarVisible: true,
  },
  reducers: {
    toggleSideBarDisplay: (state) => {
      state.isSideBarVisible = !state.isSideBarVisible;
    },
  },
});

export const { toggleSideBarDisplay } = appSlice.actions;
export default appSlice.reducer;
