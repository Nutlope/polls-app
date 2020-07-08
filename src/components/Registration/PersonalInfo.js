import React, { Component } from "react";
import "./registration.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import logoDrawing from "./../../assets/logo-image.png";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import Link from "@material-ui/core/Link";
import ProgressDotUnfinished from "./../../assets/progress-dot-unfinished.png";
import ProgressDotFinished from "./../../assets/progress-dot-finished.png";
import vectorLeft from "./../../assets/vector-left.png";
import vectorRight from "./../../assets/vector-right.png";
import { makeStyles } from "@material-ui/core/styles";

/**
 * functional components
 */

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
    //border: "1px solid green",
    display: "flex",
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    top: "5%",
  },
  form: {
    //border: "1px solid pink",
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
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
    fontSize: "18px",
    lineHeight: "22px",
    /* or 122% */

    textAlign: "center",
    letterSpacing: "0.3px",
    textTransform: "capitalize",

    color: "#707070",
  },
  textfield: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
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

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      dob: "",
      gender: "female",
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    console.log(this.state);
  };

  render() {
    return (
      <Container component='registration-main' maxWidth='xs'>
        <CssBaseline />
        <div className='paper'>
          <div className='everythingElse'>
            <div className='progressBar'>
              <Link>
                <img src={vectorLeft} className='vector' />
              </Link>
              <img src={ProgressDotFinished} className='progressDot' />
              <img src={ProgressDotUnfinished} className='progressDot' />
              <img src={ProgressDotUnfinished} className='progressDot' />
              <img src={ProgressDotUnfinished} className='progressDot' />
              <Link href='/registration-create-account'>
                <img type='submit' src={vectorRight} className='vector' />
              </Link>
            </div>
            <img
              className='App-logo'
              src={logoDrawing}
              width='309px'
              height='182px'
              alt=''
            />
            <p className='text'>Tell us a little about yourself.</p>

            <form
              className='registration-form'
              className='form'
              onSubmit={this.submitHandler}
              xs={12}
              sm={12}
            >
              <Grid className='FirstLine'>
                <Grid className='questionBox' item xs={6} sm={6}>
                  <TextField
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    required
                    id='firstName'
                    label='First Name'
                    autoFocus
                    value={this.props.firstname}
                    onChange={this.changeHandler}
                  />
                </Grid>
                <Grid className='questionBox' item xs={12} sm={6}>
                  <TextField
                    autoComplete='lname'
                    name='lastName'
                    variant='outlined'
                    required
                    id='lastName'
                    label='Last Name'
                    autoFocus
                    value={this.props.lastname}
                    onChange={this.changeHandler}
                  />
                </Grid>
              </Grid>
              <Grid className='questionBox' item xs={12}>
                <TextField
                  autoComplete='dateOfBirth'
                  name='dob'
                  variant='outlined'
                  required
                  id='dob'
                  label='Date Of Brith:'
                  autoFocus
                  type='date'
                  onChange={this.changeHandler}
                />
              </Grid>
              <FormControl component='gender-radio'>
                <FormLabel component='legend'>Gender</FormLabel>
                <RadioGroup
                  defaultValue='female'
                  aria-label='gender'
                  name='gender'
                >
                  <FormControlLabel
                    className='radioChoice'
                    value='female'
                    control={<Radio />}
                    label='Female'
                    onChange={this.changeHandler}
                  />
                  <FormControlLabel
                    className='radioChoice'
                    value='male'
                    control={<Radio />}
                    label='Male'
                    onChange={this.changeHandler}
                  />
                  <FormControlLabel
                    className='radioChoice'
                    value='other'
                    control={<Radio />}
                    label='Other'
                    onChange={this.changeHandler}
                  />
                </RadioGroup>
              </FormControl>

              <Link href='/Registration-create-account'>
                <Button
                  variant='contained'
                  color='primary'
                  type='submit'
                  className='button'
                >
                  Next
                </Button>
              </Link>
            </form>
          </div>
          <Grid className='login'>
            Already have an account?
            <Link href='/'>Log in here.</Link>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default PersonalInfo;

/**
 * TODOs:
 * 1. change progress bar (cant install react-native)
 * 2. styling: font, first two box inline, center
 * can you have css on a Grid component (that is not HTML but Material UI)
 *
 */
