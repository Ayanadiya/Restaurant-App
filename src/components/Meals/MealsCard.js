import React from "react";
import classes from './MealsCard.module.css'
import Card from '../UI/Card'
import Addform from "./AddForm";
const MealsCard=(props)=>{
    return(
        <Card className={classes.main}>
           <div className={classes.action}>
            <div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h3 className={classes.price}>${props.price}</h3>
            </div>
            <Addform/>
            </div> 
        </Card>
    )
}

export default MealsCard;