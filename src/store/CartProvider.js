import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState={
    items:[],
}

const cartReducer=(state,action)=>{
   if(action.type==="add")
   {
    let added=false

    let updatedItems=state.items.map((obj)=>{
      if(obj.id===action.item.id)
      {
        obj.amount=obj.amount+action.item.amount;
        added=true;
      }
      return obj;
    });
    if(!added)
    {
      updatedItems=[...state.items, action.item];
    }
    console.log(updatedItems);

    return {
      items: updatedItems,
    };
   }
   if(action.type==="incrementAmount")
   {
      const newItems=state.items.map((obj)=>{
      if(obj.id===action.id)
        {
        obj.amount++
        }
      return obj
    })
    return{
      items:newItems
    }
   }
   if(action.type==="decrementAmount")
   {
      const newItems=state.items.map((obj)=>{
      if(obj.id===action.id)
        {
        obj.amount--
        }
      return obj
    })
    
    return {
      items:newItems,
    }
   }
   return state
};

const CartProvider= props =>{
    const [cartState, dispatchCartState]=useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler=item =>{
        dispatchCartState({type:"add", item:item})
    };
    const incrementItemAmountInCartHandler=id=>{
      dispatchCartState({type:"incrementAmount", id:id})
    };
    const decrementItemAmountInCartHandler=id=>{
      dispatchCartState({type:"decrementAmount", id:id})
    }
    const cartContext={
        items:cartState.items,
        addItem:addItemToCartHandler,
        incrementAmount:incrementItemAmountInCartHandler,
        decrementAmount:decrementItemAmountInCartHandler,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider