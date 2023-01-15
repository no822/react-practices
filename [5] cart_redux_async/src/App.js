import {useEffect, useLayoutEffect} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from "react-redux";
import {uiActions} from "./store/uiSlice";
import {cartActions} from "./store/cartSlice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(status => status.ui.notification);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(uiActions.initialNotification());
    }, 3000);

    return () => clearTimeout(timeOut);
  }, [dispatch]);

  useEffect(() => {
    async function fetchCartData() {
      const response = await fetch(process.env.REACT_APP_CART);
      if (!response.ok) {
        throw new Error('fetch data failed');
      }
      const body = await response.json();
      dispatch(cartActions.replaceCart({
        items: body.items || [],
        totalQuantity: body.totalQuantity
      }))
    }

    fetchCartData().catch(e => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    })
  }, [dispatch])

  useEffect(() => {
    async function sendCartData() {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data!'
      }))

      const response = await fetch(process.env.REACT_APP_CART, {
        method: 'PATCH',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity
        })
      })

      if (!response.ok) {
        throw new Error('failed send chart data!');
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }))
    }

    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      sendCartData().catch(e => {
        dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        }))
      })
    }
  }, [cart, dispatch])

  return (
      <>
        {notification && <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
        />}
        <Layout>
          {cartIsVisible && <Cart/>}
          <Products/>
        </Layout>
      </>
  );
}

export default App;
