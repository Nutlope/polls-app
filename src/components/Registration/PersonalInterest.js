import React, { useState, useContext } from "react";
import "./registration.css";
import { RegistrationContext } from "./RegistrationContext";
import ScrollContainer from "react-indiana-drag-scroll";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logoDrawing from "./../../assets/logo-image.png";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
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
    width: "95%", // Fix IE 11 issue.
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
    flexDirection: "column",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "20px",
  },
  interestImage: {
    width: "125px",
    height: "100px",
    backgroundPosition: "1cm 2cm",
  },
  formRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  progressBar: {
    display: "flex",
    justifyContent: "spaces-between",
  },
  progressDot: {
    marginTop: "4px",
    marginLeft: "15px",
    marginRight: "15px",
    width: "11.78px",
    height: "12px",
    left: "239px",
  },
  vector: {
    marginLeft: "35px",
    marginRight: "35px",
  },
}));

export default function PersonalInterest() {
  const [person, setPerson] = useContext(RegistrationContext);

  const classes = useStyles();
  // declaring initial states here
  const interestsDefault = {
    music: false,
    entertainment: false,
    sports: false,
    politics: false,
    fashion: false,
    lifestyle: false,
    misc: true,
  };
  const [interests, setInterests] = useState(interestsDefault);

  const clickHandler = (event) => {
    interestsDefault[event.target.value] = !interestsDefault[
      event.target.value
    ];
    setInterests(interestsDefault);
  };

  const submitHandler = (event) => {
    //TODO: FIX THIS
    event.preventDefault();
    person.prefs = {};
    for (const [key, value] of Object.entries(interests)) {
      if (value === true) {
        person.prefs[key] = true;
      }
    }
    setPerson(person);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.everythingElse}>
          <div className={classes.progressBar}>
            <Link to='/registration-share-location'>
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
            {" "}
            <Grid>
              <Grid container className={classes.formRow} xs={12}>
                <Box
                  container
                  item
                  className={classes.interestGrid}
                  boxShadow={1}
                  xs={6}
                >
                  <img className={classes.interestImage} src={music} alt='' />
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name='checkedH'
                        value='music'
                        onClick={clickHandler}
                      />
                    }
                    label={
                      <Box component='div' fontSize={13} fontFamily='Futura'>
                        Music
                      </Box>
                    }
                  />
                </Box>

                <Box
                  container
                  item
                  className={classes.interestGrid}
                  boxShadow={1}
                  xs={6}
                >
                  <img
                    src={entertainment}
                    className={classes.interestImage}
                    alt=''
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name='checkedH'
                        value='entertainment'
                        onClick={clickHandler}
                      />
                    }
                    label={
                      <Box component='div' fontSize={13} fontFamily='Futura'>
                        Entertainment
                      </Box>
                    }
                  />
                </Box>
              </Grid>

              <Grid container className={classes.formRow} xs={12}>
                <Box
                  container
                  item
                  className={classes.interestGrid}
                  boxShadow={1}
                  xs={6}
                >
                  {" "}
                  <img src={sports} className={classes.interestImage} alt='' />
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name='checkedH'
                        value='sports'
                        onClick={clickHandler}
                      />
                    }
                    label={
                      <Box component='div' fontSize={13} fontFamily='Futura'>
                        Sports
                      </Box>
                    }
                  />
                </Box>

                <Box
                  container
                  item
                  className={classes.interestGrid}
                  boxShadow={1}
                  xs={6}
                >
                  <img
                    src={politics}
                    className={classes.interestImage}
                    alt=''
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name='checkedH'
                        value='politics'
                        onClick={clickHandler}
                      />
                    }
                    label={
                      <Box component='div' fontSize={13} fontFamily='Futura'>
                        Politics
                      </Box>
                    }
                  />
                </Box>
              </Grid>

              <Grid container className={classes.formRow} xs={12}>
                <Box
                  container
                  item
                  className={classes.interestGrid}
                  boxShadow={1}
                  xs={6}
                >
                  {" "}
                  <img src={fashion} className={classes.interestImage} alt='' />
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name='checkedH'
                        value='fashion'
                        onClick={clickHandler}
                      />
                    }
                    label={
                      <Box component='div' fontSize={13} fontFamily='Futura'>
                        Fashion
                      </Box>
                    }
                  />
                </Box>

                <Box
                  container
                  item
                  className={classes.interestGrid}
                  boxShadow={1}
                  xs={6}
                >
                  {" "}
                  <img
                    src={lifestyle}
                    className={classes.interestImage}
                    alt=''
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name='checkedH'
                        value='lifestyle'
                        onClick={clickHandler}
                      />
                    }
                    label={
                      <Box component='div' fontSize={13} fontFamily='Futura'>
                        Lifestyle
                      </Box>
                    }
                  />
                </Box>
              </Grid>
            </Grid>
          </ScrollContainer>
          <Link to='/Poll'>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={submitHandler}
            >
              Complete!
            </Button>
          </Link>
        </div>
        <Grid className={classes.login}>
          Already have an account?&nbsp;
          <Link to='/'>Log in here.</Link>
        </Grid>
      </div>
    </Container>
  );
}

/**
 * todo: remove the right vector
 */
