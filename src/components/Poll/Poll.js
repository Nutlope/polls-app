import React from "react";
import "./poll.css";
import logoSmall from "./../../assets/logoSmall.png";
import home from "./../../assets/home.png";
import trending from "./../../assets/trending.png";
import profile from "./../../assets/profile.png";
import addPoll from "./../../assets/addPoll.png";
import saveIcon from "./../../assets/save.png";
import vectorRight from "./../../assets/vector-right.png";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { shadows } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import ChoiceGrid from "./ChoiceGrid";
import Comments from "./Comments";

const useStyle = makeStyles((theme) => ({
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
  logo: {
    display: "flex",
    width: "20px",
  },
  box: {
    borderRadius: "10px",
    width: "90%",
    height: "87%",
    display: "flex",
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
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
  formRow: {
    width: "305px",
    display: "flex",
    justifyContent: "space-between",
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
    marginRight: "10px",
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
  comments: {
    display: "flex",
    position: "absolute",
  },
}));

export default function Poll(props) {
  const classes = useStyle();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.topBar}>
          <img src={home} />
          <img src={trending} />
          <img src={logoSmall} className={classes.logo} width='100px' alt='' />
          <img src={addPoll} />
          <img src={profile} />
        </div>
        <Box container className={classes.box} boxShadow={2}>
          <Grid className={classes.boxTopBar}>
            <img src={saveIcon} className={classes.saveIcon} />

            <div className={classes.category}>{props.category}</div>
            <Link className={classes.skipIcon}>
              <img src={vectorRight} className='vectorRight' />
              <img src={vectorRight} className='vectorRight' />
            </Link>
          </Grid>
          <div className={classes.question}>
            <Grid className={classes.heading}>
              <h2 className={classes.title}>{props.title}</h2>
              <br />
            </Grid>
            <ChoiceGrid
              className={classes.choiceGrid}
              choices={props.choices}
            />
            <Comments comments={props.comments} />
          </div>
        </Box>
        <div className={classes.comments}></div>
      </div>
    </Container>
  );
}
