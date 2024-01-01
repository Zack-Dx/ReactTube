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
            state.activeVideo.messages = [];
        },
        setActiveVideoMessages: (state, action) => {
            state.activeVideo.messages = action.payload;
        },
        setIncomingVideoMessage: (state, action) => {
            const { videoId, message } = action.payload;

            if (videoId === state.activeVideo.videoId) {
                if (state.activeVideo.messages.length >= 15) {
                    state.activeVideo.messages.pop();
                }

                state.activeVideo.messages = [
                    message,
                    ...state.activeVideo.messages,
                ];
            }
        },
    },
});

export default chatSlice.reducer;
export const {
    setActiveVideoId,
    setActiveVideoMessages,
    setIncomingVideoMessage,
} = chatSlice.actions;
