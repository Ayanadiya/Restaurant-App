import React, {useState} from "react";
import classes from "./AddForm.module.css"

const Addform=()=>{
    const [count, setCount]=useState(0);
    return (
        <form className={classes.form}>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="number" value={count} id="amount" name="amount" />
            </div>
            <button type="button" className={classes.button}>+Add</button>
        </form>
    )
}

export default Addform;