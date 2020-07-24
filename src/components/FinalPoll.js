import React, { useContext } from "react";
import { PollContext } from "./PollContext";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./poll.module.css";
import logoDrawing from "./../assets/logo-image.png";
import { Link } from "react-router-dom";
import ProgressDotFinished from "./../assets/progress-dot-finished.png";
import vectorLeft from "./../assets/vector-left.png";
import Button from "@material-ui/core/Button";
import axios from "axios";
import home from "./../assets/home.png";
import trending from "./../assets/trending.png";
import profile from "./../assets/profile.png";
import addPoll from "./../assets/addPoll.png";
import { CssBaseline } from "@material-ui/core";

// TODO: Port these styles over to CSS modules
const useStyles = makeStyles((theme) => ({
  category: {
    display: "block",
    border: "1px solid grey",
    margin: "10px",
    padding: "20px",
    borderRadius: "20px",
    width: "280px",
  },
  question: {
    display: "block",
    border: "1px solid grey",
    margin: "10px",
    padding: "20px",
    borderRadius: "20px",
    width: "280px",
  },
  greytext: {
    fontFamily: "Futura",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    marginBottom: "10px",
    marginTop: "20px",
    color: "grey",
    textAlign: "left",
  },
  blacktext: {
    fontFamily: "Futura",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    marginBottom: "10px",
    marginTop: "20px",
    color: "black",
    textAlign: "right",
  },
  options: {
    fontFamily: "Futura",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "16px",
    marginBottom: "7px",
    marginTop: "14px",
    color: "black",
    alignItems: "center",
  },
  questionAndChoices: {
    display: "flex",
    flexDirection: "row",
  },
}));

function LocationPoll() {
  const classes = useStyles();
  const [poll, setPoll] = useContext(PollContext);

  const sendPoll = () => {
    axios
      .post(
        "https://us-central1-curiocity-282815.cloudfunctions.net/create_poll/.json",
        poll
      )
      .then((response) => {
        console.log("it worked!", response);
      })
      .catch((error) => {
        console.log("it failed", error);
      });
  };

  const submitHandler = () => {
    sendPoll();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={styles.paper}>
        <div className={styles.topBar}>
          <Link to="/Poll">
            <img src={home} alt="Home" className={styles.navIcon} />
          </Link>
          <Link to="/Trending">
            <img src={trending} alt="Trending" className={styles.navIcon} />
          </Link>
          <Link to="/StartPoll">
            <img src={addPoll} alt="Add Poll" className={styles.navIcon} />
          </Link>
          <Link to="/Me">
            <img src={profile} alt="Me" className={styles.navIcon} />
          </Link>
        </div>
        <Grid container className={styles.top}>
          <Grid item xs={12}>
            Start a Poll
          </Grid>
        </Grid>
        <div className={styles.progressBar}>
          <Link to="/LocationPoll">
            <img src={vectorLeft} className={styles.vector} alt="" />
          </Link>
          <img
            src={ProgressDotFinished}
            className={styles.progressDot}
            alt=""
          />
          <img
            src={ProgressDotFinished}
            className={styles.progressDot}
            alt=""
          />
          <img
            src={ProgressDotFinished}
            className={styles.progressDot}
            alt=""
          />
          <img
            src={ProgressDotFinished}
            className={styles.progressDot}
            alt=""
          />
          <img
            src={ProgressDotFinished}
            className={styles.progressDot}
            alt=""
          />
        </div>
        <div className={styles.title}>Ready to Post?</div>
        <div className={classes.category}>
          <span className={classes.greytext}>Category:</span>{" "}
          <span className={classes.blacktext}>{poll.category}</span>
        </div>
        <div className={classes.questionAndChoices}>
          <div className={classes.question}>
            <span className={classes.greytext}>Question:</span>{" "}
            <span className={classes.blacktext}>{poll.question}</span>
          </div>
          <div className={classes.options}>
            <TextField
              classes={{ root: classes.options }}
              id="1"
              label="1"
              value={poll.options[0]}
              variant="outlined"
            />
            <TextField
              id="2"
              label="2"
              value={poll.options[1]}
              variant="outlined"
            />
            <TextField
              id="3"
              label="3"
              value={poll.options[2] ? poll.options[2] : ""}
              variant="outlined"
            />
            <TextField
              id="4"
              label="4"
              value={poll.options[3] ? poll.options[3] : ""}
              variant="outlined"
            />
          </div>
        </div>
        <div className={classes.category}>
          <span className={classes.greytext}>Age Range:</span>{" "}
          <span className={classes.blacktext}>
            {poll.age_range[0]} - {poll.age_range[1]} years
          </span>
          <div>
            <span className={classes.greytext}>Mile Radius:</span>{" "}
            <span className={classes.blacktext}>{poll.radius} miles</span>
          </div>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.submit}
          onClick={submitHandler}
        >
          Post
        </Button>
        {/* TODO: Need to make this image not relative and included in border, for all components */}
        <img
          src={logoDrawing}
          width="234px"
          height="140px"
          top="138px"
          alt=""
          className={styles.bottom}
        />
      </div>
    </Container>
  );
}

export default LocationPoll;
