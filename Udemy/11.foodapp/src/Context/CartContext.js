import React from 'react';

const CartContext = React.createContext({
    item: [],
    addItem : () => {},
    removeItem : () =>{}
})


const CartProvider = (props) =>{

    const addItemhandelr = () =>{

    };

    const removeItemhandelr = () =>{
        
    };


    const CartValue = {
        item : [],
        total : 0 ,
        addItem : addItemhandelr,
        removeItem : removeItemhandelr
    }

    return(
        <CartContext.Provider value={CartValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext , CartProvider }