import React, { useState } from "react";
import "./poll.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
  formRow: {
    width: "305px",
    display: "flex",
    justifyContent: "space-between",
  },
  choice: {
    border: "0px",
    width: "150px",
    height: "150px",
    marginBottom: "5px",
    justifyContent: "center",
    color: "black",
  },
  choiceLong: {
    border: "0px",
    width: "150px",
    height: "300px",
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
  const [voted, setVoted] = useState(false);

  const clickHandler = (e) => {
    setVoted(true);
    console.log("clicked");
    console.log(voted);
  };

  if (!voted) {
    if (props.choices.choiceThree === "") {
      return (
        <div>
          <Grid className={classes.formRow}>
            <Chip
              label={
                <Typography className={classes.choiceWords}>
                  {props.choices.choiceOne}
                </Typography>
              }
              clickable={props.choices.choiceOne !== ""}
              onClick={clickHandler}
              variant='outlined'
              className={classes.choiceLong}
              style={{ backgroundColor: "#FF9F1C" }}
            />
            <Chip
              label={
                <Typography className={classes.choiceWords}>
                  {props.choices.choiceTwo}
                </Typography>
              }
              clickable={props.choices.choiceTwo !== ""}
              onClick={clickHandler}
              variant='outlined'
              className={classes.choiceLong}
              style={{ backgroundColor: "#2EC4B6" }}
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
                {props.choices.choiceOne}
              </Typography>
            }
            clickable={props.choices.choiceOne !== ""}
            onClick={clickHandler}
            variant='outlined'
            className={classes.choice}
            style={{ backgroundColor: "#FF9F1C" }}
          />
          <Chip
            label={
              <Typography className={classes.choiceWords}>
                {props.choices.choiceTwo}
              </Typography>
            }
            clickable={props.choices.choiceTwo !== ""}
            onClick={clickHandler}
            variant='outlined'
            className={classes.choice}
            style={{ backgroundColor: "#2EC4B6" }}
          />
        </Grid>
        <Grid className={classes.formRow}>
          <Chip
            label={
              <Typography className={classes.choiceWords}>
                {props.choices.choiceThree}
              </Typography>
            }
            clickable={props.choices.choiceThree !== ""}
            onClick={clickHandler}
            variant='outlined'
            className={classes.choice}
            style={{ backgroundColor: "#E71D36" }}
          />
          <Chip
            label={
              <Typography className={classes.choiceWords}>
                {props.choices.choiceFour}
              </Typography>
            }
            clickable={props.choices.choiceFour !== ""}
            onClick={clickHandler}
            variant='outlined'
            className={classes.choice}
            style={{ backgroundColor: "#8093F1" }}
          />
        </Grid>
      </div>
    );
  } else {
    if (props.choices.choiceThree === "") {
      return (
        <div>
          <Grid className={classes.formRow}>
            <Chip
              label={
                <Typography className={classes.choiceWords}>
                  {props.choices.choiceOne}
                </Typography>
              }
              clickable={props.choices.choiceOne !== ""}
              onClick={clickHandler}
              variant='outlined'
              className={classes.choiceLong}
              style={{ backgroundColor: "#FF9F1C" }}
            />
            <Chip
              label={
                <Typography className={classes.choiceWords}>
                  {props.choices.choiceTwo}
                </Typography>
              }
              clickable={props.choices.choiceTwo !== ""}
              onClick={clickHandler}
              variant='outlined'
              className={classes.choiceLong}
              style={{ backgroundColor: "#2EC4B6" }}
            />
          </Grid>
        </div>
      );
    }
    return <h1>hello</h1>;
  }
}
