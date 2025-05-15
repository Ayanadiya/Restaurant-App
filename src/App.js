import { Fragment} from "react/jsx-runtime";
import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {
  const [isVisibleCart, setIsVisibleCart]= useState(false)
  
  const openCartHandler=()=>setIsVisibleCart(true);

  const closeCartHandler=()=> setIsVisibleCart(false);

  return (
    <Fragment>
      {isVisibleCart && <Cart onClose={closeCartHandler}/>}
      <Header onOpen={openCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
