import { cartActions } from '../../store/redux';
import classes from './CartItem.module.css';
import { useSelector, useDispatch } from 'react-redux'

const CartItem = (props) => {
  const { title, count, price , id} = props.item;
  const state = useSelector(state => state.cartProduct);
  console.log('cart Item :', state.allProductCounter);
  
  const dispatch = useDispatch();

  const inCrement = () =>{
      dispatch(cartActions.inCrement(id))
  }

  const deCrement = () =>{
      dispatch(cartActions.deCrement(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price.toFixed(2) * count}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{count}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={deCrement}>-</button>
          <button onClick={inCrement}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
