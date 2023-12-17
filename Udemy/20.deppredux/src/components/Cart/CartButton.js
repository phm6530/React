import classes from './CartButton.module.css';

import { useSelector } from 'react-redux'

const CartButton = (props) => {
  const allProductCounter = useSelector(state => state.cartProduct.allProductCounter);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{allProductCounter}</span>
    </button>
  );
};

export default CartButton;
