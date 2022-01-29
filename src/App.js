import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// components
import HomePage from "./pages/homepage/Homepage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
