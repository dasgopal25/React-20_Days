import { configureStore } from "@reduxjs/toolkit";
import slicer1reducer from "./Slice1";

const Stores = configureStore({
    reducer:{
        slice1:slicer1reducer, 
    }
})

export default Stores;
