import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "liveChat",
    initialState: {
        activeVideo: {
            videoId: "",
            messages: [],
        },
    },
    reducers: {
        setActiveVideoId: (state, action) => {
            state.activeVideo.videoId = action.payload;
        },
        setActiveVideoMessages: (state, action) => {
            state.activeVideo.messages = action.payload;
        },

        setIncomingVideoMessage: (state, action) => {
            state.activeVideo.messages = [
                action.payload,
                ...state.activeVideo.messages,
            ];
        },
    },
});

export default chatSlice.reducer;
export const {
    setActiveVideoId,
    setActiveVideoMessages,
    setIncomingVideoMessage,
} = chatSlice.actions;
