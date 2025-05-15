import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState={
    items:[],
    totalAmount:0,
}

const cartReducer=(state,action)=>{
   if(action.type==="add")
   {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingItem = state.items[existingItemIndex];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
   }
   if(action.type==="remove")
   {

   }
   return state
};

const CartProvider= props =>{
    const [cartState, dispatchCartState]=useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler=item =>{
        dispatchCartState({type:"add", item:item})
    };
    const removeItemFromCartHandler=id=>{};
    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider