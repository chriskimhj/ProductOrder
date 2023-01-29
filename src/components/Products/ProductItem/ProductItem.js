import { useContext } from 'react';
import classes from './ProductItem.module.css';
import ProductItemForm from './ProductItemForm';
import CartContext from '../../../store/cart-context';

const ProductItem = props => {

    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return <li>
        <div className={classes.product}>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <ProductItemForm id={props.id} onAddToCart={addToCartHandler}></ProductItemForm>
        </div>
    </li>
};

export default ProductItem;