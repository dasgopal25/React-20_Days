import { createSlice } from "@reduxjs/toolkit";

const FoodSlice = createSlice({
    name:"slice2",
    initialState:{count:0},
    reducers:{
        addItem:(state)=>{state.count++},
        removeItem:(state)=>{state.count--}
    }
});

export const {addItem,removeItem} = FoodSlice.actions;
export default FoodSlice.reducer;