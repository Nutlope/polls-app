import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import "./general.css";
import logoDrawing from "./../assets/logo-image.png";
import Link from "@material-ui/core/Link";
import ProgressDotUnfinished from "./../assets/progress-dot-unfinished.png";
import ProgressDotFinished from "./../assets/progress-dot-finished.png";
import vectorLeft from "./../assets/vector-left.png";
import vectorRight from "./../assets/vector-right.png";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

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
  const [value, setValue] = useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <Link href="/StartPoll">
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
            <Link href="/Agespoll">
              <img
                type="submit"
                src={vectorRight}
                className={classes.vector}
                alt="Next"
              />
            </Link>
          </div>
          <div className={classes.title}>What do they have to choose from?</div>
          <Button variant="contained" fullWidth className={classes.button}>
            Yes
          </Button>
          <Button variant="contained" fullWidth className={classes.button}>
            No
          </Button>
          <Link href="">
            <Icon
              className={classes.addButton}
              color="primary"
              style={{ fontSize: 50 }}
            >
              add_circle
            </Icon>
          </Link>
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

export default OptionsPoll;
