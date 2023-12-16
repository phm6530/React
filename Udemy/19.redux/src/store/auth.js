import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    isAuth : false
}
// redux 툴킷에서 name initalState reducers 는 고정이다

// redux 툴킷을 쓰는이유?
// 코드 간소화는 물론이고 Immer가 내장되어있음으로 상태의 불변성을 보장한다.

const AuthSlice = createSlice({
    name: 'Auth',
    initialState: initialAuthState, // 여기를 수정합니다.
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        }
    }
});

export default AuthSlice;