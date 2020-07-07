import React, {useState} from 'react'
import './registration.css'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import logoDrawing from "./../assets/logo-image.png";
import Link from "@material-ui/core/Link";


// TODO: submit user info to console
const useStyles = makeStyles((theme) => ({
      paper: {
        border:'1px solid black',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: 'center',
        position: "relative",
        height: "700px", //TODO: set hight to be phone height
    },
    login: {
        position: "absolute",
        bottom: "10px",
    },
    everythingElse: {
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        alignItems: 'center',
        top: "5%",
    },
    form: {
      width: "80%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
      display: "flex",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#2EC4B6",
    },
    textfield: {
      display: "flex",
      flexDirection:"column",
      alignItems: "center",
      marginBottom: "10px",
    },

  }));

  const changeHandler = (event) => {
    //userInput = event.target.name;
  };

  const submitHandler = (event) => {
    console.log(event.target.value);
  }
  
  export default function CreateAccount() {
    const classes = useStyles();
    let userInput;

    const submitHandler = (event) => {
      event.preventDefault();
      console.log("submitted.")
    }
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.everythingElse}>
          <p>Progress bar placeholder</p>
          <img src={logoDrawing} width="309px" height="182px" alt=""/>
          <p className='top-para'>Create your log in to join our community!</p>
          <form className={classes.form} onSubmit={submitHandler}>
            <Grid spacing={2}>
                  <TextField
                  className={classes.textfield}
                  required
                  fullWidth
                  autoComplete="email"
                  id="email"
                  label="Email"
                  variant="outlined"
                  onChange={changeHandler}
                />            
              <TextField
                required
                className={classes.textfield}
                fullWidth
                id="create-password"
                label="Create Password"
                variant="outlined"
                onChange={changeHandler}
              />

            </Grid>
          </form>
          <Link href='/registration-share-location'>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}>Next placeholder</Button>
            </Link>
            </div>
          <Grid className={classes.login}>Already have an account? <Link href='/'>Log in here.</Link></Grid>
        </div>
      </Container>
    );
  }
