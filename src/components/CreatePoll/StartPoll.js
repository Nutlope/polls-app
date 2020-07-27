import React, { useState, useContext } from "react";
import { PollContext } from "./PollContext";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import styles from "./poll.module.css";
import logoDrawing from "./../../assets/logo-image.png";
import ProgressDotUnfinished from "./../../assets/progress-dot-unfinished.png";
import ProgressDotFinished from "./../../assets/progress-dot-finished.png";
import vectorRight from "./../../assets/vector-right.png";
import vectorLeft from "./../../assets/vector-left.png";
import { Link } from "react-router-dom";
import home from "./../../assets/home.png";
import trending from "./../../assets/trending.png";
import profile from "./../../assets/profile.png";
import addPoll from "./../../assets/addPoll.png";
import { CssBaseline } from "@material-ui/core";

function StartPoll() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [poll, setPoll] = useContext(PollContext);

  const questionHandler = (e) => {
    setQuestion(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    poll.question = question;
    poll.category = category;
    setPoll(poll);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={styles.paper}>
        <div className={styles.topBar}>
          <img src={home} alt="Home" className={styles.navIcon} />
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
          <img
            type="submit"
            src={vectorLeft}
            className={styles.vector}
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
          <img
            src={ProgressDotUnfinished}
            className={styles.progressDot}
            alt=""
          />
          <Link to="/OptionsPoll" onClick={submitHandler}>
            <img
              type="submit"
              src={vectorRight}
              className={styles.vector}
              alt=""
            />
          </Link>
        </div>
        <div className={styles.title}>What's on your mind?</div>
        <form className={styles.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="question"
                variant="outlined"
                fullWidth
                required
                label="Enter your question here"
                value={question}
                onChange={questionHandler}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                labelId="demo-simple-select-label"
                fullWidth
                id="demo-simple-select"
                value={category}
                onChange={categoryHandler}
              >
                <MenuItem value="Music">Music</MenuItem>
                <MenuItem value="Entertainment">Entertainment</MenuItem>
                <MenuItem value="Sports">Sports</MenuItem>
                <MenuItem value="Politics">Politics</MenuItem>
                <MenuItem value="Fashion">Fashion</MenuItem>
                <MenuItem value="Lifestyle">Lifestyle</MenuItem>
                <MenuItem value="Not Applicable">Not Applicable</MenuItem>
              </Select>
              <FormHelperText>What category does it fall under?</FormHelperText>
            </Grid>
          </Grid>
        </form>
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

export default StartPoll;
