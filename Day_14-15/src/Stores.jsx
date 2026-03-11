// import { configureStore } from "@reduxjs/toolkit";
// import sliceReduce from "./slice1";

// const store = configureStore({
//     reducer:{
//         slice1:sliceReduce
//     }
// })

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});