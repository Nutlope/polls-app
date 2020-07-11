import React from "react";
import logoSmall from "./../../assets/logoSmall.png";
import home from "./../../assets/home.png";
import trending from "./../../assets/trending.png";
import profile from "./../../assets/profile.png";
import addPoll from "./../../assets/addPoll.png";
import saveIcon from "./../../assets/save.png";
import vectorRight from "./../../assets/vector-right.png";
import logoGray from "./../../assets/logoGray.png";
import locationPin from "./../../assets/locationPin.png";
import avatar from "./../../assets/avatar.png";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { shadows } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import ScrollContainer from "react-indiana-drag-scroll";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
  pollGrid: {
    display: "flex",
    width: "95%",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "12px",
    marginTop: "10px",
    height: "200px", //todo to be changed
  },
  boxTopBar: {
    width: "100%",
    height: "30px",
    backgroundColor: "rgba(150, 150, 150, 0.57)",
    borderRadius: "12px 12px 0px 0px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    position: "relative",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  title: {
    border: "1px solid pink",
    fontSize: "18px",
    fontWeight: "bold",
    width: "90%",
  },
  majorChoice: {
    border: "0px",
    height: "50px",
    marginBottom: "10px",
  },
  choiceWord: {
    fontSize: "13px",
  },
}));

export default function PollGrid(props) {
  const poll = props.polls; // note i temporarily added this thing as props is a nested dict...

  const classes = useStyle();
  return (
    <Box container item className={classes.pollGrid} boxShadow={3}>
      <Grid className={classes.boxTopBar}>
        <div className={classes.category}>{poll.category}</div>
      </Grid>

      <Grid className={classes.title}>
        {poll.title}
        <p>n days ago</p>
      </Grid>

      <Chip
        className={classes.majorChoice}
        label={
          <Typography className={classes.choiceWord}>
            {poll.choices.choiceOne} : {poll.results.choiceOne}%
          </Typography>
        }
        variant='outlined'
        className={classes.choiceLong}
        style={{ backgroundColor: "#8093F1" }}
      />
    </Box>
  );
}
