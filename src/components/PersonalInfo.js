import React, {Component} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

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
        return(
            <div>
                <img className='progress-bar' src='' alr='progress bar'/>
                <p>Progress bar here (to be replaced)</p><br/><br/>
                <img className="App-logo" src={this.props.logo} alt='logo' /> 
                <p>Tell us a little about yourself.</p>
                <form onSubmit={this.submitHandler}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                id="firstName"
                label="Email"
                autoFocus
              />
            </Grid>
            </Grid>
                    {/* <label htmlFor='firstname'>First Name</label>
                    <input id='firstname'
                           type='text'
                           name='firstname'
                           value={this.props.firstname}
                           onChange={this.changeHandler}/>
                    <br/>

                    <label htmlFor='lastname'>Last name</label>
                    <input id='lastname'
                           type='text'
                           name='lastname'
                           onChange={this.changeHandler}/>
                    <br/>

                    <label htmlFor='dob'>Date of Birth</label>
                    <input id='dob'
                           type='date'
                           name='dob'
                           onChange={this.changeHandler}/><br/>
                    
                    <label htmlFor='gender'>Gender</label>
                    <form id='gender'>
                        <div className="radio">
                            <label>
                            <input type="radio" value="female" name='gender'
                                checked={this.state.gender === 'female'} 
                                onChange={this.changeHandler} />
                                Female
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                            <input type="radio" value="male" name='gender'
                                checked={this.state.gender === 'male'} 
                                onChange={this.changeHandler} />
                                Male
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                            <input type="radio" value="preferNotToSay" name='gender'
                                checked={this.state.gender === 'preferNotToSay'} 
                                onChange={this.changeHandler} />
                                Prefer not to say
                            </label>
                        </div> */}
                    </form>                    
                    <br/>
                    <Button variant="contained" color="primary">
                        Just a Button
                    </Button>
                    {/* <button type='submit'><img alt='Next Page Triangle'/></button> */}
                {/* </form> */}
            </div>
        );
    }
}

export default PersonalInfo;