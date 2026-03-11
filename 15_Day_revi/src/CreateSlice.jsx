import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: 0
    },
    reducers: {
        addItem: (state) => {state.items++},
        removeItem: (state)=>{state.items--}
}
});

 export const {addItem,removeItem}= cartSlice.actions;
 export default cartSlice.reducer;
