import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "../pages/Cards";
import Header from "../components/Header";
import CreateCard from "../pages/CreateCard";
import { getFromLocalStorage, setToLocalStorage } from "../utils/localstorage";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
  width: 100vw;
  height: 100vh;
`;

const ContentContainer = styled.div`
  overflow-y: auto;
`;

function App() {
  const [inputData, setInputData] = React.useState(
    getFromLocalStorage("inputData") || []
  );
  // console.log(inputData, "newState");

  React.useEffect(() => setToLocalStorage("inputData", inputData), [inputData]);

  const [showTakenItems, setShowTakenItems] = React.useState();

  function handleToggleTaken(id) {
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

  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <Header />
        <ContentContainer>
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
                  {...props}
                />
              )}
            />
            <Route
              path="/share"
              render={props => (
                <CreateCard onCreate={handleCreate} {...props} />
              )}
            />
            <Route path="/basket" />
          </Switch>
        </ContentContainer>
        <Footer />
      </Grid>
    </Router>
  );
}

export default App;
