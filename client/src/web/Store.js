import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import gallerySlice from "./gallerySlice";
import NewsSlice from "./NewsSlice";

const store = configureStore({
    reducer:{
        gallery:gallerySlice,
        admin:adminSlice,
        news:NewsSlice,
    }
})

export default store