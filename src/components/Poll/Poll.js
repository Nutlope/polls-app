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
import savedIcon from "./../../assets/saved.png";

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
  paperNew: {
    fontFamily: "Futura",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: "700px", //TODO: set hight to be phone height
  },
  topBar: {
    paddingLeft: "10%",
    paddingRight: "10%",
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
  wordsSheet: {
    width: "90%",
  },
}));

export default function Poll(props) {
  const classes = useStyle();
  const [person, setPerson] = useContext(RegistrationContext);
  const [saved, setSaved] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [skip, setSkip] = useState(false);
  const [data, setData] = useState([]);
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
    comments: [],
  }); //todo

  // Causes loadPoll (API call) to run once every time the page is reloaded
  useEffect(() => {
    loadPoll();
  }, []);

  const loadPoll = () => {
    axios
      .post(
        "https://us-central1-curiocity-282815.cloudfunctions.net/load-polls-homepage/.json",
        {
          userid: person.username,
          location: person.location,
        }
      )
      .then((response) => {
        console.log("loading polls worked", response);
        let newQuestion = {};
        setData(response.data);
        // setNumQ = response.data.length;
        newQuestion.category = response.data[index].category;
        newQuestion.title = response.data[index].question;
        newQuestion.id = response.data[index].pollid;
        const num_choices = response.data[index].options.length;
        const total_votes = response.data[index].votes.reduce(function (a, b) {
          return a + b;
        }, 0);

        // Refactored version
        newQuestion.choices = {
          choiceOne: response.data[index].options[0],
          choiceTwo: response.data[index].options[1],
          choiceThree: num_choices === 3 ? response.data[index].options[2] : "",
          choiceFour: num_choices === 4 ? response.data[index].options[3] : "",
        };
        if (total_votes !== 0) {
          newQuestion.results = {
            choiceOne: response.data[index].votes[0] / total_votes,
            choiceTwo: response.data[index].votes[1] / total_votes,
            choiceThree:
              num_choices === 3
                ? response.data[index].votes[2] / total_votes
                : 0,
            choiceFour:
              num_choices === 4
                ? response.data[index].votes[3] / total_votes
                : 0,
          };
        } else {
          newQuestion.results = {
            choiceOne: 0,
            choiceTwo: 0,
            choiceThree: 0,
            choiceFour: 0,
          };
        }
        newQuestion.comments = response.data[index].comments;
        newQuestion.comments.shift();

        setQuestion(newQuestion);
      })
      .catch((error) => {
        console.log("it failed", error);
      });
  };

  const setCommentOpenHandler = (e) => {
    setCommentOpen(!commentOpen);
  };

  const saveHandler = (e) => {
    setSaved(!saved);
    axios
      .post(
        "https://us-central1-curiocity-282815.cloudfunctions.net/save-poll/.json",
        {
          userid: person.username,
          pollid: "b1538466-4be1-4101-8a6e-e32740dbd996",
        }
      )
      .then((response) => {
        console.log("it worked!", response);
      })
      .catch((error) => {
        console.log("it failed", error);
      });
  };

  const skipHandler = (e) => {
    // axios
    //   .post(
    //     "https://us-central1-curiocity-282815.cloudfunctions.net/skip/.json",
    //     {
    //       userid: person.username,
    //       pollid: question.id,
    //     }
    //   )
    //   .then((response) => {
    //     console.log("it worked!", response);
    //   })
    //   .catch((error) => {
    //     console.log("it failed", error);
    //   });
    setSkip(true);
    console.log(index);
    let newIndex = index + 1;
    setIndex(newIndex);
    console.log(newIndex);
    let newQuestion = {};

    newQuestion.category = data[newIndex].category;
    console.log("new question >>>>", newQuestion.category);
    newQuestion.title = data[newIndex].question;
    newQuestion.id = data[newIndex].pollid;
    const num_choices = data[newIndex].options.length;
    const total_votes = data[newIndex].votes.reduce(function (a, b) {
      return a + b;
    }, 0);

    // Refactored version
    newQuestion.choices = {
      choiceOne: data[newIndex].options[0],
      choiceTwo: data[newIndex].options[1],
      choiceThree: num_choices === 3 ? data[newIndex].options[2] : "",
      choiceFour: num_choices === 4 ? data[newIndex].options[3] : "",
    };
    if (total_votes !== 0) {
      newQuestion.results = {
        choiceOne: data[newIndex].votes[0] / total_votes,
        choiceTwo: data[newIndex].votes[1] / total_votes,
        choiceThree:
          num_choices === 3 ? data[newIndex].votes[2] / total_votes : 0,
        choiceFour:
          num_choices === 4 ? data[newIndex].votes[3] / total_votes : 0,
      };
    } else {
      newQuestion.results = {
        choiceOne: 0,
        choiceTwo: 0,
        choiceThree: 0,
        choiceFour: 0,
      };
    }
    newQuestion.comments = data[newIndex].comments;
    newQuestion.comments.shift();

    setQuestion(newQuestion);
  };

  // if (passedAllQ) {
  //   return (
  //     <Container component='main' maxWidth='xs'>
  //       <CssBaseline />
  //       <div className={classes.paper}>
  //         <div className={classes.topBar}>
  //           <img src={home} alt='Home' />
  //           <Link to='/Trending'>
  //             <img src={trending} alt='Trending' />
  //           </Link>
  //           <Link to='/StartPoll'>
  //             <img src={addPoll} alt='Add Poll' />
  //           </Link>
  //           <Link to='/Me'>
  //             <img src={profile} alt='Me' />
  //           </Link>
  //         </div>
  //         <div className={classes.wordsSheet}>
  //           <h2>You've voted on all questions! Please come back later.</h2>
  //         </div>
  //       </div>
  //     </Container>
  //   );
  // }

  // if (skip) {
  //   setIndex(index + 1);

  //   return (
  //     <Container component='main' maxWidth='xs'>
  //       <CssBaseline />
  //       <div className={classes.paper}>
  //         <div className={classes.topBar}>
  //           <img src={home} alt='Home' />
  //           <Link to='/Trending'>
  //             <img src={trending} alt='Trending' />
  //           </Link>
  //           <Link to='/StartPoll'>
  //             <img src={addPoll} alt='Add Poll' />
  //           </Link>
  //           <Link to='/Me'>
  //             <img src={profile} alt='Me' />
  //           </Link>
  //         </div>
  //         <Box container className={classes.box} boxShadow={2}>
  //           <Grid className={classes.boxTopBar}>
  //             {saved ? (
  //               <img
  //                 src={savedIcon}
  //                 className={classes.saveIcon}
  //                 alt='Save'
  //                 onClick={saveHandler}
  //               />
  //             ) : (
  //               <img
  //                 src={saveIcon}
  //                 className={classes.saveIcon}
  //                 alt='Save'
  //                 onClick={saveHandler}
  //               />
  //             )}
  //             <div className={classes.category}>
  //               {question.category === "misc"
  //                 ? "Miscelleneous"
  //                 : question.category}
  //             </div>
  //             <img
  //               className={classes.skipIcon}
  //               src={skipIcon}
  //               alt='Next'
  //               onClick={skipHandler}
  //             />
  //           </Grid>
  //           <div className={classes.question}>
  //             <Grid className={classes.heading}>
  //               <h2 className={classes.title}>{question.title}</h2>
  //               <br />
  //             </Grid>
  //             <ChoiceGrid
  //               className={classes.choiceGrid}
  //               choices={question.choices}
  //               index={index}
  //               setIndex={setIndex}
  //             />
  //             <Comments
  //               comments={question.comments}
  //               setCommentOpen={setCommentOpenHandler}
  //             />
  //           </div>
  //         </Box>
  //         <div className={classes.comments}></div>
  //       </div>
  //     </Container>
  //   );
  // }

  if (commentOpen) {
    return (
      <CommentsExpanded
        setCommentOpen={setCommentOpenHandler}
        comments={question.comments}
      />
    );
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
            {saved ? (
              <img
                src={savedIcon}
                className={classes.saveIcon}
                alt='Save'
                onClick={saveHandler}
              />
            ) : (
              <img
                src={saveIcon}
                className={classes.saveIcon}
                alt='Save'
                onClick={saveHandler}
              />
            )}
            <div className={classes.category}>
              {question.category === "misc"
                ? "Miscelleneous"
                : question.category}
            </div>
            <img
              className={classes.skipIcon}
              src={skipIcon}
              alt='Next'
              onClick={skipHandler}
            />
          </Grid>
          <div className={classes.question}>
            <Grid className={classes.heading}>
              <h2 className={classes.title}>{question.title}</h2>
              <br />
            </Grid>
            <ChoiceGrid
              className={classes.choiceGrid}
              choices={question.choices}
              index={index}
              setIndex={setIndex}
            />
            <Comments
              comments={question.comments}
              setCommentOpen={setCommentOpenHandler}
            />
          </div>
        </Box>
        <div className={classes.comments}></div>
      </div>
    </Container>
  );
}
