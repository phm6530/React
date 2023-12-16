import { createStore } from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const COUNTER_TOGGLE = 'COUNTER_TOGGLE';

const initalData = {
    count : 0,
    view : false
}

//리듀서 생성
const counterReducer = (state = initalData, action) =>{
    switch(action.type){
        case INCREMENT :
            return {...state , count : state.count + 1};
        case DECREMENT : 
            return {...state , count : state.count - 1};
        case COUNTER_TOGGLE :
            return {...state , view : !state.view};
        default : 
            return state;
    }
};


//스토어 등록 **react-redux 라서 구독 필요없음
const store = createStore(counterReducer);

export default store;