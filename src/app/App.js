import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "../pages/Cards";
import Header from "../components/Header";
import CreateCard from "../components/Card";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path="/marketplace" exact component={Cards} />
          <Route path="/share" exact component={CreateCard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
