import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const cartToggleHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
      <button onClick={cartToggleHandler} className={classes.button}>
        <span>My Cart</span>
        <span className={classes.badge}>{totalQuantity}</span>
      </button>
  );
};

export default CartButton;
