import React from "react";
import classes from './MealsCard.module.css'
import Card from '../UI/Card'
const MealsCard=(props)=>{
    return(
        <Card className={classes.card}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <h3 className={classes.price}>${props.price}</h3>
        </Card>
    )
}

export default MealsCard;