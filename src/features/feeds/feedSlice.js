import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    feeds: [],
    likes: 62,
    showComment: false,
    isLiked: false,
    isLoading: false,
};

const feedSlice = createSlice({
    name: 'feed',
    initialState,
})

export default feedSlice.reducer


