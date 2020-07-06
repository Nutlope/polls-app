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
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';



const useStyles = makeStyles((theme) => ({
    paper: {
      border:'1px solid black',
      marginTop: theme.spacing(8), //needed?
      display: "flex",
      flexDirection: "column",
      alignItems: 'center',
      height: "700px", //TODO: set hight to be phone height
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
    login: {
      position: "absolute",
      bottom: "70px",
    },
    interestGrid: {
        border: "1px solid gray",
        borderRadius: "5px",
        width: "100%", // Fix IE 11 issue.
        border: "1px solid black",
        display:"flex",
    }
  }));

export default function PersonalInterest () {
      const classes = useStyles();

      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <p>Progress bar placeholder</p>
            <img src={logoDrawing} width="309px" height="182px" alt=""/>
            <p className='top-para'>Last step! What peaks your interests?</p>

            <Link href='/StartPoll'>
                <form>
                    <Grid xs={6} sm={6}>
                        <Grid className={classes.interestGrid}>
                        <img />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />} 
                            name="checkedH" />}
                            label="Music"/>
                        </Grid>

                        <Grid className={classes.interestGrid} >
                        <img />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />} 
                            name="checkedH" />}
                            label="Entertainment"/>
                        </Grid>

                        <Grid className={classes.interestGrid}>
                        <img />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />} 
                            name="checkedH" />}
                            label="Sports"/>
                        </Grid>
                        
                        <Grid className={classes.interestGrid}>
                        <img />
                        <FormControlLabel
                            control={<Checkbox icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />} 
                            name="checkedH" />}
                            label="Politics"
                        />
                        </Grid>
                        
                        <Grid className={classes.interestGrid}>
                        <img />
                        <FormControlLabel 
                            control={<Checkbox icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />} 
                            name="checkedH" />}
                            label="Fashion"
                        />
                        </Grid>
                        
                        <Grid className={classes.interestGrid}>
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
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}>Complete!</Button>
              </Link>
            <Grid className={classes.login}>Already have an account? <Link href='/'>Log in here.</Link></Grid>
          </div>
        </Container>
      );





}