import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import home from "./../../assets/home.png";
import trending from "./../../assets/trending.png";
import profile from "./../../assets/profile.png";
import addPoll from "./../../assets/addPoll.png";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ChoiceGrid from "./ChoiceGrid";
import "./trending.css";
import { Link } from "react-router-dom";
import saveIcon from "./../../assets/save.png";
import skipIcon from "./../../assets/skip.png";
import Comments from "./Comments";
import CommentsExpanded from "./CommentsExpanded";
import axios from "axios";
import { RegistrationContext } from "./../Registration/RegistrationContext";
import savedIcon from "./../../assets/saved.png";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: "20px",
    borderRadius: "10px",
    width: "90%",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: "10%",
  },
  boxTopBar: {
    width: "100%",
    height: "30px",
    backgroundColor: "rgba(150, 150, 150, 0.57)",
    borderRadius: "12px 12px 0px 0px",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    position: "relative",
  },
  choiceGrid: {
    display: "flex",
    position: "absolute",
    marginTop: "1000px",
  },
  saveIcon: {
    marginLeft: "20px",
    display: "flex",
  },
  skipIcon: {
    marginRight: "15px",
    display: "flex",
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  category: {
    fontWeight: "bold",
    fontSize: "15px",
  },
  question: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  heading: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    height: "40px",
  },
}));

export default function QuestionCard(props) {
  const classes = useStyles();
  const [saved, setSaved] = useState(false);

  const question = {
    title: "Do you think Hopkins should install a new police force?",
    category: "politics",
    time: "2 hours ago",
    choices: {
      choiceOne: "yes",
      choiceTwo: "no",
      choiceThree: "",
      choiceFour: "",
    },
    results: {
      choiceOne: 39,
      choiceTwo: 61,
      choiceThree: 0,
      choiceFour: 0,
    },
    comments: {
      0: {
        text: "dummy",
        likes: 10,
      },
      1: {
        text: "doubledummy",
        likes: 20,
      },
    },
  };

  // get the highest percentage to display
  let highestChoice = question.choices.choiceOne;
  let highestPercentage = 0;

  Object.keys(question.results).map((key) => {
    if (question.results[key] > highestPercentage) {
      highestPercentage = question.results[key];
      highestChoice = question.choices[key];
    }
  });

  const saveHandler = (e) => {
    //todo
  };

  const skipHandler = (e) => {
    //todo
  };

  const setCommentOpenHandler = (e) => {
    //todo
  };

  const bgDict = ["#8093F1", "#E71D36", "#FFB249", "#2EC4B6"];

  return (
    <Box container className={classes.box} boxShadow={2}>
      <Grid className={classes.boxTopBar}>
        {saved ? (
          <img
            src={savedIcon}
            className={classes.saveIcon}
            alt='Save'
            onClick={saveHandler}
          />
        ) : (
          <img
            src={saveIcon}
            className={classes.saveIcon}
            alt='Save'
            onClick={saveHandler}
          />
        )}
        <div className={classes.category}>
          {question.category === "misc" ? "Miscelleneous" : question.category}
        </div>
        <img
          className={classes.skipIcon}
          src={skipIcon}
          alt='Next'
          onClick={skipHandler}
        />
      </Grid>
      <div className={classes.question}>
        <Grid className={classes.heading}>
          <h2 className={classes.title}>{question.title}</h2>
          <br />
        </Grid>
        <ChoiceGrid className={classes.choiceGrid} choices={question.choices} />
      </div>
      <Comments
        comments={question.comments}
        setCommentOpen={setCommentOpenHandler}
      />
    </Box>
  );
}

//todo
