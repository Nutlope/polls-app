import React from "react";
import SignUp from "./components/SignUp";
import StartPoll from "./components/StartPoll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/StartPoll" component={StartPoll} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
