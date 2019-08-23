import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "../pages/Cards";
import CreateCard from "../pages/CreateCard";
import { getFromLocalStorage, setToLocalStorage } from "../utils/localstorage";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import styled from "styled-components";
import Basket from "../pages/Basket";
import mockData from "../pages/__mock__/cards.json";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [inputData, setInputData] = React.useState(
    getFromLocalStorage("inputData") || mockData
  );

  console.log(inputData);

  React.useEffect(() => setToLocalStorage("inputData", inputData), [inputData]);

  const [showTakenItems, setShowTakenItems] = React.useState();

  function handleToggleTaken(id) {
    //console.log(id);
    const index = inputData.findIndex(input => input._id === id);
    const input = inputData[index];

    const newInputData = inputData.slice();
    newInputData[index] = { ...input, taken: !input.taken };
    setInputData(newInputData);
  }

  function handleCreate(card) {
    setInputData([card, ...inputData]);
  }

  function handleShowTakenItems() {
    setShowTakenItems(!showTakenItems);
  }

  function handleDelete(id) {
    const index = inputData.findIndex(input => input._id === id);
    const Delete = prompt("Are you sure you want to delete it? (yes/no)");
    if (Delete === "yes") {
      setInputData([
        ...inputData.slice(0, index),
        ...inputData.slice(index + 1)
      ]);
    }
  }

  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/marketplace"
            render={props => (
              <Cards
                inputData={inputData}
                onToggleGet={handleToggleTaken}
                onShowTakenItems={handleShowTakenItems}
                showTakenItems={showTakenItems}
                onDelete={handleDelete}
                {...props}
              />
            )}
          />
          <Route
            path="/share"
            render={props => <CreateCard onCreate={handleCreate} {...props} />}
          />
          <Route
            path="/basket"
            render={props => (
              <Basket inputData={inputData} onDelete={handleDelete} />
            )}
          />
        </Switch>
        <Footer />
      </Grid>
    </Router>
  );
}

export default App;
