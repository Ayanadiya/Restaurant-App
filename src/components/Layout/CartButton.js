import React, {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css"
import CartContext from "../../store/cart-context";
const CartButton=(props)=>{
    const cartCtx=useContext(CartContext)

    const numberOfCartItems=cartCtx.items.reduce((cur,obj)=> cur+Number(obj.amount),0);
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}; 

export default CartButton;