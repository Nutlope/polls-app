import React, {Component} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Link from "@material-ui/core/Link";
import { shadows } from '@material-ui/system';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';


const useStyle = makeStyles((theme) => ({
    paper: {
        border:'1px solid black',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: 'center',
        position: "relative",
        height: "700px", //TODO: set hight to be phone height
    },
    everythingElse: {
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        alignItems: 'center',
        top: "5%",
    },
    box: {
      borderRadius: "10px",
      width: "80%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      height: "80%",
      alignItems: "center",
    },
    question: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        position: "absolute",
        top: "10%",
        alignItems: "center",
    },
    heading: {
        display: "flex",
        flexDirection:"column",
        width: "80%",
    },
    category: {
        width: "100%",
        height: "6%",
        position: "absolute",
        top: "0px",
        backgroundColor: "gray",
        textAlign: "center",
    },
    choice: {
        width: "60%",
        border: "1px solid grays",
        marginBotton: "10px",
        margin: theme.spacing(1),
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
    },
}));

class Poll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numQuestion: 4,
            category: "Entertainment",
            title: "I am a hard-coded question. Is curioCity Cool?",
            choices: {
                "choiceOne": "Very Good!",
                "choiceTwo": "Of course",
                "choiceThree": "Fabulous",
                "choiceFour": "No need to ask",
            }            
        }
    };


    render() {
        return(
            <Container component="registration-main" maxWidth="xs">
                <CssBaseline />
                <div style={useStyle.paper}>
                <Box container style={useStyle.box} boxShadow={2}>
                    <div style={useStyle.category}>
                        {this.state.category}
                    </div>
                    <div style={useStyle.question}> 
                        <Grid style={useStyle.heading}>
                            <h2>{this.state.title}</h2>
                            <br/>
                            <p>PlaceHolder-Save ...and ..Skip</p>
                        </Grid>
                        <Chip
                            label={this.state.choices.choiceOne}
                            clickable
                            variant="outlined"
                            color="primary"
                            style={useStyle.choice}
                        />
                        <Chip
                            label={this.state.choices.choiceTwo}
                            clickable
                            variant="outlined"
                            color="primary"
                            style={useStyle.choice}
                        />
                        <Chip
                            label={this.state.choices.choiceThree}
                            clickable
                            variant="outlined"
                            color="primary"
                            style={useStyle.choice}
                        />
                        <Chip
                            label={this.state.choices.choiceFour}
                            clickable
                            variant="outlined"
                            color="primary"
                            style={useStyle.choice}
                        />
                    </div>
                </Box>

                <div style={useStyle.comments}>
                        
                </div>
                </div>
            </Container>
        );
    }
}

export default Poll;