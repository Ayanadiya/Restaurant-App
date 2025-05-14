import React from "react";
import MealsCard from "./MealsCard";
import classes from "./MealsList.module.css"
import Card from "../UI/Card";

const DUMMY_MEAL=[
    {
    id: 'i1',
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese in rich creamy tomato gravy',
    price: 12.99,
  },
  {
    id: 'i2',
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice with spiced chicken layers',
    price: 14.5,
  },
  {
    id: 'i3',
    name: 'Masala Dosa',
    description: 'Crispy rice crepe with spiced potato filling',
    price: 9.75,
  },
  {
    id: 'i4',
    name: 'Chole Bhature',
    description: 'Spicy chickpeas served with fluffy fried bread',
    price: 10.25,
  },
  {
    id: 'i5',
    name: 'Rajma Chawal',
    description: 'Kidney beans curry served with steamed rice',
    price: 8.99,
  },
  {
    id: 'i6',
    name: 'Tandoori Chicken',
    description: 'Char-grilled chicken marinated in yogurt and spices',
    price: 13.5,
  }
    ]

const MealsList=()=>{
    return (

        <ul className={classes.card}>
            {(DUMMY_MEAL || []).map((meal)=>{
                return <MealsCard
                key={meal.id} 
                name={meal.name}
                description={meal.description}
                price={meal.price}
                />
            })}
        </ul>

    )
}

export default MealsList;