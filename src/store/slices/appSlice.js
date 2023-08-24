import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarVisible: true,
    sectionSelected: "all",
  },
  reducers: {
    toggleSideBarDisplay: (state) => {
      state.isSideBarVisible = !state.isSideBarVisible;
    },
    closeSideBarDisplay: (state) => {
      state.isSideBarVisible = false;
    },
    selectActiveSection: (state, action) => {
      const section = action.payload.toLowerCase();
      state.sectionSelected = section;
    },
  },
});

export default appSlice.reducer;
export const {
  toggleSideBarDisplay,
  closeSideBarDisplay,
  selectActiveSection,
} = appSlice.actions;
