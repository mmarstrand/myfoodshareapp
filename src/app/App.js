import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "../pages/Cards";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <div>Marketplace</div>
        <div>Save these items</div>
        <Switch>
          <Route path="/marketplace" exact component={Cards} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
