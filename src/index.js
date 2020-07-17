import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import Firebase, { FirebaseContext } from "./components/Firebase";

ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseContext.Provider value={new Firebase()}> */}
    <App />
    {/* //</FirebaseContext.Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
