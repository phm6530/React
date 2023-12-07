import classes from './HeaderCartButton.module.css';
import CartIcon from '../../Icon/CartIcon';

export default function HeaderCartButton(props){

    const ModalHandler =() =>{
        props.cartBtn(true);
    }
    return(
        <>
            <button className={`${classes.button}  ${classes.bump}`} onClick={ModalHandler}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                
                Your Cart 
                <div className={`${classes.badge}`}>1</div>
            </button>
        </>
    )
}