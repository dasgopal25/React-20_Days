import { createSlice } from "@reduxjs/toolkit";

const FoodSlice = createSlice({
    name:"slice2",
    initialState:{count:0},
    reducers:{
        addItem:(state)=>{state.count = state.count+1},
        removeItem:(state)=>{state.count = state.count - 1}
    }
});

export const {addItem,removeItem} = FoodSlice.actions;
export default FoodSlice.reducer;