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
import {Link as RouterLink} from "react-router-dom";



/**
 * functional components
 */
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
        const useStyle = makeStyles((theme) => ({
            
          }));
    
        return(
            <Container component="registration-main" maxWidth="xs">
                <CssBaseline />
                <img className='progress-bar' src='' alr='progress bar'/>
                <p>Progress bar here (to be replaced)</p><br/><br/>
                <img className="App-logo" src={logoDrawing} width="309px" height="182px" alt="" /> 
                <p>Tell us a little about yourself.</p>
                <form className='registration-form' onSubmit={this.submitHandler}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3} spacing={1}>
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
                        <Grid item xs={12} sm={3} spacing={1}>
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
                        <Grid item xs={12} sm={12}>
                            <TextField
                autoComplete="dateOfBirth"
                name="dob"
                variant="outlined"
                required
                id="dob"
                label="Date Of Brith:"
                autoFocus
                type='date'
                onChange={this.changeHandler}
                            />
                        </Grid>
                        <FormControl component="gender-radio">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup defaultValue="female" aria-label="gender" name="gender">
                                <FormControlLabel value="female" control={<Radio />} label="Female" onChange={this.changeHandler} />
                                <FormControlLabel value="male" control={<Radio />} label="Male" onChange={this.changeHandler} />
                                <FormControlLabel value="other" control={<Radio />} label="Other" onChange={this.changeHandler} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <RouterLink to='/Registration-create-account'>
                        <Button variant="contained" 
                            color="primary"
                            type='submit'>
                                Next
                        </Button>
                    </RouterLink>
                    </form>
                </Container>
        );
    }
}

export default PersonalInfo;