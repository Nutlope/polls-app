import React, {Component} from 'react'
import './registration.css'
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import logoDrawing from "./../assets/logo-image.png";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from "@material-ui/core/Link";
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';



const useStyles = makeStyles((theme) => ({
    paper: {
        border:'1px solid black',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: 'center',
        position: "relative",
        height: "700px", //TODO: set hight to be phone height
    },
    login: {
        position: "absolute",
        bottom: "10px",
    },
    everythingElse: {
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        alignItems: 'center',
        top: "5%",
    },
    form: {
      width: "80%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
      display: "flex",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#2EC4B6",
    },
    interestGrid: {
        border: "1px solid gray",
        borderRadius: "5px",
        width: "100%", // Fix IE 11 issue.
        border: "1px solid black",
        display:"flex",
    }
  }));

const changeHandler = (event) => {
  console.log(event.target.value);
};

export default function PersonalInterest () {
      const classes = useStyles();

      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <div className={classes.everythingElse}>
            <p>Progress bar placeholder</p>
            <img src={logoDrawing} width="309px" height="182px" alt=""/>
            <p className='top-para'>Last step! What peaks your interests?</p>

                <form >
                    <Grid container xs={12}>
                        <Grid container item xs={6}>
                        <img />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />} 
                            name="checkedH" />}
                            label="Music"/>
                        </Grid>

                        <Grid container item xs={6}>
                        <img />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />} 
                            name="checkedH" />}
                            label="Entertainment"/>
                        </Grid>
                    </Grid>
                    
                    <Grid container xs={12}>
                        <Grid container item xs={6}>
                        <img />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />} 
                            name="checkedH" />}
                            label="Sports"/>
                        </Grid>
                        
                        <Grid container item xs={6}>
                        <img />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />} 
                            name="checkedH" />}
                            label="Politics"
                        />
                        </Grid>
                    </Grid>
                        
                    <Grid container xs={12}>  
                        <Grid container item xs={6}>
                        <img />
                        <FormControlLabel 
                            control={<Checkbox icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />} 
                            name="checkedH" />}
                            label="Fashion"
                        />
                        </Grid>
                        
                        <Grid container item xs={6}>
                        <img />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />} 
                            name="checkedH" />}
                            label="Lifestyle"
                        />
                        </Grid>
                    </Grid>

                </form>
                <Link href='/StartPoll'>
                  <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.submit}>Complete!</Button>
                  </Link>
                  </div>
            <Grid className={classes.login}>Already have an account? <Link href='/'>Log in here.</Link></Grid>
          </div>
        </Container>
      );





}