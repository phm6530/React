import { createStore } from 'redux';

export const INCREMENT = 'increment';
export const TOGGLE = 'toggle';
export const DECREMENT = 'decrement';

//리듀서를 스토어에 등록하고 스토어를 구독한다라는 개념
const initalData = {
    count : 0,
    showCounter  : false
}

//리듀서 설정
const counterReducer = (state = initalData , action) =>{

    if(action.type === INCREMENT){
        return {
            ...state ,  count : state.count + action.amount
        }
    }

    if(action.type === DECREMENT){
        return {
            ...state  , count : state.count - 1
        }
    }

    if(action.type === TOGGLE){
        return{
            ...state , showCounter : !state.showCounter
        }
    }

    return state;
}

//스토어 등록
const store = createStore(counterReducer);


//구독 설정
const counterStore = () =>{
    const latestState = store.getState();
    return latestState
}


store.subscribe(counterStore);

export default store;
