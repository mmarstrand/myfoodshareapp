import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "../pages/Cards";
import Header from "../components/Header";
import CreateCard from "../pages/CreateCard";
import { getFromLocalStorage, setToLocalStorage } from "../utils/localstorage";
import Footer from "../components/Footer";
import Home from "../pages/Home";

function App() {
  const [inputData, setInputData] = React.useState(
    getFromLocalStorage("inputData") || []
  );
  // console.log(inputData, "newState");

  React.useEffect(() => setToLocalStorage("inputData", inputData), [inputData]);

  function handleCreate(card) {
    setInputData([card, ...inputData]);
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />

          <Route
            path="/marketplace"
            render={props => <Cards inputData={inputData} {...props} />}
          />
          <Route
            path="/share"
            render={props => <CreateCard onCreate={handleCreate} {...props} />}
          />
        </Switch>

        <div style={{ flexGrow: 1 }} />

        <Footer />
      </Router>
    </>
  );
}

export default App;
