import React, { useState, useContext, useEffect } from "react";
import { PollContext } from "./PollContext";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Divider from "@material-ui/core/Divider";
import "./general.css";
import logoDrawing from "./../assets/logo-image.png";
import { Link } from "react-router-dom";
import ProgressDotUnfinished from "./../assets/progress-dot-unfinished.png";
import ProgressDotFinished from "./../assets/progress-dot-finished.png";
import vectorLeft from "./../assets/vector-left.png";
import vectorRight from "./../assets/vector-right.png";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import LocationSlider from "./Util/LocationSlider";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    backgroundColor: "#2EC4B6",
    marginTop: "40px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 320,
  },
  root: {
    width: 500,
  },
  title: {
    marginTop: "30px",
    fontFamily: "Futura",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    marginBottom: "10px",
  },
  top: {
    marginTop: "35px",
    textAlign: "center",
    padding: "10px",
    fontFamily: "Futura",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "24px",
    backgroundColor: "#E3E3E3",
    borderBottom: "0.6px solid grey",
    borderTop: "0.5px solid grey",
  },
  bottom: {
    position: "relative",
    bottom: "30px",
  },
  progressBar: {
    marginTop: "23px",
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
  button: {
    margin: "12px",
    fontWeight: "bold",
    fontFamily: "Futura",
    textAlign: "left",
    color: "grey",
  },
  addButton: {
    marginTop: "20px",
  },
  submit: {
    backgroundColor: "#2EC4B6",
  },
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

  console.log("This is the poll on the last page", poll);

  const submitHandler = () => {
    sendPoll();
  };

  // delete
  useEffect(() => {
    console.log("The poll is: ", poll);
    sendPoll();
  }, []);

  return (
    <>
      <Grid container className={classes.top}>
        <Grid item xs={12}>
          Start a Poll
        </Grid>
      </Grid>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <div className={classes.progressBar}>
            <Link to="/LocationPoll">
              <img src={vectorLeft} className={classes.vector} />
            </Link>
            <img src={ProgressDotFinished} className={classes.progressDot} />
            <img src={ProgressDotFinished} className={classes.progressDot} />
            <img src={ProgressDotFinished} className={classes.progressDot} />
            <img src={ProgressDotFinished} className={classes.progressDot} />
            <img src={ProgressDotFinished} className={classes.progressDot} />
          </div>
          <div className={classes.title}>Ready to Post?</div>
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
            className={classes.submit}
            onSubmit={submitHandler}
          >
            Post
          </Button>
          <img
            src={logoDrawing}
            width="234px"
            height="140px"
            top="138px"
            alt=""
            className={classes.bottom}
          />
        </div>
      </Container>
    </>
  );
}

export default LocationPoll;
