import {createSlice} from "@reduxjs/toolkit"
const reactSlicer = createSlice({
  name:"slice1",
  initialState:{count:0},
  reducers:{
    Increase : (state)=> {state.count+=1},
    Decrease : (state)=> {state.count-=1},
    Reset : (state)=> {state.count=0},
    customIncreaser:(state,action) =>{state.count+=action.payload}
  }
});
export const {Increase,Decrease,Reset,customIncreaser} = reactSlicer.actions
export default reactSlicer.reducer;