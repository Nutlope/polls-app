import React, { useState, useContext } from "react";
import { PollContext } from "./PollContext";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styles from "./poll.module.css";
import logoDrawing from "./../../assets/logo-image.png";
import { Link } from "react-router-dom";
import ProgressDotUnfinished from "./../../assets/progress-dot-unfinished.png";
import ProgressDotFinished from "./../../assets/progress-dot-finished.png";
import vectorLeft from "./../../assets/vector-left.png";
import vectorRight from "./../../assets/vector-right.png";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import home from "./../../assets/home.png";
import trending from "./../../assets/trending.png";
import profile from "./../../assets/profile.png";
import addPoll from "./../../assets/addPoll.png";
import { CssBaseline } from "@material-ui/core";

function OptionsPoll() {
  const [poll, setPoll] = useContext(PollContext);
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [isAdded, setIsAdded] = useState(0);

  const handleOptions = (event) => {
    if (event.target.name === "option1") {
      setOption1(event.target.value);
    } else if (event.target.name === "option2") {
      setOption2(event.target.value);
    } else if (event.target.name === "option3") {
      setOption3(event.target.value);
    } else if (event.target.name === "option4") {
      setOption4(event.target.value);
    }
  };

  const clickHandler = () => {
    setIsAdded(isAdded + 1);
  };

  const submitHandler = () => {
    poll.options = [option1, option2, option3, option4];
    setPoll(poll);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={styles.paper}>
        <div className={styles.topBar}>
          <Link to="/Poll">
            <img src={home} alt="Home" className={styles.navIcon} />
          </Link>
          <Link to="/Trending">
            <img src={trending} alt="Trending" className={styles.navIcon} />
          </Link>
          <Link to="/StartPoll">
            <img src={addPoll} alt="Add Poll" className={styles.navIcon} />
          </Link>
          <Link to="/Me">
            <img src={profile} alt="Me" className={styles.navIcon} />
          </Link>
        </div>
        <Grid container className={styles.top}>
          <Grid item xs={12}>
            Start a Poll
          </Grid>
        </Grid>
        <div className={styles.progressBar}>
          <Link to="/StartPoll">
            <img src={vectorLeft} className={styles.vector} alt="Back" />
          </Link>
          <img
            src={ProgressDotFinished}
            className={styles.progressDot}
            alt=""
          />
          <img
            src={ProgressDotFinished}
            className={styles.progressDot}
            alt=""
          />
          <img
            src={ProgressDotUnfinished}
            className={styles.progressDot}
            alt=""
          />
          <img
            src={ProgressDotUnfinished}
            className={styles.progressDot}
            alt=""
          />
          <img
            src={ProgressDotUnfinished}
            className={styles.progressDot}
            alt=""
          />
          <Link to="/Agespoll" onClick={submitHandler}>
            <img
              type="submit"
              src={vectorRight}
              className={styles.vector}
              alt="Next"
            />
          </Link>
        </div>
        <div className={styles.title}>What do they have to choose from?</div>
        <div className={styles.form}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="option1"
                variant="outlined"
                fullWidth
                required
                label="Option 1"
                value={option1}
                onChange={handleOptions}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="option2"
                variant="outlined"
                fullWidth
                required
                label="Option 2"
                value={option2}
                onChange={handleOptions}
                autoFocus
              />
            </Grid>
            {isAdded >= 1 && (
              <Grid item xs={12}>
                <TextField
                  name="option3"
                  variant="outlined"
                  fullWidth
                  label="Enter Option 3 here"
                  value={option3}
                  onChange={handleOptions}
                  autoFocus
                />
              </Grid>
            )}
            {isAdded >= 2 && (
              <Grid item xs={12}>
                <TextField
                  name="option4"
                  variant="outlined"
                  fullWidth
                  label="Enter Option 4 here"
                  value={option4}
                  onChange={handleOptions}
                  autoFocus
                />
              </Grid>
            )}
          </Grid>
        </div>
        <Button onClick={clickHandler}>
          <Icon
            className={styles.addButton}
            color="primary"
            style={{ fontSize: 50 }}
          >
            add_circle
          </Icon>
        </Button>
        <img
          src={logoDrawing}
          width="234px"
          height="140px"
          top="138px"
          alt=""
          className={styles.bottom}
        />
      </div>
    </Container>
  );
}

export default OptionsPoll;
