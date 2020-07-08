import React, { Component } from "react";
import "./registration.css";
import ScrollContainer from "react-indiana-drag-scroll";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logoDrawing from "./../../assets/logo-image.png";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import ProgressDotUnfinished from "./../../assets/progress-dot-unfinished.png";
import ProgressDotFinished from "./../../assets/progress-dot-finished.png";
import vectorLeft from "./../../assets/vector-left.png";
import vectorRight from "./../../assets/vector-right.png";
import music from "./../../assets/music.png";
import entertainment from "./../../assets/entertainment.png";
import sports from "./../../assets/sports.png";
import politics from "./../../assets/politics.png";
import fashion from "./../../assets/fashion.png";
import lifestyle from "./../../assets/lifestyle.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Futura",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    height: "700px", //TODO: set hight to be phone height
  },
  login: {
    position: "absolute",
    bottom: "30px",
  },
  everythingElse: {
    display: "flex",
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    top: "5%",
  },
  form: {
    //***/
    height: "270px",
    overflowY: "scroll",
    width: "80%", // Fix IE 11 issue.
    display: "flex",
    flexDirection: "column",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#2EC4B6",
  },
  topPara: {
    fontFamily: "Futura",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "22px",
    /* or 122% */

    textAlign: "center",
    letterSpacing: "0.3px",
    textTransform: "capitalize",

    color: "#707070",
  },
  formText: {
    fontFamily: "Futura",
    fontSize: "16px",
  },
  interestGrid: {
    height: "5%",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
  },
  interestImage: {
    height: "125px",
  },
  formRow: {
    display: "flex",
    alignItems: "center",
  },
  progressBar: {
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
}));

const changeHandler = (event) => {
  console.log(event.target.value);
};

export default function PersonalInterest() {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.everythingElse}>
          <div className={classes.progressBar}>
            <Link href='/registration-share-location'>
              <img src={vectorLeft} className={classes.vector} alt='Back' />
            </Link>
            <img
              src={ProgressDotFinished}
              className={classes.progressDot}
              alt=''
            />
            <img
              src={ProgressDotFinished}
              className={classes.progressDot}
              alt=''
            />
            <img
              src={ProgressDotFinished}
              className={classes.progressDot}
              alt=''
            />
            <img
              src={ProgressDotFinished}
              className={classes.progressDot}
              alt=''
            />
            <Link>
              <img
                type='submit'
                src={vectorRight}
                className={classes.vector}
                alt='Next'
              />
            </Link>
          </div>
          <img
            src={logoDrawing}
            width='234px'
            height='140px'
            top='138px'
            alt=''
          />
          <p className={classes.topPara}>
            Last step! What peaks your interests?
          </p>
          <ScrollContainer className={classes.form}>
            <Grid container className={classes.formRow} xs={12}>
              <Grid container item className={classes.interestGrid} xs={6}>
                <img className={classes.interestImage} src={music} alt='' />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name='checkedH'
                    />
                  }
                  label={
                    <Box component='div' fontSize={15} fontFamily='Futura'>
                      Music
                    </Box>
                  }
                />
              </Grid>

              <Grid container item className={classes.interestGrid} xs={6}>
                <img src={entertainment} alt='' />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name='checkedH'
                    />
                  }
                  label={
                    <Box component='div' fontSize={15} fontFamily='Futura'>
                      Entertainment
                    </Box>
                  }
                />
              </Grid>
            </Grid>

            <Grid container className={classes.formRow} xs={12}>
              <Grid container item className={classes.interestGrid} xs={6}>
                <img src={sports} alt='' />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name='checkedH'
                    />
                  }
                  label={
                    <Box component='div' fontSize={15} fontFamily='Futura'>
                      Sports
                    </Box>
                  }
                />
              </Grid>

              <Grid container item className={classes.interestGrid} xs={6}>
                <img src={politics} alt='' />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name='checkedH'
                    />
                  }
                  label={
                    <Box component='div' fontSize={15} fontFamily='Futura'>
                      Politics
                    </Box>
                  }
                />
              </Grid>
            </Grid>

            <Grid container className={classes.formRow} xs={12}>
              <Grid container item className={classes.interestGrid} xs={6}>
                <img src={fashion} alt='' />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name='checkedH'
                    />
                  }
                  label={
                    <Box component='div' fontSize={15} fontFamily='Futura'>
                      Fashion
                    </Box>
                  }
                />
              </Grid>

              <Grid container item className={classes.interestGrid} xs={6}>
                <img src={lifestyle} alt='' />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      name='checkedH'
                    />
                  }
                  label={
                    <Box component='div' fontSize={15} fontFamily='Futura'>
                      Lifestyle
                    </Box>
                  }
                />
              </Grid>
            </Grid>
          </ScrollContainer>
          <Link href='/Poll'>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Complete!
            </Button>
          </Link>
        </div>
        <Grid className={classes.login}>
          Already have an account? <Link href='/'>Log in here.</Link>
        </Grid>
      </div>
    </Container>
  );
}

/**
 * todo: remove the right vector
 */
