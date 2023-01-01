import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {cartAction} from "../../store/cartReducer";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const numberOfProduct = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const toggleCart = () => {
        dispatch(cartAction.toggleCart());
    };
    return (

      <button onClick={toggleCart} className={classes.button}>
        <span>My Cart</span>
        <span className={classes.badge}>{numberOfProduct}</span>
      </button>
    );
};

export default CartButton;
