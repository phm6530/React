import classes from './CartButton.module.css';

import { useSelector , useDispatch } from 'react-redux';
import { viewActions } from '../../store/redux';

const CartButton = (props) => {
  const allProductCounter = useSelector(state => state.cartProduct.allProductCounter);

  
  const dispatch = useDispatch();

  const cartViewHandler = ()=>{
    dispatch(viewActions.view());
  }
  

  return (
    <button className={classes.button} onClick={cartViewHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{allProductCounter}</span>
    </button>
  );
};

export default CartButton;
