import app from "firebase/app";
import "firebase/auth";

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

    this.auth = app.auth();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
