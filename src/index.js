import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import Firebase, { FirebaseContext } from "./components/Firebase";
{
  /* <FirebaseContext.Provider value={new Firebase()}> */
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
