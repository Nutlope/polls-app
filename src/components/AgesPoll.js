import React, { useState, useContext } from "react";
import { PollContext } from "./PollContext";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "./poll.module.css";
import logoDrawing from "./../assets/logo-image.png";
import { Link } from "react-router-dom";
import ProgressDotUnfinished from "./../assets/progress-dot-unfinished.png";
import ProgressDotFinished from "./../assets/progress-dot-finished.png";
import vectorLeft from "./../assets/vector-left.png";
import vectorRight from "./../assets/vector-right.png";
import RangeSlider from "./Util/RangeSlider";
import home from "./../assets/home.png";
import trending from "./../assets/trending.png";
import profile from "./../assets/profile.png";
import addPoll from "./../assets/addPoll.png";
import { CssBaseline } from "@material-ui/core";

function AgesPoll() {
  const [poll, setPoll] = useContext(PollContext);
  const [ageRange, setAgeRange] = useState([20, 35]);
  const [gender, setGender] = useState("");

  const submitHandler = () => {
    poll.age_range = ageRange;
    poll.gender = gender;
    setPoll(poll);
  };

  const genderHandler = (e) => {
    setGender(e.target.value);
  };

  const changeHandler = (e, val) => {
    setAgeRange(val);
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
          <Link to="/OptionsPoll">
            <img src={vectorLeft} className={styles.vector} alt="" />
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
          <Link to="/LocationPoll" onClick={submitHandler}>
            <img
              type="submit"
              src={vectorRight}
              className={styles.vector}
              alt=""
            />
          </Link>
        </div>
        <div className={styles.title}>Who do you want opinions from?</div>
        <RangeSlider changeHandler={changeHandler} ageRange={ageRange} />
        <Grid item xs={12}>
          {/* TODO: Fix FormControl not showing wide enough */}
          <FormControl className={styles.formControl}>
            <InputLabel id="demo-simple-select-label">Target Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              fullWidth
              id="demo-simple-select"
              value={gender}
              onChange={genderHandler}
            >
              <MenuItem value="Any">Any</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Non-Binary">Non-Binary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
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

export default AgesPoll;
