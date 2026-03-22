import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
    name: "CartSlice",
    initialState: {
        items: [],
        count: 0
    },
    reducers: {
        AddItems: (State, action) => {
            State.items.push({ ...action.payload, quantity: 1 });
            State.count++;
        },
        IncrementItems: (State, action) => {
            const element = State.items.find(item => item.id == action.payload.id);
            element.quantity += 1;
            State.count++;

        },
        DecrementItems: (State, action) => {
            const element = State.items.find(item => item.id == action.payload.id);

            if (element.quantity > 1) {
                element.quantity -= 1;
            }
            else {
                State.items = State.items.filter(item => item.id != action.payload.id);
            }
            State.count--;

        }
    }
});

export const { AddItems, IncrementItems, DecrementItems } = cart.actions;
export default cart.reducer;