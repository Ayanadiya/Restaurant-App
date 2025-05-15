
import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
  const [isVisibleCart, setIsVisibleCart]= useState(false)
  
  const openCartHandler=()=>setIsVisibleCart(true);

  const closeCartHandler=()=> setIsVisibleCart(false);

  return (
    <CartProvider>
      {isVisibleCart && <Cart onClose={closeCartHandler}/>}
      <Header onOpen={openCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
