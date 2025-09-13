import { createSlice } from "@reduxjs/toolkit";

const ReactSlicer = createSlice({
    name: "slice1",
    initialState: { count: 0 },
    reducers: {
        Incerment:(state,action)=>{
            if(action.payload === undefined){
                state.count = state.count+1
            }
            else{
                state.count+=action.payload
            }},
        Decerment: (state)=>{state.count = state.count-1},
        Reset: (state)=>{state.count = 0},
        // Incerment1:(state,action)=>{state.count+=action.payload}
    }
});



export const {Incerment,Decerment,Reset,Incerment1} = ReactSlicer.actions

export default ReactSlicer.reducer