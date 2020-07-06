import React, {useState} from 'react'
import './registration.css'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import logoDrawing from "./../assets/logo-image.png";
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import logoText from "./../assets/logo.png";
import Link from "@material-ui/core/Link";


// TODO: submit user info to console
const useStyles = makeStyles((theme) => ({
    paper: {
      border:'1px solid black',
      marginTop: theme.spacing(8), //needed?
      display: "flex",
      flexDirection: "column",
      alignItems: 'center',
      height: "700px", //TODO: set hight to be phone height
    },
    form: {
      width: "80%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
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
    login: {
      position: "absolute",
      bottom: "70px",
    }
  }));
  
  export default function CreateAccount() {
    const classes = useStyles();

    const submitHandler = (event) => {
      event.preventDefault();
      console.log("submitted.")
    }
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
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
                />            
              <TextField
                required
                className={classes.textfield}
                fullWidth
                id="create-password"
                label="Create Password"
                variant="outlined"
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
          <Grid className={classes.login}>Already have an account? <Link href='/'>Log in here.</Link></Grid>
        </div>
      </Container>
    );
  }
