import classes from './HeaderCartButton.module.css';
import CartIcon from '../../Icon/CartIcon';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../Context/CartContext';

export default function HeaderCartButton(props){
    const ctx = useContext(CartContext);
    const [ ani , setAni ] = useState(false);
    
    const numberCartItem = ctx.item.reduce((sum , item)=>{
        // console.log('11',item.Amount);
        return sum += item.Amount;
    },0);
    
    useEffect(()=>{
        setAni(true);
        setTimeout(()=>{
            setAni(false);
        },300);
    },[ctx.item]);

    
    const ModalHandler =() =>{
        props.cartBtn(true);
    }
    return(
        <>
            <button className={`${classes.button} ${ani ? classes.bump : ''}`} onClick={ModalHandler}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                
                Your Cart 
                <div className={`${classes.badge}`}>
                    {numberCartItem}
                </div>
            </button>
        </>
    )
}