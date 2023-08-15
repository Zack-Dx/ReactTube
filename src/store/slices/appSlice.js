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
    closeSideBarDisplay: (state) => {
      state.isSideBarVisible = false;
    },
  },
});

export default appSlice.reducer;
export const { toggleSideBarDisplay, closeSideBarDisplay } = appSlice.actions;
