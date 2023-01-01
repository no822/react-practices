import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useSelector} from "react-redux";

const Products = (props) => {
    const orderItems = useSelector(state => state.cart.productItems);
    return (
       <section className={classes.products}>
         <h2>Buy your favorite products</h2>
         <ul>
           {orderItems.map(item => {
             return (
                 <ProductItem
                     key={item.id}
                     id={item.id}
                     title={item.title}
                     price={item.price}
                     description={item.description}
                 />
             )
           })}
         </ul>
       </section>
    );
};

export default Products;
