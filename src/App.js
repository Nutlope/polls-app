import React, { Component } from "react";
import SignUp from "./components/SignUp";
import StartPoll from "./components/StartPoll";
import OptionsPoll from "./components/OptionsPoll";
import PersonalInfo from "./components/Registration/PersonalInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAccount from "./components/Registration/CreateAccount";
import ShareLocation from "./components/Registration/ShareLocation";
import PersonalInterest from "./components/Registration/PersonalInterest";
import Poll from "./components/Poll/Poll";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "entertainment",
      title: "Which Wes Anderson Movie should I watch tonight?",
      choices: {
        choiceOne: "The Royal sth",
        choiceTwo: "Moonrise Kingdom",
        choiceThree: "Grand Budapest Hotel",
        choiceFour: "",
      },
      comments: [
        "If you’re fan of animation, go with Isle of Dogs",
        "Grand Budapest Hotel has a great cast!",
      ],
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={SignUp} />
            <Route path='/StartPoll' component={StartPoll} />
            <Route path='/OptionsPoll' component={OptionsPoll} />
            <Route
              path='/Registration-personal-info'
              component={PersonalInfo}
            />
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
            <Route
              path='/Poll'
              render={(props) => (
                <Poll
                  category={this.state.category}
                  title={this.state.title}
                  choices={this.state.choices}
                  comments={this.state.comments}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
