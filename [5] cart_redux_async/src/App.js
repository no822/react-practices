import {useEffect} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";
import {useSelector, useDispatch} from "react-redux";
import {fetchCart, sendCart} from "./store/cart-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const notification = useSelector(status => status.ui.notification);

  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCart(cart));
    }
  }, [cart, dispatch]);

  return (
      <>
        {notification &&
            <Notification
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
