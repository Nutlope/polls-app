import React, { useState } from "react";
import "./trending.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import VotedGrid from "./VotedGrid";

const useStyle = makeStyles((theme) => ({
  formRow: {
    width: "305px",
    display: "flex",
    justifyContent: "space-between",
  },
  choice: {
    border: "0px",
    width: "150px",
    height: "100px",
    marginBottom: "5px",
    justifyContent: "center",
    color: "black",
  },
  choiceLong: {
    border: "0px",
    width: "150px",
    height: "200px",
    marginBottom: "5px",
    justifyContent: "center",
    color: "black",
  },
  choiceWords: {
    whiteSpace: "normal",
    fontSize: "15px",
    fontFamily: "Futura",
    fontWeight: "bold",
    textAlign: "center",
  },
}));

export default function ChoiceGrid(props) {
  const classes = useStyle();
  const [voted, setVoted] = useState("");
  const [dummy, setDummy] = useState(0);

  const question = {
    category: "entertainment",
    title: "Which Wes Anderson Movie should I watch tonight?",
    time: "2 hours ago",
    choices: {
      choiceOne: "The Royal sth",
      choiceTwo: "Moonrise Kingdom",
      choiceThree: "Grand Budapest Hotel",
      choiceFour: "",
    },
    results: {
      choiceOne: 234,
      choiceTwo: 1,
      choiceThree: 3434,
      choiceFour: 0,
    },
    comments: [
      "If you’re fan of animation, go with Isle of Dogs",
      "Grand Budapest Hotel has a great cast!",
    ],
  };

  const refreshHandler = (qnNum) => {
    // use if statement to check if qnNum matches with this.qnNum
    // API
    // increment qnNum by 1
  };

  const clickChoiceOneHandler = (event) => {
    setVoted("choiceOne");
  };

  const clickChoiceTwoHandler = (event) => {
    setVoted("choiceTwo");
  };

  const clickChoiceThreeHandler = (event) => {
    setVoted("choiceThree");
  };

  const clickChoiceFourHandler = (event) => {
    setVoted("choiceFour");
  };

  if (voted === "") {
    if (question.choices.choiceThree === "") {
      return (
        <div>
          <Grid className={classes.formRow}>
            <Chip
              label={
                <Typography className={classes.choiceWords}>
                  {question.choices.choiceOne}
                </Typography>
              }
              value='choiceOne'
              clickable={question.choices.choiceOne !== ""}
              onClick={clickChoiceOneHandler}
              variant='outlined'
              className={classes.choiceLong}
              style={{ backgroundColor: "#FF9F1C" }}
            />
            <Chip
              label={
                <Typography className={classes.choiceWords}>
                  {question.choices.choiceTwo}
                </Typography>
              }
              clickable={question.choices.choiceTwo !== ""}
              value='choiceTwo'
              onClick={clickChoiceTwoHandler}
              variant='outlined'
              className={classes.choiceLong}
              style={{ backgroundColor: "#2EC4B6" }}
            />
          </Grid>
        </div>
      );
    }

    if (question.choices.choiceFour === "") {
      return (
        <div>
          <Grid className={classes.formRow}>
            <Chip
              label={
                <Typography className={classes.choiceWords}>
                  {question.choices.choiceOne}
                </Typography>
              }
              clickable
              onClick={clickChoiceOneHandler}
              value='choiceOne'
              variant='outlined'
              className={classes.choice}
              style={{ backgroundColor: "#FF9F1C" }}
            />
            <Chip
              label={
                <Typography className={classes.choiceWords}>
                  {question.choices.choiceTwo}
                </Typography>
              }
              clickable
              onClick={clickChoiceTwoHandler}
              variant='outlined'
              className={classes.choice}
              style={{ backgroundColor: "#2EC4B6" }}
            />
          </Grid>
          <Grid className={classes.formRow}>
            <Chip
              label={
                <Typography className={classes.choiceWords}>
                  {question.choices.choiceThree}
                </Typography>
              }
              clickable
              onClick={clickChoiceThreeHandler}
              variant='outlined'
              className={classes.choice}
              style={{ backgroundColor: "#E71D36" }}
            />
            <Chip
              label={
                <Typography className={classes.choiceWords}>
                  {question.choices.choiceFour}
                </Typography>
              }
              variant='outlined'
              className={classes.choice}
              style={{ backgroundColor: "#8093F1" }}
            />
          </Grid>
        </div>
      );
    }
    return (
      <div>
        <Grid className={classes.formRow}>
          <Chip
            label={
              <Typography className={classes.choiceWords}>
                {question.choices.choiceOne}
              </Typography>
            }
            clickable={question.choices.choiceOne !== ""}
            onClick={clickChoiceOneHandler}
            value='choiceOne'
            variant='outlined'
            className={classes.choice}
            style={{ backgroundColor: "#FF9F1C" }}
          />
          <Chip
            label={
              <Typography className={classes.choiceWords}>
                {question.choices.choiceTwo}
              </Typography>
            }
            clickable={question.choices.choiceTwo !== ""}
            onClick={clickChoiceTwoHandler}
            variant='outlined'
            className={classes.choice}
            style={{ backgroundColor: "#2EC4B6" }}
          />
        </Grid>
        <Grid className={classes.formRow}>
          <Chip
            label={
              <Typography className={classes.choiceWords}>
                {question.choices.choiceThree}
              </Typography>
            }
            clickable={question.choices.choiceThree !== ""}
            onClick={clickChoiceThreeHandler}
            variant='outlined'
            className={classes.choice}
            style={{ backgroundColor: "#E71D36" }}
          />
          <Chip
            label={
              <Typography className={classes.choiceWords}>
                {question.choices.choiceFour}
              </Typography>
            }
            clickable={question.choices.choiceFour !== ""}
            onClick={clickChoiceFourHandler} //todo: 3 choices but still clickable
            variant='outlined'
            className={classes.choice}
            style={{ backgroundColor: "#8093F1" }}
          />
        </Grid>
      </div>
    );
  } else {
    return (
      <VotedGrid
        choices={question.choices}
        results={question.results}
        voted={voted}
        setVoted={setVoted}
        //refreshHandler={refreshHandler}
      />
    );
  }
}
