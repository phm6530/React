import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useSelector,  useDispatch } from 'react-redux';
import { cartActions } from '../../store/redux'

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();  
  const cartState = useSelector(state => state.cartProduct);

  const selectProduct = () =>{
    dispatch(cartActions.addItem(props))
  }

  return (
    
    <li className={classes.item}>
      <Card>
        {cartState.cart[props.id] && <p style={{color : '#1ad1b9'}}>장비구니에 추가된 상품입니다.</p>}
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={selectProduct}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
