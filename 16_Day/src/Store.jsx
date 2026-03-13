import { configureStore } from "@reduxjs/toolkit";
import SliceReducer from "./SliceFile"

const stores = configureStore({
    reducer:{
        Slice:SliceReducer
    }
}) 

export default stores;