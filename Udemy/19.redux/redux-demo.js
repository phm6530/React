const redux = require('redux');

// 리듀서 함수
// 2개의 매개변수를 받음 useReducer와 비슷함 state, 
const counterReducer = (state = { count : 0 }, action) => {
    if(action.type === 'increment'){
        return {
            count : state.count + 1
        }
    }
    if(action.type === 'decrement'){
        return {
            count : state.count - 1
        }
    }

    return state;
};

const store = redux.createStore(counterReducer);

// 구독
const counterSubsciption = () =>{
    const latestState = store.getState();
    console.log(latestState);
}


store.subscribe(counterSubsciption);

// 호출
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });