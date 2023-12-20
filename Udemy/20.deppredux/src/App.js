import { useSelector , useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/Shop/Notification';
import { useEffect } from 'react';
import { viewActions }  from './store/redux';

let initalFetch = true;

// 장바구니 등록
function App() {
  const CartData = useSelector(state => state.cartProduct);
  const notification = useSelector(state => state.cartView.notification)

  // console.log(notification);

  const dispatch = useDispatch();

  useEffect(()=>{

    const connect = async() => {
      dispatch(viewActions.showNotification({
        status : 'pending',
        title : 'Sending...',
        message : 'Sending Card Data...'
      }))

      const response = await fetch('https://redux-4237c-default-rtdb.firebaseio.com/Cart.json',{
          method : 'PUT',
          headers : {
            'ConText-Type' : 'application/json'
          },
          body : JSON.stringify(CartData)
      });

      if(!response.ok){
          throw new Error('error!!');
      }

      dispatch(viewActions.showNotification({
        status : 'success',
        title : 'Success Data',
        message : 'Complete!'
      }))
    }

    if(initalFetch){
      initalFetch = false;
      return;
    }

    connect().catch(error => {
      dispatch(viewActions.showNotification({
        status : 'error',
        title : 'Connect Error!!',
        message : 'Error!!'
      }))
    });

  },[CartData , dispatch]);

  // console.log(notification.status);
  
  // console.log(CartData);
  return (
    <>
      {notification && <Notification 
          status={notification.status} title={notification.title} message={notification.message}
      />}

      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;
