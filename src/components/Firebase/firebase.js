import app from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBRPoVM6qrvTn3tWMBb8ygmI4_0qM5vapw",
  authDomain: "bemm-app.firebaseapp.com",
  databaseURL: "https://bemm-app.firebaseio.com",
  projectId: "bemm-app",
  storageBucket: "bemm-app.appspot.com",
  messagingSenderId: "912226027812",
  appId: "1:912226027812:web:fdda9142febe56ac104bb1",
  measurementId: "G-D17N2DE99R",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}

export default Firebase;
