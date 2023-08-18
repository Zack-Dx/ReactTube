import { createSlice } from "@reduxjs/toolkit";
import { LIVECHAT_COUNT } from "../../data/constants";

const chatSlice = createSlice({
  name: "liveChat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > LIVECHAT_COUNT)
        state.messages.splice(LIVECHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export default chatSlice.reducer;
export const { addMessage } = chatSlice.actions;
