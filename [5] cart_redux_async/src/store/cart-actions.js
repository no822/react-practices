import {cartActions} from "./cartSlice";
import {uiActions} from "./uiSlice";

// objective: <App /> 컴포넌트에 있는 api 요청 로직을 옮겨오기
export const fetchCart = () => {
  return async function action(dispatch) {
    async function fetchData() {
      const response = await fetch(process.env.REACT_APP_CART);
      if (!response.ok) {
        throw new Error('fetch data failed');
      }
      const body = await response.json();
      return body;
    }

    try {
      const res = await fetchData();
      dispatch(cartActions.replaceCart({
        items: res.items || [],
        totalQuantity: res.totalQuantity
      }));
    } catch (e) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    }
  }
}

export const sendCart = (cart) => {
  return async function action(dispatch) {
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
    };

    try {
      await sendCartData(cart);
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }))
    } catch (e) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    }
  }
}