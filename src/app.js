import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
