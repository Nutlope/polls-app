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
  scrollSection: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    marginBottom: "0px",
    width: "100%",
    left: "0",
    height: "100%",
    overflow: "hidden",
    overflowY: "scroll",
  },
  tabPanel: {
    height: "360px",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
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
      time: "2 hours ago",
      question: "Should JHU install a private police force",
      choices: {
        choiceOne: "yes",
        choiceTwo: "no",
        choiceThree: "",
        choiceFour: "",
      },
      results: {
        choiceOne: 37,
        choiceTwo: 69,
        choiceThree: 0,
        choiceFour: 0,
      },
    },
    1: {
      category: "Politics",
      time: "2 hours ago",
      question: "Should JHU install a private police force",
      choices: {
        choiceOne: "yes",
        choiceTwo: "no",
        choiceThree: "",
        choiceFour: "",
      },
      results: {
        choiceOne: 37,
        choiceTwo: 69,
        choiceThree: 0,
        choiceFour: 0,
      },
    },
    2: {
      category: "Politics",
      time: "2 hours ago",
      question: "Should JHU install a private police force",
      choices: {
        choiceOne: "yes",
        choiceTwo: "no",
        choiceThree: "",
        choiceFour: "",
      },
      results: {
        choiceOne: 37,
        choiceTwo: 69,
        choiceThree: 0,
        choiceFour: 0,
      },
    },
    3: {
      category: "Politics",
      time: "2 hours ago",
      question: "Should JHU install a private police force",
      choices: {
        choiceOne: "yes",
        choiceTwo: "no",
        choiceThree: "",
        choiceFour: "",
      },
      results: {
        choiceOne: 37,
        choiceTwo: 69,
        choiceThree: 0,
        choiceFour: 0,
      },
    },
  };

  const savedPolls = {
    0: {
      category: "Politics",
      time: "2 hours ago",
      question: "Should JHU install a private police force",
      choices: {
        choiceOne: "yes",
        choiceTwo: "no",
        choiceThree: "",
        choiceFour: "",
      },
      results: {
        choiceOne: 37,
        choiceTwo: 69,
        choiceThree: 0,
        choiceFour: 0,
      },
    },
    1: {
      category: "Politics",
      time: "2 hours ago",
      question: "Should JHU install a private police force",
      choices: {
        choiceOne: "yes",
        choiceTwo: "no",
        choiceThree: "",
        choiceFour: "",
      },
      results: {
        choiceOne: 37,
        choiceTwo: 69,
        choiceThree: 0,
        choiceFour: 0,
      },
    },
    2: {
      category: "Politics",
      time: "2 hours ago",
      question: "Should JHU install a private police force",
      choices: {
        choiceOne: "yes",
        choiceTwo: "no",
        choiceThree: "",
        choiceFour: "",
      },
      results: {
        choiceOne: 37,
        choiceTwo: 69,
        choiceThree: 0,
        choiceFour: 0,
      },
    },
    3: {
      category: "Politics",
      time: "2 hours ago",
      question: "Should JHU install a private police force",
      choices: {
        choiceOne: "yes",
        choiceTwo: "no",
        choiceThree: "",
        choiceFour: "",
      },
      results: {
        choiceOne: 37,
        choiceTwo: 69,
        choiceThree: 0,
        choiceFour: 0,
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
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='#505050'
          variant='fullWidth'
          aria-label='full width tabs example'
        >
          <Tab
            label='Posted Polls'
            {...a11yProps(0)}
            className={classes.appBarText}
          />
          <Tab
            label='Saved Polls'
            {...a11yProps(1)}
            className={classes.appBarText}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={0}
          dir={theme.direction}
        >
          <ScrollContainer className={classes.scrollSection} hideScrollbars>
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
          <ScrollContainer className={classes.scrollSection}>
            {Object.values(savedPolls).map((poll) => {
              return <QuestionCard poll={poll} />;
            })}
          </ScrollContainer>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
