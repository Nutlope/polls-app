import React, { Component } from "react";
import SignUp from "./components/SignUp";
import StartPoll from "./components/StartPoll";
import AgesPoll from "./components/AgesPoll";
import OptionsPoll from "./components/OptionsPoll";
import LocationPoll from "./components/LocationPoll";
import FinalPoll from "./components/FinalPoll";
import { RegistrationProvider } from "./components/Registration/RegistrationContext";
import { PollProvider } from "./components/PollContext";
import PersonalInfo from "./components/Registration/PersonalInfo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateAccount from "./components/Registration/CreateAccount";
import ShareLocation from "./components/Registration/ShareLocation";
import PersonalInterest from "./components/Registration/PersonalInterest";
import Poll from "./components/Poll/Poll";
import Me from "./components/Profile/Me";
import Trending from "./components/Trending/Trending";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={SignUp} />
          <PollProvider>
            <Route path="/StartPoll">
              <StartPoll />
            </Route>
            <Route path="/OptionsPoll">
              <OptionsPoll />
            </Route>
            <Route path="/AgesPoll">
              <AgesPoll />
            </Route>
            <Route path="/LocationPoll">
              <LocationPoll />
            </Route>
            <Route path="/FinalPoll">
              <FinalPoll />
            </Route>
          </PollProvider>
          <RegistrationProvider>
            <Route
              path="/registration-personal-info"
              component={PersonalInfo}
            />
            <Route path="/registration-create-account">
              <CreateAccount />
            </Route>
            <Route path="/registration-share-location">
              <ShareLocation />
            </Route>
            <Route path="/registration-personal-interest">
              <PersonalInterest />
            </Route>
            <Route
              path="/Poll"
              render={(props) => (
                <Poll
                  category={this.state.category}
                  title={this.state.title}
                  choices={this.state.choices}
                  comments={this.state.comments}
                />
              )}
            />
            <Route path="/Trending" component={Trending} />
            <Route
              path="/Me"
              component={() => (
                <Me
                  polls={this.state.polls}
                  name={this.state.name}
                  location={this.state.location}
                />
              )}
            />
          </RegistrationProvider>
        </div>
      </Router>
    );
  }
}
