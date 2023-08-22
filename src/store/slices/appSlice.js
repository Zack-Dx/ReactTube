import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarVisible: true,
    sectionSelected: "All",
  },
  reducers: {
    toggleSideBarDisplay: (state) => {
      state.isSideBarVisible = !state.isSideBarVisible;
    },
    closeSideBarDisplay: (state) => {
      state.isSideBarVisible = false;
    },
    selectActiveSection: (state, action) => {
      state.sectionSelected = action.payload;
    },
  },
});

export default appSlice.reducer;
export const {
  toggleSideBarDisplay,
  closeSideBarDisplay,
  selectActiveSection,
} = appSlice.actions;
