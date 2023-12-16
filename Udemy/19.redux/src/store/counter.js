import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter : 0,
    view : true
}

// 전역 상태 slice 
// react Toolkit은 Immer 를 포함하고있음
const counterSlice = createSlice({
    name : 'count' ,
    initialState ,
    reducers : {
         increment(state) {
             state.counter ++;
         },
         decrement(state) {
             state.counter --;
         },
         toggleCounter(state) {
             state.view = !state.view;
         },
         increase(state , action){
             state.counter = state.counter += action.payload;
         }
    }
 });
 
 
 export default  counterSlice;