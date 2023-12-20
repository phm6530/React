import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCart = {
    cart: {},
    total: 0, //가격
    allProductCounter : 0, //전체갯수
};

// 함수로 Total 컨트롤
const updateAllproductCounter = (state) =>{
    const cartObjValue = Object.values(state.cart);

    const productSum = cartObjValue.reduce((sum , item)=> sum += item.count  , 0);
    state.allProductCounter = productSum;
}

const cartViewSlice = createSlice({
    name : 'ui',
    initialState : {view : false , notification : null} ,
    reducers: {
        view(state, action) {
            state.view = !state.view;
        },
        showNotification(state , action){
            state.notification = {
                status : action.payload.status,
                title : action.payload.title,
                message : action.payload.message
            }
        }

    }
});

const cartProductSlice = createSlice({
    name: 'cartProduct',
    initialState: initialCart,
    reducers: {
        addItem(state, action) {
            const item = action.payload;
            if(!state.cart[item.id]){
                state.cart[item.id] = {...item , count : 1 , errorMessage: true };
            }else{
                state.cart[item.id].errorMessage = false
            }
            updateAllproductCounter(state);
        },

        inCrement(state , action) {
            state.cart[action.payload].count ++;

            updateAllproductCounter(state);
        },
        
        deCrement(state, action) {
            const id = action.payload;
            state.cart[id].count--;
            
            if (state.cart[id].count === 0 || state.cart[id].count < 0) {
                const filteredCart = Object.keys(state.cart).reduce((newObj, key) => {
                    if (id !== key) {
                        newObj[key] = state.cart[key];
                    }
                    return newObj;
                }, {});
                state.cart = filteredCart;
            }
            updateAllproductCounter(state);
        }
        
    }
});


const store = configureStore({
    reducer: {
        cartProduct: cartProductSlice.reducer,
        cartView : cartViewSlice.reducer
    }
});

// 모든 액션 크리에이터를 한 객체로 내보내기
export const cartActions = cartProductSlice.actions;
export const viewActions = cartViewSlice.actions;
export default store;