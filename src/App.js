import { Fragment } from "react/jsx-runtime";
import Header from "./components/Layout/Header";
import Summary from "./components/Meals/Summary";
function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Summary/>
      </main>
    </Fragment>
  );
}

export default App;
