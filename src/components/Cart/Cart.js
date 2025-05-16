import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css"
import CartContext from "../../store/cart-context";
import CartListItems from "./CartListItems";

const Cart=props =>{
    const cartCtx=useContext(CartContext);
    const cartitems=<ul className={classes['cart-items']}>{cartCtx.items.map((item)=><CartListItems 
        key={item.id}
        id={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        />)}</ul>;
    const totalAmount=cartCtx.items.reduce((acc,item)=>acc+(item.amount*item.price),0);
    return <Modal onClose={props.onClose}>
        {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
};

export default Cart;