import { configureStore } from "@reduxjs/toolkit";
import data from "./ProjectSlice";

const store = configureStore({
    reducer: data.reducer
})

export default store