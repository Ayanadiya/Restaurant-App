import React, {useContext} from "react";
import classes from './MealsCard.module.css'
import Card from '../UI/Card'
import Addform from "./AddForm";
import CartContext from "../../store/cart-context";
const MealsCard=(props)=>{
    const cartCtx=useContext(CartContext);
    const addItemHandler=(amount)=>{
         cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }
    return(
        <Card className={classes.main}>
           <div className={classes.action}>
            <div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h3 className={classes.price}>${props.price}</h3>
            </div>
            <Addform onAddToCart={addItemHandler}/>
            </div> 
        </Card>
    )
}

export default MealsCard;