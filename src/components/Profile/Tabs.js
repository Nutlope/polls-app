import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ScrollContainer from "react-indiana-drag-scroll";
import QuestionCard from "./QuestionCard";
import "./me.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "inherit",
    width: 500,
    fontFamily: "Futura",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  appBarText: {
    fontFamily: "Futura",
  },
  swipeableViews: {
    //border: "1px solid green",
  },
  tabPanel: {
    // border: "1px solid blue",
    height: "355px",
  },
  scrollSection: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    marginBottom: "0px",
    marginTop: "-20px",
    width: "100%",
    left: "0",
    height: "350px",
    // overflowY: "hidden",
    overflowY: "scroll",
  },
  scrollSectionRight: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    marginBottom: "0px",
    marginTop: "-20px",
    marginLeft: "100%",
    marginRight: "-100%",
    left: "0",
    height: "350px",
    // overflowY: "hidden",
    overflowY: "scroll",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const classes = useStyles();

  const postedPolls = {
    0: {
      category: "Politics",
      time: "1 min ago",
      question: "Kanye West for President? ^",
      choices: {
        choiceOne: "yes",
        choiceTwo: "no",
        choiceThree: "",
        choiceFour: "",
      },
      results: {
        choiceOne: 0,
        choiceTwo: 0,
        choiceThree: 0,
        choiceFour: 0,
      },
    },
    1: {
      category: "Music",
      time: "2 hours ago",
      question: "Drake the greatest rapper of all time??",
      choices: {
        choiceOne: "yes",
        choiceTwo: "no",
        choiceThree: "",
        choiceFour: "",
      },
      results: {
        choiceOne: 45,
        choiceTwo: 55,
        choiceThree: 0,
        choiceFour: 0,
      },
    },
    2: {
      category: "Entertainment",
      time: "4 hours ago",
      question: "Which Netflix Standup Special do you recommend?",
      choices: {
        choiceOne: "Hassan Minhaj",
        choiceTwo: "Trevor Noah",
        choiceThree: "John Mulaney",
        choiceFour: "“Ali Wong",
      },
      results: {
        choiceOne: 12,
        choiceTwo: 33,
        choiceThree: 20,
        choiceFour: 35,
      },
    },
    3: {
      category: "Politics",
      time: "1 hour ago",
      question:
        "there are foundational problems in police forces, so the only way for change is systematic change.",
      choices: {
        choiceOne: "yes",
        choiceTwo: "no",
        choiceThree: "neutral",
        choiceFour: "",
      },
      results: {
        choiceOne: 81,
        choiceTwo: 12,
        choiceThree: 7,
        choiceFour: 0,
      },
    },
  };

  const savedPolls = {
    0: {
      category: "Lifestyle",
      time: "2 hours ago",
      question: "What is ur preferred method of brewing coffee at home?",
      choices: {
        choiceOne: "French Press",
        choiceTwo: "Espresso Machine",
        choiceThree: "Coffee Bag",
        choiceFour: "",
      },
      results: {
        choiceOne: 20,
        choiceTwo: 41,
        choiceThree: 39,
        choiceFour: 0,
      },
    },
    1: {
      category: "Politics",
      time: "1 hour ago",
      question:
        "Should Johns Hopkins University install a private police force?",
      choices: {
        choiceOne: "yes",
        choiceTwo: "no",
        choiceThree: "",
        choiceFour: "",
      },
      results: {
        choiceOne: 39,
        choiceTwo: 61,
        choiceThree: 0,
        choiceFour: 0,
      },
    },
    2: {
      category: "Sports",
      time: "2 hours ago",
      question: "Is it safe that the NBA is reconvening in July?",
      choices: {
        choiceOne: "yes",
        choiceTwo: "no",
        choiceThree: "nonono",
        choiceFour: "",
      },
      results: {
        choiceOne: 49,
        choiceTwo: 33,
        choiceThree: 18,
        choiceFour: 0,
      },
    },
    3: {
      category: "Fashion",
      time: "1 day ago",
      question: "Which sneakers should I get?",
      choices: {
        choiceOne: "Air Force One’s",
        choiceTwo: "Air Jordan 1",
        choiceThree: "Reebok club c 85",
        choiceFour: "Adidas Stan Smith",
      },
      results: {
        choiceOne: 34,
        choiceTwo: 21,
        choiceThree: 13,
        choiceFour: 32,
      },
    },
  };

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="#505050"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            label="Posted Polls"
            {...a11yProps(0)}
            className={classes.appBarText}
          />
          <Tab
            label="Saved Polls"
            {...a11yProps(1)}
            className={classes.appBarText}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        className={classes.swipeableViews}
      >
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={0}
          dir={theme.direction}
        >
          <ScrollContainer className={classes.scrollSection}>
            <Grid>
              {Object.values(postedPolls).map((poll) => {
                return <QuestionCard poll={poll} />;
              })}
            </Grid>
          </ScrollContainer>
        </TabPanel>

        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={1}
          dir={theme.direction}
        >
          <ScrollContainer className={classes.scrollSectionRight}>
            {Object.values(savedPolls).map((poll) => {
              return <QuestionCard poll={poll} />;
            })}
          </ScrollContainer>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
