import { configureStore } from "@reduxjs/toolkit";
import FoodSlice from "./Slice2";


const Stored = configureStore({
    reducer:{
        slice2:FoodSlice
    }
})
export default Stored;