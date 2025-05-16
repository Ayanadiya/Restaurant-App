import { useContext } from 'react';
import classes from './CartListItems.module.css'
import CartContext from '../../store/cart-context';


const CartListItems=props=>{
    const cartCtx=useContext(CartContext);
    const decrementHandler=()=>{
        cartCtx.decrementAmount(props.id);
    }
    const incrementHandler=()=>{
        cartCtx.incrementAmount(props.id);
    }
    return(
        <li className={classes.list}>
            <div>
                <p>{props.name}</p>
                <div className={classes.price}>
                    <div className={classes.priceItem}>
                        <p>${props.price}</p>
                        <button>×{props.amount}</button>
                    </div>
                    <div className={classes.action}>
                        <button type="button" onClick={decrementHandler}>-</button>
                        <button type="button" onClick={incrementHandler}>+</button>
                    </div>
                 </div>
            </div>
            
        </li>
    )
}

export default CartListItems;