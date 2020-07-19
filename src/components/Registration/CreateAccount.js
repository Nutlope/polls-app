import React, { useState, useContext } from "react";
import { RegistrationContext } from "./RegistrationContext";
import "./registration.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logoDrawing from "./../../assets/logo-image.png";
import { Link } from "react-router-dom";
import ProgressDotUnfinished from "./../../assets/progress-dot-unfinished.png";
import ProgressDotFinished from "./../../assets/progress-dot-finished.png";
import vectorLeft from "./../../assets/vector-left.png";
import vectorRight from "./../../assets/vector-right.png";

// TODO: submit user info to console
const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Futura",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    height: "700px", //TODO: set hight to be phone height
  },
  login: {
    position: "absolute",
    bottom: "30px",
  },
  everythingElse: {
    //border: "1px solid green",
    display: "flex",
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    top: "5%",
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#2EC4B6",
  },
  topPara: {
    fontFamily: "Futura",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "22px",
    /* or 122% */

    textAlign: "center",
    letterSpacing: "0.3px",
    textTransform: "capitalize",

    color: "#707070",
  },
  textfield: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
    fontFamily: "Futura",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "10px",
    /* identical to box height, or 119% */

    alignItems: "center",
    letterSpacing: "0.15px",

    /* text / secondary | 54p */

    color: "rgba(0, 0, 0, 0.54)",

    /* Inside Auto Layout */
    flex: "none",
    order: 0,
    alignSelf: "center",
    margin: "0px 0px",
  },
  progressBar: {
    display: "flex",
    justifyContent: "spaces-between",
  },
  progressDot: {
    marginTop: "4px",
    marginLeft: "15px",
    marginRight: "15px",
    width: "11.78px",
    height: "12px",
    left: "239px",
  },
  vector: {
    marginLeft: "35px",
    marginRight: "35px",
  },
}));

export default function CreateAccount() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [person, setPerson] = useContext(RegistrationContext);

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    person.email = email;
    person.pword = password;
    setPerson(person);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.everythingElse}>
          <div className={classes.progressBar}>
            <Link to='/registration-personal-info'>
              <img src={vectorLeft} className={classes.vector} alt='Back' />
            </Link>
            <img
              src={ProgressDotFinished}
              className={classes.progressDot}
              alt=''
            />
            <img
              src={ProgressDotFinished}
              className={classes.progressDot}
              alt=''
            />
            <img
              src={ProgressDotUnfinished}
              className={classes.progressDot}
              alt=''
            />
            <img
              src={ProgressDotUnfinished}
              className={classes.progressDot}
              alt=''
            />
            <Link to='/registration-share-location' onClick={submitHandler}>
              <img src={vectorRight} className={classes.vector} alt='Next' />
            </Link>
          </div>
          <img
            src={logoDrawing}
            width='234px'
            height='140px'
            top='138px'
            alt=''
          />

          <p className={classes.topPara}>
            Create your log in to join our community!
          </p>
          <form className={classes.form}>
            <TextField
              className={classes.textfield}
              required
              fullWidth
              autoComplete='email'
              id='email'
              label='Email'
              variant='outlined'
              onChange={changeEmailHandler}
            />
            <TextField
              required
              className={classes.textfield}
              fullWidth
              id='create-password'
              label='Create Password'
              variant='outlined'
              onChange={changePasswordHandler}
            />
          </form>
        </div>
        <Grid className={classes.login}>
          Already have an account?&nbsp;<Link to='/'>Log in here.</Link>
        </Grid>
      </div>
    </Container>
  );
}
