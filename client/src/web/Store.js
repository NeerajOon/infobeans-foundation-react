import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./gallerySlice";
import newsSlice from './NewsSlice';
import placementSlice from "./placementSlice";


const store = configureStore({
    reducer:{
        gallery:gallerySlice,
        news:newsSlice,
        placement:placementSlice
    }
})

export default store;