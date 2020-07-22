import React, { useState, useContext, useEffect } from "react";
import "./poll.css";
import { Link } from "react-router-dom";
import home from "./../../assets/home.png";
import trending from "./../../assets/trending.png";
import profile from "./../../assets/profile.png";
import addPoll from "./../../assets/addPoll.png";
import saveIcon from "./../../assets/save.png";
import skipIcon from "./../../assets/skip.png";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import ChoiceGrid from "./ChoiceGrid";
import Comments from "./Comments";
import CommentsExpanded from "./CommentsExpanded";
import axios from "axios";
import { RegistrationContext } from "./../Registration/RegistrationContext";

const useStyle = makeStyles((theme) => ({
  paper: {
    fontFamily: "Futura",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    height: "700px", //TODO: set hight to be phone height
  },
  topBar: {
    paddingLeft: "10%",
    paddingRight: "10%",
    zIndex: "-1",
    display: "flex",
    width: "100%",
    height: "50px",
    backgroundColor: "#EDEDED",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    width: "20px",
  },
  box: {
    borderRadius: "10px",
    width: "90%",
    height: "87%",
    display: "flex",
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    top: "10%",
  },
  boxTopBar: {
    width: "100%",
    height: "30px",
    backgroundColor: "rgba(150, 150, 150, 0.57)",
    borderRadius: "12px 12px 0px 0px",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    position: "relative",
  },
  formRow: {
    width: "305px",
    display: "flex",
    justifyContent: "space-between",
  },
  choiceGrid: {
    display: "flex",
    position: "absolute",
    marginTop: "1000px",
  },
  saveIcon: {
    marginLeft: "20px",
    display: "flex",
  },
  skipIcon: {
    marginRight: "15px",
    display: "flex",
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  category: {
    fontWeight: "bold",
    fontSize: "15px",
  },
  question: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    height: "40px",
  },
  comments: {
    display: "flex",
    position: "absolute",
  },
}));

export default function Poll(props) {
  const classes = useStyle();
  const [person, setPerson] = useContext(RegistrationContext);
  const [commentOpen, setCommentOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState({
    category: "",
    title: "",
    choices: {
      choiceOne: "",
      choiceTwo: "",
      choiceThree: "",
      choiceFour: "",
    },
    results: {
      choiceOne: 0,
      choiceTwo: 0,
      choiceThree: 0,
      choiceFour: 0,
    },
    comments: ["arielhassandavidarzuwu"],
  }); //todo

  useEffect(() => {
    sendDataSample();
  }, []);

  const sendDataSample = () => {
    axios
      .post(
        "https://us-central1-curiocity-282815.cloudfunctions.net/load-polls-homepage/.json",
        {
          userid: person.username,
          location: person.location,
        }
      )
      .then((response) => {
        console.log("it worked!", response);
        question.category = response.data[index].category;
        question.title = response.data[index].question;
        question.id = response.data[index].pollid;
        const num_choices = response.data[index].options.length;
        const total_votes = response.data[index].votes.reduce(function (a, b) {
          return a + b;
        }, 0);
        if (num_choices == 2) {
          question.choices = {
            choiceOne: response.data[index].options[0],
            choiceTwo: response.data[index].options[1],
            choiceThree: "",
            choiceFour: "",
          };

          if (total_votes != 0) {
            question.results = {
              choiceOne: response.data[index].votes[0] / total_votes,
              choiceTwo: response.data[index].votes[1] / total_votes,
              choiceThree: 0,
              choiceFour: 0,
            };
          }
        } else if (num_choices == 3) {
          question.choices = {
            choiceOne: response.data[index].options[0],
            choiceTwo: response.data[index].options[1],
            choiceThree: response.data[index].options[2],
            choiceFour: "",
          };
          if (total_votes != 0) {
            question.results = {
              choiceOne: response.data[index].votes[0] / total_votes,
              choiceTwo: response.data[index].votes[1] / total_votes,
              choiceThree: response.data[index].votes[2] / total_votes,
              choiceFour: 0,
            };
          }
        } else if (num_choices == 4) {
          question.choices = {
            choiceOne: response.data[index].options[0],
            choiceTwo: response.data[index].options[1],
            choiceThree: response.data[index].options[2],
            choiceFour: response.data[index].options[3],
          };
          if (total_votes != 0) {
            question.results = {
              choiceOne: response.data[index].votes[0] / total_votes,
              choiceTwo: response.data[index].votes[1] / total_votes,
              choiceThree: response.data[index].votes[2] / total_votes,
              choiceFour: response.data[index].votes[3] / total_votes,
            };
          }
        }
        question.comments = response.data[index].comments;
        question.comments.shift();
        setQuestion(question);
      })
      .catch((error) => {
        console.log("it failed", error);
      });
  };

  const setCommentOpenHandler = (e) => {
    setCommentOpen(!commentOpen);
  };

  const saveHandler = (e) => {
    //todo
  };

  const skipHandler = (e) => {
    //todo
  };

  if (commentOpen) {
    return <CommentsExpanded setCommentOpen={setCommentOpenHandler} />;
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.topBar}>
          <img src={home} alt='Home' />
          <Link to='/Trending'>
            <img src={trending} alt='Trending' />
          </Link>
          <Link to='/StartPoll'>
            <img src={addPoll} alt='Add Poll' />
          </Link>
          <Link to='/Me'>
            <img src={profile} alt='Me' />
          </Link>
        </div>
        <Box container className={classes.box} boxShadow={2}>
          <Grid className={classes.boxTopBar}>
            <img
              src={saveIcon}
              className={classes.saveIcon}
              alt='Save'
              onClick={saveHandler}
            />
            <div className={classes.category}>{props.category}</div>
            <img
              className={classes.skipIcon}
              src={skipIcon}
              alt='Next'
              onClick={skipHandler}
            />
          </Grid>
          <div className={classes.question}>
            <Grid className={classes.heading}>
              <h2 className={classes.title}>{props.title}</h2>
              <br />
            </Grid>
            <ChoiceGrid
              className={classes.choiceGrid}
              choices={props.choices}
            />
            <Comments
              comments={props.comments}
              setCommentOpen={setCommentOpenHandler}
            />
          </div>
        </Box>
        <div className={classes.comments}></div>
      </div>
    </Container>
  );
}
