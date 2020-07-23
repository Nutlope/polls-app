import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import home from "./../../assets/home.png";
import trending from "./../../assets/trending.png";
import profile from "./../../assets/profile.png";
import addPoll from "./../../assets/addPoll.png";
import ExpandIcon from "./../../assets/expand.png";
import CollapseIcon from "./../../assets/collapse.png";
import ScrollContainer from "react-indiana-drag-scroll";
import QuestionCard from "./QuestionCard";
import logo from "./../../assets/logo-image.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
    display: "flex",
    width: "100%",
    height: "50px",
    backgroundColor: "#EDEDED",
    alignItems: "center",
    justifyContent: "space-between",
  },
  scrollableSection: {
    position: "absolute",
    bottom: "0px",
    height: "79%",
    width: "100%",
  },
  heading: {
    textAlign: "left",
    width: "90%",
    fontWeight: "bold",
    fontSize: "36px",
  },
  category: {
    height: "35px",
    fontWeight: "bold",
    fontSize: "16px",
    width: "100%",
    backgroundColor: "#8CD8D1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0px",
  },
  categoryText: {
    leftMargin: "20px",
  },
  expandIcon: {
    display: "flex",
    position: "absolute",
    right: "20px",
  },
  expandedCategory: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "30px",
    justifyContent: "center",
    alignItems: "center",
  },
  collapsedCategory: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "20px",
  },
  questionCard: {
    marginBottom: "100px",
    marginTop: "50px",
  },
  logo: {
    display: "flex",
    position: "absolute",
    top: "4.5%",
    right: "0",
    height: "12%",
  },
}));

function ExpandableHeading(categoryText, question) {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);

  const clickOpenHandler = () => {
    setClicked(!clicked);
  };

  const bgDict = {
    Politics: "#8CD8D1",
    Lifestyle: "rgba(255, 159, 28, 0.56)",
    Entertainment: "rgba(231, 29, 54, 0.47)",
    Music: "rgba(128, 147, 241, 0.55)",
    Fasion: "rgba(78, 139, 67, 0.56)",
    Sports: "rgba(158, 158, 158, 0.56)",
    Miscelleneous: "#EEE0CB",
    "In Your City": "rgba(158, 158, 158, 0.56)",
  };

  if (clicked) {
    return (
      <div className={classes.expandedCategory}>
        <div
          className={classes.category}
          style={{ backgroundColor: bgDict[categoryText] }}
        >
          <p className={classes.categoryText}>{categoryText}</p>
          <img
            className={classes.expandIcon}
            src={CollapseIcon}
            alt="expand"
            onClick={clickOpenHandler}
          />
        </div>
        <QuestionCard
          category={question.category}
          title={question.title}
          choices={question.choices}
          results={question.results}
          comments={question.comments}
        />
      </div>
    );
  }

  return (
    <div className={classes.collapsedCategory}>
      <div
        className={classes.category}
        style={{ backgroundColor: bgDict[categoryText] }}
      >
        <p className={classes.categoryText}>{categoryText}</p>
        <img
          className={classes.expandIcon}
          src={ExpandIcon}
          alt="expand"
          onClick={clickOpenHandler}
        />
      </div>
    </div>
  );
}

export default function Trending(props) {
  const classes = useStyles();

  const question = {
    category: "entertainment",
    title: "Which Wes Anderson Movie should I watch tonight?",
    choices: {
      choiceOne: "The Royal sth",
      choiceTwo: "Moonrise Kingdom",
      choiceThree: "Grand Budapest Hotel",
      choiceFour: "",
    },
    results: {
      choiceOne: 80,
      choiceTwo: 10,
      choiceThree: 10,
      choiceFour: 0,
    },
    comments: [
      "If you’re fan of animation, go with Isle of Dogs",
      "Grand Budapest Hotel has a great cast!",
    ],
    name: "Jane Doe",
    location: "Atlanta, GA",
    polls: {
      //only need id
      posted: [
        {
          category: "politics",
          title: "Should JHU install a private police force",
          choices: {
            choiceOne: "yes",
            choiceTwo: "no",
            choiceThree: "",
            choiceFour: "",
          },
          results: {
            choiceOne: "53",
            choiceTwo: "47",
            choiceThree: "",
            choiceFour: "",
          },
        },
      ],
      saved: [
        {
          category: "fashion",
          title: "Which pair should I buy?",
          choices: {
            choiceOne: "img 1",
            choiceTwo: "img 2",
            choiceThree: "img 3",
            choiceFour: "",
          },
          results: {
            choiceOne: "23",
            choiceTwo: "50",
            choiceThree: "27",
            choiceFour: "",
          },
        },
      ],
    },
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.topBar}>
          <Link to="/Poll">
            <img src={home} alt="Home" />
          </Link>
          <img src={trending} alt="Trending" />
          <Link to="/StartPoll">
            <img src={addPoll} alt="Add Poll" />
          </Link>
          <Link to="/Me">
            <img src={profile} alt="Me" />
          </Link>
        </div>

        <h1 className={classes.heading}>Trending</h1>

        <ScrollContainer className={classes.scrollableSection}>
          {ExpandableHeading("Politics", question)}
          {ExpandableHeading("Lifestyle", question)}
          {ExpandableHeading("Entertainment", question)}
          {ExpandableHeading("Music", question)}
          {ExpandableHeading("Sports", question)}
          {ExpandableHeading("Fashion", question)}
          {ExpandableHeading("Miscelleneous", question)}
          {ExpandableHeading("In Your City", question)}
        </ScrollContainer>
        <img className={classes.logo} src={logo} alt="" />
      </div>
    </Container>
  );
}
