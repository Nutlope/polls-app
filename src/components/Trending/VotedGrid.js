import React from "react";
import "./trending.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import selected from "./../../assets/selected.png";

const useStyle = makeStyles((theme) => ({
  formRow: {
    width: "305px",
    display: "flex",
    justifyContent: "space-between",
  },
  choiceGray: {
    border: "2px solid #A6A6A6",
    padding: "0",
    borderRadius: "6px",
    width: "150px",
    marginLeft: "0px", //todo
    height: "100px",
    marginBottom: "5px",
  },
  choiceBlack: {
    border: "2px solid black",
    padding: "0",
    borderRadius: "6px",
    width: "150px",
    marginLeft: "0px", //todo
    height: "100px",
    marginBottom: "5px",
  },
  choiceBlank: {
    border: "2px solid #A6A6A6",
    padding: "0",
    borderRadius: "6px",
    width: "150px",
    marginLeft: "0px", //todo
    height: "100px",
    marginBottom: "5px",
  },
  choiceGrayLong: {
    border: "2px solid #A6A6A6",
    padding: "0",
    borderRadius: "6px",
    width: "150px",
    marginLeft: "0px", //todo
    height: "200px",
    marginBottom: "5px",
  },
  choiceBlackLong: {
    border: "2px solid black",
    padding: "0",
    borderRadius: "6px",
    width: "150px",
    marginLeft: "0px", //todo
    height: "200px",
    marginBottom: "5px",
  },
  topBar: {
    padding: "0",
    marginTop: "2px",
    width: "100%",
    height: "20%",
    top: "0px",
    display: "flex",
    flexDirection: "row",
  },
  choiceWordsBlack: {
    display: "flex",
    padding: "0",
    width: "70%",
    alignItems: "center",
    whiteSpace: "normal",
    fontSize: "12px",
    fontFamily: "Futura",
    fontWeight: "bold",
  },
  percentageBlack: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: "0",
    width: "30%",
    whiteSpace: "normal",
    fontSize: "18px",
    fontFamily: "Futura",
    fontWeight: "bold",
  },
  choiceWordsGray: {
    display: "flex",
    padding: "0",
    width: "70%",
    alignItems: "center",
    whiteSpace: "normal",
    fontSize: "12px",
    fontFamily: "Futura",
    fontWeight: "bold",
    color: "#A6A6A6", //todo
  },
  percentageGray: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: "0",
    width: "30%",
    whiteSpace: "normal",
    fontSize: "18px",
    fontFamily: "Futura",
    fontWeight: "bold",
    color: "#A6A6A6", //todo
  },
  colorBand: {
    width: "100%", //todo
    display: "flex",
    position: "relative",
    marginBottom: "0px",
    borderRadius: "0 0 4px 4px",
  },
  selected: {
    display: "flex",
    position: "relative",
    marginBottom: "5px",
    marginRight: "5px",
  }, //todo
}));

export default function VotedGrid(props) {
  console.log(props.choices);
  const classes = useStyle();
  const percentages = {
    //todo needs to grab from backend
    choiceOne: "10",
    choiceTwo: "20",
    choiceThree: "70",
    choiceFour: "",
  };

  //helper functions

  const nextHandler = () => {
    //todo
    //props.refreshHadnler(props.curQ + 1);
  };

  const blackBlock = (choice, result, backgroundColor) => {
    const height = result;
    const heightStr = height + "px";
    const topHeight = 75 - height;
    const topHeightStr = topHeight + "px";
    return (
      <Container variant="outlined" className={classes.choiceBlack}>
        <Container className={classes.topBar}>
          <Container className={classes.choiceWordsBlack}>{choice}</Container>
          <Container className={classes.percentageBlack}>{result}%</Container>
        </Container>

        <Container
          variant="outlined"
          className={classes.colorBand}
          style={{
            height: heightStr,
            backgroundColor: backgroundColor,
            top: topHeightStr,
          }}
        ></Container>
        <img src={selected} className={classes.selected} alt="" />
      </Container>
    );
  };

  const grayBlock = (choice, result, backgroundColor) => {
    const height = (105 / 100) * result;
    const heightStr = height + "px";
    const topHeight = 75 - height;
    const topHeightStr = topHeight + "px";
    return (
      <Container variant="outlined" className={classes.choiceGray}>
        <Container className={classes.topBar}>
          <Container className={classes.choiceWordsGray}>{choice}</Container>
          <Container className={classes.percentageGray}>{result}%</Container>
        </Container>

        <Container
          variant="outlined"
          className={classes.colorBand}
          style={{
            height: heightStr,
            backgroundColor: backgroundColor,
            top: topHeightStr,
          }}
        ></Container>
      </Container>
    );
  };

  const blackBlockLong = (choice, result, backgroundColor) => {
    const height = ((100 * 2) / 100) * result;
    const heightStr = height + "px";
    const topHeight = 155 - height;
    const topHeightStr = topHeight + "px";
    return (
      <Container variant="outlined" className={classes.choiceBlackLong}>
        <Container className={classes.topBar}>
          <Container className={classes.choiceWordsBlack}>{choice}</Container>
          <Container className={classes.percentageBlack}>{result}%</Container>
        </Container>

        <Container
          variant="outlined"
          className={classes.colorBand}
          style={{
            height: heightStr,
            backgroundColor: backgroundColor,
            top: topHeightStr,
          }}
        >
          <img src={selected} className={classes.selected} alt="" />
        </Container>
      </Container>
    );
  };

  const grayBlockLong = (choice, result, backgroundColor) => {
    const height = ((105 * 2) / 100) * result;
    const heightStr = height + "px";
    const topHeight = 155 - height;
    const topHeightStr = topHeight + "px";
    return (
      <Container variant="outlined" className={classes.choiceGrayLong}>
        <Container className={classes.topBar}>
          <Container className={classes.choiceWordsGray}>{choice}</Container>
          <Container className={classes.percentageGray}>{result}%</Container>
        </Container>

        <Container
          variant="outlined"
          className={classes.colorBand}
          style={{
            height: heightStr,
            backgroundColor: backgroundColor,
            top: topHeightStr,
          }}
        ></Container>
      </Container>
    );
  };

  const blockOne = (choiceOne, resultOne, backgroundColor) => {
    return "choiceOne" === props.voted
      ? blackBlock(choiceOne, resultOne, backgroundColor)
      : grayBlock(choiceOne, resultOne, backgroundColor);
  };

  const blockTwo = (choiceTwo, resultTwo, backgroundColor) => {
    return "choiceTwo" === props.voted
      ? blackBlock(choiceTwo, resultTwo, backgroundColor)
      : grayBlock(choiceTwo, resultTwo, backgroundColor);
  };

  const blockThree = (choiceThree, resultThree, backgroundColor) => {
    return "choiceThree" === props.voted
      ? blackBlock(choiceThree, resultThree, backgroundColor)
      : grayBlock(choiceThree, resultThree, backgroundColor);
  };

  const blockFour = (choiceFour, resultFour, backgroundColor) => {
    return "choiceFour" === props.voted
      ? blackBlock(choiceFour, resultFour, backgroundColor)
      : grayBlock(choiceFour, resultFour, backgroundColor);
  };

  const blankGrid = () => {
    return <Container variant="outlined" className={classes.choiceBlank} />;
  };

  const blockOneLong = (choiceOne, resultOne, backgroundColor) => {
    return "choiceOne" === props.voted
      ? blackBlockLong(choiceOne, resultOne, backgroundColor)
      : grayBlockLong(choiceOne, resultOne, backgroundColor);
  };

  const blockTwoLong = (choiceTwo, resultTwo, backgroundColor) => {
    return "choiceTwo" === props.voted
      ? blackBlockLong(choiceTwo, resultTwo, backgroundColor)
      : grayBlockLong(choiceTwo, resultTwo, backgroundColor);
  };

  // render component

  if (props.choices.choiceThree === "") {
    return (
      <div>
        <Grid className={classes.formRow}>
          {blockOneLong(
            props.choices.choiceOne,
            percentages.choiceOne,
            "#FF9F1C"
          )}
          {blockTwoLong(
            props.choices.choiceTwo,
            percentages.choiceTwo,
            "#2EC4B6"
          )}
        </Grid>
      </div>
    );
  }

  if (props.choices.choiceFour === "") {
    console.log(props.voted);
    return (
      <div>
        <Grid className={classes.formRow}>
          {blockOne(props.choices.choiceOne, percentages.choiceOne, "#FF9F1C")}
          {blockTwo(props.choices.choiceTwo, percentages.choiceTwo, "#2EC4B6")}
        </Grid>
        <Grid className={classes.formRow}>
          {blockThree(
            props.choices.choiceThree,
            percentages.choiceThree,
            "#E71D36"
          )}
          {blankGrid()}
        </Grid>
      </div>
    );
  }

  return (
    <div>
      <Grid className={classes.formRow}>
        {blockOne(props.choices.choiceOne, percentages.choiceOne, "#FF9F1C")}
        {blockTwo(props.choices.choiceTwo, percentages.choiceTwo, "#2EC4B6")}
      </Grid>

      <Grid className={classes.formRow}>
        {blockThree(
          props.choices.choiceThree,
          percentages.choiceThree,
          "#E71D36"
        )}
        {blockFour(props.choices.choiceFour, percentages.choiceFour, "#8093F1")}
      </Grid>
    </div>
  );
}

/**
 * decide gray or black
 * 'choiceOne' == props.clicked ? graycompoennt(choice=... percentage=.../) : blackComponent()
 *
 *
 *
 *
 * TEST
 * 3 choies, 2 choices
 */
