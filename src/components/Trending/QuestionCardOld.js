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

const useStyles = makeStyles((theme) => ({
  box: {
    marginLeft: "20px",
    borderRadius: "10px",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    top: "10%",
    paddingBottom: "5px",
    marginBottom: "15px",
    marginTop: "15px",
  },
  topBar: {
    paddingLeft: "10%",
    paddingRight: "10%",
    display: "flex",
    width: "100%",
    height: "25px",
    backgroundColor: "#EDEDED",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  question: {
    width: "90%",
    marginBottom: "0px",
  },
  time: {
    width: "90%",
    textAlign: "left",
    padding: "0",
    marginTop: "0",
    fontSize: "10px",
  },
  firstChoice: {
    display: "flex",
    backgroundColor: "#8093F1",
    borderRadius: "17px",
    color: "white",
    fontSize: "13px",
    height: "25px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5px",
  },
  choiceDisplay: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  expand: {
    color: "#757575",
    fontSize: "10px",
  },
  choiceExpanded: {
    display: "flex",
    borderRadius: "17px",
    color: "white",
    fontSize: "13px",
    height: "25px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5px",
  },
  choicesGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function QuestionCard(props) {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);

  const question = "Do you think Hopkins should install a new police force?";
  const category = "politics";
  const time = "2 hours ago";
  const choices = {
    choiceOne: "yes",
    choiceTwo: "no",
    choiceThree: "",
    choiceFour: "",
  };
  const results = {
    choiceOne: 39,
    choiceTwo: 61,
    choiceThree: 0,
    choiceFour: 0,
  };

  // get the highest percentage to display
  let highestChoice = choices.choiceOne;
  let highestPercentage = 0;

  Object.keys(results).map((key) => {
    if (results[key] > highestPercentage) {
      highestPercentage = results[key];
      highestChoice = choices[key];
    }
  });

  const clickHandler = (e) => {
    setExpand(!expand);
  };

  const bgDict = ["#8093F1", "#E71D36", "#FFB249", "#2EC4B6"];

  if (expand) {
    return (
      <Box container className={classes.box} boxShadow={2}>
        <Grid className={classes.topBar}>{category}</Grid>
        <h3 className={classes.question}>{question}</h3>
        <p className={classes.time}>{time}</p>
        <Container className={classes.choices}>
          {Object.keys(results).map((choice, idx) => {
            if (choices[choice] !== "") {
              return (
                <div className={classes.choicesGrid}>
                  <Box
                    className={classes.choiceExpanded}
                    style={{ backgroundColor: bgDict[idx] }}
                  >
                    <p className={classes.choiceDisplay}>
                      {choices[choice]} : {results[choice]}%
                    </p>
                  </Box>
                </div>
              );
            }
          })}
        </Container>
        <div className={classes.expand} onClick={clickHandler}>
          ▲ Collapse
        </div>
      </Box>
    );
  }

  return (
    <Box container className={classes.box} boxShadow={2}>
      <Grid className={classes.topBar}>{category}</Grid>{" "}
      <h3 className={classes.question}>{question}</h3>
      <p className={classes.time}>{time}</p>
      <Box className={classes.firstChoice}>
        <p className={classes.choiceDisplay}>
          {highestChoice} : {highestPercentage}%
        </p>
      </Box>
      <div className={classes.expand} onClick={clickHandler}>
        ▼ Expand
      </div>
    </Box>
  );
}