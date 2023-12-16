import { configureStore , combineReducers } from '@reduxjs/toolkit'

import counterSlice from './counter'; // Counter
import AuthSlice from './auth'; // Auth 

//스토어 등록 **react-redux 라서 구독 필요없음
// configureStore는 createStore처럼 스토어를 선언하지만 여러가지 리듀서를 합칠수가 있음

// configureStore는 일반 redux에서는 사용 불가한 redux-toolkit
// 
const store = configureStore({
    reducer:{
        counterSlice : counterSlice.reducer ,
        AuthSlice : AuthSlice.reducer ,
    }
});

// 액션 전달해야함 
export const counterActions = counterSlice.actions;
export const authActions = AuthSlice.actions;
export default store;