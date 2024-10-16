import { configureStore } from "@reduxjs/toolkit";
import feeds from './features/feeds/feedSlice'


export const store = configureStore({
    reducer: {
        feeds: feeds
    }
})