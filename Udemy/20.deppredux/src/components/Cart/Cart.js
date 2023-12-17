import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';



const Cart = (props) => {
  const cartItems = useSelector(state => state.cartProduct.cart);

  const cartCounter = Object.values(cartItems);

  console.log(cartCounter)


  return (
    <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
        {cartCounter.length === 0 ? '등록된 상품이 없습니다' : '' }
        {cartCounter.map((e)=>{
                return <CartItem 
                  key={e.id}
                  item={e} 
              />
        })}
        
        </ul>
    </Card>
  );
};

export default Cart;
