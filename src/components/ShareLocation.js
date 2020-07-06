import React, {useState, useEffect} from 'react';
import './registration.css'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import logoDrawing from "./../assets/logo-image.png";
import logoText from "./../assets/logo.png";
import Link from "@material-ui/core/Link";
import Geolocation from '@react-native-community/geolocation';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    login: {
        position: "absolute",
        bottom: "70px",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#2EC4B6",
    },
})) 

const getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            console.log(position);
        },
        function(error) {
            console.error("Error Code = " + error.code + " - " + error.message);
        }
    );
  };

export default function ShareLocation() {
    const classes = useStyles();

    return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <p>Progress bar placeholder</p>
            <img src={logoDrawing} width="309px" height="182px" alt=""/>
            <Grid>
                <Grid>Give us your location so we can pair you with 
                    polls in your area!
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={getLocationHandler}>
                        Share my location<img />
                </Button>
                <Link href='/registration-personal-interest'>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Next
                    </Button>
                </Link>
            </Grid>
            <Grid className={classes.login}>Already have an account? <Link href='/'>Log in here.</Link></Grid>
        </div>
    </Container>
    );
}

