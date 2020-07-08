import React from "react";
import SignUp from "./components/SignUp";
import StartPoll from "./components/StartPoll";
<<<<<<< HEAD
=======
import OptionsPoll from "./components/OptionsPoll";
>>>>>>> 63287448d8333ff9e4127b5d9785a13fab61a867
import PersonalInfo from "./components/Registration/PersonalInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAccount from "./components/Registration/CreateAccount";
import ShareLocation from "./components/Registration/ShareLocation";
import PersonalInterest from "./components/Registration/PersonalInterest";
import Poll from "./components/Poll/Poll";

function App() {
  return (
    <Router>
      <div>
        <Switch>
<<<<<<< HEAD
          <Route path='/' exact component={SignUp} />
          <Route path='/StartPoll' component={StartPoll} />
          <Route path='/Registration-personal-info' component={PersonalInfo} />
          <Route
            path='/Registration-create-account'
            component={CreateAccount}
          />
          <Route
            path='/Registration-share-location'
            component={ShareLocation}
          />
          <Route
            path='/Registration-personal-interest'
            component={PersonalInterest}
          />
          <Route path='/Poll' component={Poll} />
=======
          <Route path="/" exact component={SignUp} />
          <Route path="/StartPoll" component={StartPoll} />
          <Route path="/OptionsPoll" component={OptionsPoll} />
          <Route path="/Registration-personal-info" component={PersonalInfo} />
          <Route
            path="/Registration-create-account"
            component={CreateAccount}
          />
          <Route
            path="/Registration-share-location"
            component={ShareLocation}
          />
          <Route
            path="/Registration-personal-interest"
            component={PersonalInterest}
          />
          <Route path="/Poll" component={Poll} />
>>>>>>> 63287448d8333ff9e4127b5d9785a13fab61a867
        </Switch>
      </div>
    </Router>
  );
}

export default App;
