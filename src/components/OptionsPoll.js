import React, { useState, useContext } from "react";
import { PollContext } from "./PollContext";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import "./general.css";
import logoDrawing from "./../assets/logo-image.png";
import { Link } from "react-router-dom";
import ProgressDotUnfinished from "./../assets/progress-dot-unfinished.png";
import ProgressDotFinished from "./../assets/progress-dot-finished.png";
import vectorLeft from "./../assets/vector-left.png";
import vectorRight from "./../assets/vector-right.png";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import home from "./../assets/home.png";
import trending from "./../assets/trending.png";
import profile from "./../assets/profile.png";
import addPoll from "./../assets/addPoll.png";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Futura",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    height: "700px", //TODO: set hight to be phone height
  },
  topBar: {
    paddingLeft: "10%",
    paddingRight: "10%",
    display: "flex",
    width: "100%",
    height: "50px",
    backgroundColor: "#EDEDED",
    alignItems: "center",
    justifyContent: "space-between",
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
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#2EC4B6",
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
    bottom: "-50px",
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
}));

function OptionsPoll() {
  const classes = useStyles();
  const [poll, setPoll] = useContext(PollContext);
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [isAdded, setIsAdded] = useState(0);

  const handleOptions = (event) => {
    if (event.target.name == "option1") {
      setOption1(event.target.value);
    } else if (event.target.name == "option2") {
      setOption2(event.target.value);
    } else if (event.target.name == "option3") {
      setOption3(event.target.value);
    } else if (event.target.name == "option4") {
      setOption4(event.target.value);
    }
  };

  const clickHandler = () => {
    setIsAdded(isAdded + 1);
  };

  const submitHandler = () => {
    poll.options = [option1, option2, option3, option4];
    setPoll(poll);
  };

  console.log("This is the global poll in 2nd screen: ", poll);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.topBar}>
          <Link to="/Poll">
            <img src={home} alt="Home" />
          </Link>
          <Link to="/Trending">
            <img src={trending} alt="Trending" />
          </Link>
          <Link to="/StartPoll">
            <img src={addPoll} alt="Add Poll" />
          </Link>
          <Link to="/Me">
            <img src={profile} alt="Me" />
          </Link>
        </div>
        <Grid container className={classes.top}>
          <Grid item xs={12}>
            Start a Poll
          </Grid>
        </Grid>
        <div className={classes.progressBar}>
          <Link to="/StartPoll">
            <img src={vectorLeft} className={classes.vector} alt="Back" />
          </Link>
          <img
            src={ProgressDotFinished}
            className={classes.progressDot}
            alt=""
          />
          <img
            src={ProgressDotFinished}
            className={classes.progressDot}
            alt=""
          />
          <img
            src={ProgressDotUnfinished}
            className={classes.progressDot}
            alt=""
          />
          <img
            src={ProgressDotUnfinished}
            className={classes.progressDot}
            alt=""
          />
          <img
            src={ProgressDotUnfinished}
            className={classes.progressDot}
            alt=""
          />
          <Link to="/Agespoll" onClick={submitHandler}>
            <img
              type="submit"
              src={vectorRight}
              className={classes.vector}
              alt="Next"
            />
          </Link>
        </div>
        <div className={classes.title}>What do they have to choose from?</div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              autoComplete="option"
              name="option1"
              variant="outlined"
              fullWidth
              required
              id="option"
              label="Enter Option 1 here"
              value={option1}
              onChange={handleOptions}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="option"
              name="option2"
              variant="outlined"
              fullWidth
              required
              id="option"
              label="Enter Option 2 here"
              value={option2}
              onChange={handleOptions}
              autoFocus
            />
          </Grid>
          {isAdded >= 1 && (
            <Grid item xs={12}>
              <TextField
                autoComplete="option"
                name="option3"
                variant="outlined"
                fullWidth
                required
                id="option"
                label="Enter Option 3 here"
                value={option3}
                onChange={handleOptions}
                autoFocus
              />
            </Grid>
          )}
          {isAdded >= 2 && (
            <Grid item xs={12}>
              <TextField
                autoComplete="option"
                name="option4"
                variant="outlined"
                fullWidth
                required
                id="option"
                label="Enter Option 4 here"
                value={option4}
                onChange={handleOptions}
                autoFocus
              />
            </Grid>
          )}
        </Grid>
        <Button onClick={clickHandler}>
          <Icon
            className={classes.addButton}
            color="primary"
            style={{ fontSize: 50 }}
          >
            add_circle
          </Icon>
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
  );
}

export default OptionsPoll;
