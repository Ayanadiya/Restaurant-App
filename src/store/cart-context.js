import React from "react";

const CartContext=React.createContext({
    items:[],
    addItem:(item)=>{},
    incrementAmount:(id)=>{},
    decrementAmount:(id)=>{}
});

export default CartContext;

