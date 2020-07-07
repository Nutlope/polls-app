import React, {Component} from 'react'
import './registration.css'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import logoDrawing from "./../assets/logo-image.png";
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import Link from "@material-ui/core/Link";


/**
 * functional components
 */

const useStyle = {
    paper: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: 'center',
        position: "relative",
        height: "700px", //TODO: set hight to be phone height
        border:"1px solid red"
    },
    login: {
        position: "absolute",
        bottom: "10px",
    },
    everythingElse: {
        border:'1px solid purple',
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        alignItems: 'center',
        top: "5%",
    },
    form: {
      border:'1px solid green',
      width: "75%", // Fix IE 11 issue.
      display: "flex",
      flexDirection: "column",
    },
    submit: {
        backgroundColor: "#2EC4B6",
      },
    textfield: {
      display: "flex",
      flexDirection:"column",
      alignItems: "center",
      marginBottom: "10px",
    },
    questionBox: {
        marginBottom: "10px"
    },
    firstLine: {
        flexDirection: "row"
    }
  };

class PersonalInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            dob:'',
            gender: 'female',
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log("submitted");
        console.log(this.state);
    }

    render() {
        return(
            <Container component="registration-main" maxWidth="xs">
                <CssBaseline />
                <div className='paper' style={useStyle.paper}>
                    <div style = {useStyle.everythingElse}>
                        <p>Progress bar here (to be replaced)</p><br/><br/>
                        <img className="App-logo" src={logoDrawing} width="309px" height="182px" alt="" /> 
                        <p>Tell us a little about yourself.</p>

                        <form className='registration-form' style={useStyle.form} onSubmit={this.submitHandler} xs={12} sm={12}>
                            <Grid style={useStyle.FirstLine}>
                                <Grid style={useStyle.questionBox} item xs={6} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        value={this.props.firstname}
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid style={useStyle.questionBox} item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="lname"
                                        name="lastName"
                                        variant="outlined"
                                        required
                                        id="lastName"
                                        label="Last Name"
                                        autoFocus
                                        value={this.props.lastname}
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                            </Grid>
                                <Grid style={useStyle.questionBox} item xs={12}>
                                        <TextField
                                            autoComplete="dateOfBirth"
                                            name="dob"
                                            variant="outlined"
                                            required
                                            id="dob"
                                            label="Date Of Brith:"
                                            autoFocus
                                            type='date'
                                            onChange={this.changeHandler}/>
                                </Grid>
                                <FormControl component="gender-radio">
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup defaultValue="female" aria-label="gender" name="gender">
                                        <FormControlLabel value="female" control={<Radio />} label="Female" onChange={this.changeHandler} />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" onChange={this.changeHandler} />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" onChange={this.changeHandler} />
                                    </RadioGroup>
                                </FormControl>

                            <Link href='/Registration-create-account'>
                                <Button variant="contained" 
                                    color="primary"
                                    type='submit'>
                                        Next
                                </Button>
                            </Link>
                            </form>
                        </div>
                        <Grid className={useStyle.login}>Already have an account? 
                            <Link href='/'>Log in here.</Link>
                        </Grid>
                    </div>
                </Container>
        );
    }
}

export default PersonalInfo;