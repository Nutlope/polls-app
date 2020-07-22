import React, { Component } from "react";
import SignUp from "./components/SignUp";
import StartPoll from "./components/StartPoll";
import OptionsPoll from "./components/OptionsPoll";
import { RegistrationProvider } from "./components/Registration/RegistrationContext";
import PersonalInfo from "./components/Registration/PersonalInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateAccount from "./components/Registration/CreateAccount";
import ShareLocation from "./components/Registration/ShareLocation";
import PersonalInterest from "./components/Registration/PersonalInterest";
import Poll from "./components/Poll/Poll";
import Me from "./components/Profile/Me";
import Comments from "./components/Poll/CommentsExpanded";
import Trending from "./components/Trending/Trending";

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
      name: "Jane Doe",
      location: "Atlanta, GA",
      polls: {
        //only need id
        posted: [
          {
            category: "politics",
            title: "Should JHU install a private police force",
            choices: {
              choiceOne: "yes",
              choiceTwo: "no",
              choiceThree: "",
              choiceFour: "",
            },
            results: {
              choiceOne: "53",
              choiceTwo: "47",
              choiceThree: "",
              choiceFour: "",
            },
          },
        ],
        saved: [
          {
            category: "fashion",
            title: "Which pair should I buy?",
            choices: {
              choiceOne: "img 1",
              choiceTwo: "img 2",
              choiceThree: "img 3",
              choiceFour: "",
            },
            results: {
              choiceOne: "23",
              choiceTwo: "50",
              choiceThree: "27",
              choiceFour: "",
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <Router>
        <div>
          <RegistrationProvider>
            <Switch>
              <Route path='/' exact component={SignUp} />
              <Route path='/StartPoll' component={StartPoll} />
              <Route path='/OptionsPoll' component={OptionsPoll} />

              <Route path='/registration-personal-info'>
                <PersonalInfo />
              </Route>

              <Route path='/registration-create-account'>
                <CreateAccount />
              </Route>

              <Route path='/registration-share-location'>
                <ShareLocation />
              </Route>

              <Route path='/registration-personal-interest'>
                <PersonalInterest />
              </Route>

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

              <Route path='/Trending' component={Trending} />

              <Route
                path='/Me'
                render={(props) => (
                  <Me
                    polls={this.state.polls}
                    name={this.state.name}
                    location={this.state.location}
                  />
                )}
              />
            </Switch>
          </RegistrationProvider>
        </div>
      </Router>
    );
  }
}
