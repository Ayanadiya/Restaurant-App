import { Fragment } from "react/jsx-runtime";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import classes from "./App.module.css";
function App() {
  return (
    <Fragment>
      <Header/>
      <main className={classes.main}>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
