import React, { useEffect,  useReducer} from 'react';

const CartContext = React.createContext({
    item: [],
    total : 0 ,
    addItem : () => {},
    removeItem : () =>{},
    clearItem : () => {}
})

const reducer = (state, action) =>{
    if(action.type === 'ADD'){
            const findIdx = state.findIndex(item => item.id === action.payload.id);
            if(findIdx === -1){
                return [...state , {...action.payload , total : action.payload.Amount * action.payload.price}]
            }
            else{
                const result = state.map((item , idx) =>{
                    return findIdx === idx 
                    ? {...item , 
                        Amount : item.Amount + action.payload.Amount , 
                        total : item.total +  action.payload.Amount * item.price
                    }
                    : item
                });
                return result;
            }

        } 
        
        else if (action.type === 'DELETE') {
            const findIndex = state.findIndex(item => item.id === action.payload);
            if (findIndex !== -1) {
                const updatedItems = state.map((item, idx) => {
                    return findIndex === idx
                        ? { ...item, Amount: item.Amount - 1, total: (item.Amount - 1) * item.price }
                        : item;
                });
                if (updatedItems[findIndex].Amount === 0) {
                    return updatedItems.filter(item => item.Amount > 0);
                } else {
                    return updatedItems;
                }
            }
        }  else if (action.type === 'RESET') {
            return [];
        } 
        else {
            return state;
        }
}


const CartProvider = (props) =>{
    
    const [MealItem , dispatch] = useReducer(reducer , [])

    const addItemhandelr = (mealData) => {
        dispatch({type: 'ADD' , payload : mealData});
    };
    const removeItemhandelr = (id) => {
        dispatch({type: 'DELETE' , payload : id});
    };

    const  clearItem = () =>{
        dispatch({type: 'RESET'});
    }


    // useEffect(()=>{
    //     const addFetchData = async(data) => {
    //         try{
    //             const response = await fetch('https://foodapp-5016b-default-rtdb.firebaseio.com/')
    //             if(!response.ok){
    //                 throw new Error('Server returned an Error!!');
    //             }
        
    //         }
    //         catch(error){
    //             console.error(error.message);
    //         }
    //         finally{
                
    //         }
    //     }
    // },[]);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        // console.log(MealItem);
    },[MealItem]);

    const totalPrice = MealItem.reduce((sum , value)=>{
        return sum + value.total;
    }, 0);
     

    const CartValue = {
        item : MealItem,
        total : totalPrice.toFixed(2) ,
        addItem : addItemhandelr,
        removeItem : removeItemhandelr,
        clearItem
    }

    return(
        <CartContext.Provider value={CartValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext , CartProvider }