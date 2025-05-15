import React, {useState} from "react";
import classes from "./AddForm.module.css"

const Addform=(props)=>{
    const [count, setCount]=useState(1);
    const amountChangeHandler=(event)=>setCount(event.target.value);
    const submitHandler=(event)=>{
        event.preventDefault();
        props.onAddToCart(count);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="number" value={count} id="amount" name="amount" onChange={amountChangeHandler}/>
            </div>
            <button type="submit" className={classes.button}>+Add</button>
        </form>
    )
}

export default Addform;