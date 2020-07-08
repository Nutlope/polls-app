import React, { useState } from "react";
import "./registration.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logoDrawing from "./../../assets/logo-image.png";
import Link from "@material-ui/core/Link";
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
    //border: "1px solid pink",
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
<<<<<<< HEAD
    fontSize: "16px",
=======
    fontSize: "18px",
>>>>>>> 63287448d8333ff9e4127b5d9785a13fab61a867
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
    alignItems: "center",
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
    marginTop: theme.spacing(0.3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: "11.78px",
    height: "12px",
    left: "239px",
    top: "101px",
  },
  vector: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
}));

const changeHandler = (event) => {
  //userInput = event.target.name;
};

const submitHandler = (event) => {
  console.log(event.target.value);
};

export default function CreateAccount() {
  const classes = useStyles();
<<<<<<< HEAD
=======
  let userInput;
>>>>>>> 63287448d8333ff9e4127b5d9785a13fab61a867

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted.");
  };

  return (
<<<<<<< HEAD
    <Container component='main' maxWidth='xs'>
=======
    <Container component="main" maxWidth="xs">
>>>>>>> 63287448d8333ff9e4127b5d9785a13fab61a867
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.everythingElse}>
          <div className={classes.progressBar}>
<<<<<<< HEAD
            <Link href='/registration-personal-info'>
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
            <Link href='/registration-share-location'>
              <img
                type='submit'
                src={vectorRight}
                className={classes.vector}
                alt='Next'
              />
=======
            <Link href="/registration-personal-info">
              <img src={vectorLeft} className={classes.vector} />
            </Link>
            <img src={ProgressDotFinished} className={classes.progressDot} />
            <img src={ProgressDotFinished} className={classes.progressDot} />
            <img src={ProgressDotUnfinished} className={classes.progressDot} />
            <img src={ProgressDotUnfinished} className={classes.progressDot} />
            <Link href="/registration-share-location">
              <img type="submit" src={vectorRight} className={classes.vector} />
>>>>>>> 63287448d8333ff9e4127b5d9785a13fab61a867
            </Link>
          </div>
          <img
            src={logoDrawing}
<<<<<<< HEAD
            width='234px'
            height='140px'
            top='138px'
            alt=''
          />

          <p className={classes.topPara}>
            Create your log in to join our community!
          </p>
=======
            width="234px"
            height="140px"
            top="138px"
            alt=""
          />

          <p className="topPara">Create your log in to join our community!</p>
>>>>>>> 63287448d8333ff9e4127b5d9785a13fab61a867

          <form className={classes.form} onSubmit={submitHandler}>
            <TextField
              className={classes.textfield}
              required
              fullWidth
<<<<<<< HEAD
              autoComplete='email'
              id='email'
              label='Email'
              variant='outlined'
=======
              autoComplete="email"
              id="email"
              label="Email"
              variant="outlined"
>>>>>>> 63287448d8333ff9e4127b5d9785a13fab61a867
              onChange={changeHandler}
            />
            <TextField
              required
              className={classes.textfield}
              fullWidth
<<<<<<< HEAD
              id='create-password'
              label='Create Password'
              variant='outlined'
=======
              id="create-password"
              label="Create Password"
              variant="outlined"
>>>>>>> 63287448d8333ff9e4127b5d9785a13fab61a867
              onChange={changeHandler}
            />
          </form>
        </div>
        <Grid className={classes.login}>
<<<<<<< HEAD
          Already have an account? <Link href='/'>Log in here.</Link>
=======
          Already have an account? <Link href="/">Log in here.</Link>
>>>>>>> 63287448d8333ff9e4127b5d9785a13fab61a867
        </Grid>
      </div>
    </Container>
  );
}

/**
 * check: if type='submit' here is doing its job
 */
