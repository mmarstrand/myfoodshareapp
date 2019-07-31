import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "../pages/Cards";
import Header from "../components/Header";
import CreateCard from "../pages/CreateCard";
import cardsMockData from "../pages/__mock__/cards.json";

function App() {
  const [inputData, setInputData] = React.useState(cardsMockData);
  console.log(inputData, "newState");

  function handleCreate(card) {
    setInputData([card, ...inputData]);
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route
            path="/marketplace"
            render={props => <Cards inputData={inputData} {...props} />}
          />
          <Route
            path="/share"
            render={props => <CreateCard onCreate={handleCreate} {...props} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
