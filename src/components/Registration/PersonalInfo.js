import React, { useState, useContext } from "react";
import { RegistrationContext } from "./RegistrationContext";
import "./registration.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logoDrawing from "./../../assets/logo-image.png";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import { Link } from "react-router-dom";
import ProgressDotUnfinished from "./../../assets/progress-dot-unfinished.png";
import ProgressDotFinished from "./../../assets/progress-dot-finished.png";
import vectorLeft from "./../../assets/vector-left.png";
import vectorRight from "./../../assets/vector-right.png";

/**
 * functional components
 */

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Futura",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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
    width: "70%", // Fix IE 11 issue.
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
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
  nameLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  textfield: {
    width: "45%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    fontFamily: "Futura",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "10px",
    /* identical to box height, or 119% */

    alignItems: "center",
    letterSpacing: "0.15px",

    /* text / secondary | 54p */

    color: "rgba(0, 0, 0, 0.54)",

    /* Inside Auto Layout */
    flex: "none",
    order: 0,
    alignSelf: "center",
    margin: "0px 0px",
  },
  dobField: {
    width: "100%",
    marginBottom: "20px",
  },
  genderGrid: {
    width: "90%",
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

export default function PersonalInfo() {
  const classes = useStyles();
  const [person, setPerson] = useContext(RegistrationContext);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState([1, 1, 2000]);
  const [gender, setGender] = useState("female");

  const changeFirstnameHandler = (e) => {
    setFirstname(e.target.value);
  };

  const changeLastnameHandler = (e) => {
    setLastname(e.target.value);
  };

  const changeDobHandler = (e) => {
    const year = parseInt(e.target.value.substring(0, 4), 10);
    const month = parseInt(e.target.value.substring(5, 7), 10);
    const day = parseInt(e.target.value.substring(8, 10), 10);
    setDob([month, day, year]);
  };

  const changeGenderFemaleHandler = (e) => {
    setGender("female");
  };

  const changeGenderMaleHandler = (e) => {
    setGender("male");
  };

  const changeGenderOtherHandler = (e) => {
    setGender("other");
  };

  const submitHandler = (event) => {
    // event.preventDefault();
    person.fname = firstname;
    person.lname = lastname;
    person.gender = gender;
    person.dob = dob;
    setPerson(person);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.everythingElse}>
          <div className={classes.progressBar}>
            <Link to='/registration-personal-info'>
              <img src={vectorLeft} className={classes.vector} alt='Back' />
            </Link>
            <img
              src={ProgressDotFinished}
              className={classes.progressDot}
              alt=''
            />
            <img
              src={ProgressDotUnfinished}
              className={classes.progressDot}
              alt=''
            />
            <img
              src={ProgressDotUnfinished}
              className={classes.progressDot}
              alt=''
            />
            <img
              src={ProgressDotUnfinished}
              className={classes.progressDot}
              alt=''
            />
            <Link onClick={submitHandler} to='/registration-create-account'>
              <img src={vectorRight} className={classes.vector} alt='Next' />
            </Link>
          </div>
          <img
            src={logoDrawing}
            width='234px'
            height='140px'
            top='138px'
            alt=''
          />
          <p className={classes.topPara}>Tell us a little about yourself.</p>

          <form className={classes.form} onSubmit={submitHandler}>
            <Grid className={classes.nameLine}>
              <Grid className={classes.textfield} item>
                <TextField
                  autoComplete='fname'
                  name='firstName'
                  variant='outlined'
                  required
                  id='firstName'
                  label='First Name'
                  autoFocus
                  value={firstname}
                  onChange={changeFirstnameHandler}
                />
              </Grid>
              <Grid className={classes.textfield} item>
                <TextField
                  autoComplete='lname'
                  name='lastName'
                  variant='outlined'
                  required
                  id='lastName'
                  label='Last Name'
                  autoFocus
                  onChange={changeLastnameHandler}
                />
              </Grid>
            </Grid>
            <Grid item className={classes.dobField}>
              <TextField
                className={classes.dobField}
                autoComplete='dateOfBirth'
                name='dob'
                variant='outlined'
                required
                id='dob'
                label='Date Of Birth:'
                autoFocus
                type='date'
                onChange={changeDobHandler}
              />
            </Grid>
            <Grid className={classes.genderGrid}>
              <FormControl component='gender-radio'>
                <FormLabel component='legend'>Gender</FormLabel>
                <RadioGroup
                  defaultValue='female'
                  aria-label='gender'
                  name='gender'
                >
                  <FormControlLabel
                    className={classes.radioChoice}
                    value='female'
                    control={<Radio />}
                    label='Female'
                    onChange={changeGenderFemaleHandler}
                  />
                  <FormControlLabel
                    className={classes.radioChoice}
                    value='male'
                    control={<Radio />}
                    label='Male'
                    onChange={changeGenderMaleHandler}
                  />
                  <FormControlLabel
                    className={classes.radioChoice}
                    value='other'
                    control={<Radio />}
                    label='Other'
                    onChange={changeGenderOtherHandler}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </form>
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
 * TODOs:
 * 1. change progress bar (cant install react-native)
 * 2. styling: font, first two box inline, center
 * can you have css on a Grid component (that is not HTML but Material UI)
 *
 */
