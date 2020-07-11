import React, { useState } from "react";
import "./registration.css";
import Button from "@material-ui/core/Button";
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

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Futura",
    border: "1px solid black",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    height: "700px", //TODO: set hight to be phone height
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
    width: "80%",
  },
  login: {
    position: "absolute",
    bottom: "30px",
  },
  everythingElse: {
    display: "flex",
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    top: "5%",
  },
  words: {
    width: "80%",
  },
  share: {
    width: "60%",
    margin: theme.spacing(6, 0, 2),
    backgroundColor: "#2EC4B6",
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

function ShareLocation() {
  const classes = useStyles();
  const [location, setLocation] = useState("");

  const getLocationHandler = (event) => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLocation(position);
        console.log(position);
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.everythingElse}>
          <div className={classes.progressBar}>
            <Link href='/registration-create-account'>
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
              src={ProgressDotFinished}
              className={classes.progressDot}
              alt=''
            />
            <img
              src={ProgressDotUnfinished}
              className={classes.progressDot}
              alt=''
            />
            <Link href='/registration-personal-interest'>
              <img
                type='submit'
                src={vectorRight}
                className={classes.vector}
                alt='Next'
              />
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
            Give us your location so we can pair you with polls in your area!
          </p>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.share}
            onClick={getLocationHandler}
          >
            Share my location
          </Button>
        </div>
        <Grid className={classes.login}>
          Already have an account?&nbsp; <Link href='/'>Log in here.</Link>
        </Grid>
      </div>
    </Container>
  );
}
/**
 * figure out what to do if passing location has error
 */

export default ShareLocation;
