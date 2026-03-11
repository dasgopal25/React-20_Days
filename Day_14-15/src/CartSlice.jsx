import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(id => id !== action.payload);
        },
        toggleItem: (state, action) => {
            if (state.items.includes(action.payload)) {
                state.items = state.items.filter(id => id !== action.payload);
            } else {
                state.items.push(action.payload);
            }
        }
    }
});

export const { addItem, removeItem, toggleItem } = cartSlice.actions;
export default cartSlice.reducer;