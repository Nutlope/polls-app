import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import home from "./../../assets/home.png";
import trending from "./../../assets/trending.png";
import profile from "./../../assets/profile.png";
import addPoll from "./../../assets/addPoll.png";
import BackIcon from "./../../assets/back.png";
import SendIcon from "./../../assets/send.png";
import TextField from "@material-ui/core/TextField";
import ScrollContainer from "react-indiana-drag-scroll";

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
    zIndex: "-1",
    display: "flex",
    width: "100%",
    height: "50px",
    backgroundColor: "#EDEDED",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    textAlign: "left",
    width: "90%",
    fontWeight: "bold",
    fontSize: "36px",
  },
  commentScroll: {
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    position: "absolute",
    bottom: "70px",
  },
  commentBar: {
    width: "100%",
    height: "60px",
    display: "flex",
    position: "absolute",
    bottom: "0px",
    flexDirection: "row",
    alignItems: "center",
  },
  typeComment: {
    bottom: "0px",
    borderRadius: "20px",
    width: "80%",
    marginLeft: "15px",
    marginRight: "20px",
  },
  category: {
    height: "50px",
    fontWeight: "bold",
    fontSize: "16px",
    width: "100%",
  },
}));

const clickOpenHandler = (click, setClicked) => {
  setClicked(!click);
};

const expandableHeading = (classes) => {
  // const [clicked, setClicked] = useState(false);

  return (
    <div className={classes.category}>
      <div className={classes.categoryHeader}>Politics</div>
    </div>
  );
};

export default function Trending(props) {
  const classes = useStyles();

  const questions = {};

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.topBar}>
          <img src={home} />
          <img src={trending} />
          <img src={addPoll} />
          <img src={profile} />
        </div>

        <h1 className={classes.heading}>Trending</h1>

        {expandableHeading(classes)}
      </div>
    </Container>
  );
}
