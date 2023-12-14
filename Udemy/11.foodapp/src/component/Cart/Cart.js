import classes from './Cart.module.css';
import Modal from '../Modal/Modal';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem';
import OrderForm from './OrderForm';


export default function Cart(props){
    const [ orderButton , setOrderbutton ] = useState(false);
    const [ callOrderForm , setCallOrderForm ]  = useState(false);
    const ctx = useContext(CartContext);
    const [ submit , setSubmit ] = useState(false);
    
    const submitHandler = () =>{
        setSubmit(true);
    }

    useEffect(() => {
        const orderHandler = () => {
            setOrderbutton(ctx.item.length > 0);
        };
        orderHandler();
    }, [ctx.item]);


    const minusMeal = (id) => {
        ctx.removeItem(id);
    }

    const plusMeal = (item) =>{
        ctx.addItem({...item , Amount : 1})
    }
    
    const cartItem = <ul className={classes['cart-items']}>
            {ctx.item.map((e)=>{
                return <CartItem 
                    key={e.id} 
                    data={e}
                    plus={plusMeal}
                    minus={minusMeal}
                />
            })}            
    </ul>;
    
    const closePopup = () =>{
        props.view(false);
    }


    const CartModalContent  =  
    <>
        {cartItem}
        <div className={classes.total}> 
            <span>Total Amount</span>
            <span>${ctx.total}</span>
        </div>
        
        <div className={classes.actions}>
            <button onClick={closePopup} className={classes['button--alt']}>close</button>
            {orderButton && <button onClick={()=> setCallOrderForm(true)} className={classes.button}>Order</button>}
            
        </div>
        {callOrderForm && orderButton && <OrderForm submit={submitHandler}/>}
    </>;

    const didSubmitModal = 
    <>
        <p>Successful sent the order</p>
        <div className={classes.actions}>
            <button onClick={closePopup} className={classes['button--alt']}>close</button>
        </div>
    </>;

    
    return(
        <Modal view={closePopup}>
           {!submit && CartModalContent}
           {submit && didSubmitModal}
        </Modal>
    )
    
}