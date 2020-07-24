import React, { useState, useContext, useEffect } from "react";
import { PollContext } from "./PollContext";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import { makeStyles } from "@material-ui/core/styles";
import styles from "./poll.module.css";
import logoDrawing from "./../assets/logo-image.png";
import { Link } from "react-router-dom";
import ProgressDotUnfinished from "./../assets/progress-dot-unfinished.png";
import ProgressDotFinished from "./../assets/progress-dot-finished.png";
import vectorLeft from "./../assets/vector-left.png";
import vectorRight from "./../assets/vector-right.png";
import LocationSlider from "./Util/LocationSlider";
import { v4 as uuidv4 } from "uuid";
import home from "./../assets/home.png";
import trending from "./../assets/trending.png";
import profile from "./../assets/profile.png";
import addPoll from "./../assets/addPoll.png";
import { CssBaseline } from "@material-ui/core";

function LocationPoll() {
  const [poll, setPoll] = useContext(PollContext);
  const [mileRadius, setMileRadius] = useState(0);
  const [pollid, setPollid] = useState();

  const submitHandler = () => {
    poll.radius = mileRadius;
    poll.pollid = pollid;
    setPoll(poll);
  };

  const changeHandler = (e, val) => {
    setMileRadius(val);
  };

  useEffect(() => {
    setPollid(uuidv4());
  }, []);

  console.log("This is the global poll in 4th screen: ", poll);

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
          <Link to="/AgesPoll">
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
            src={ProgressDotFinished}
            className={styles.progressDot}
            alt=""
          />
          <img
            src={ProgressDotUnfinished}
            className={styles.progressDot}
            alt=""
          />
          <Link to="/FinalPoll" onClick={submitHandler}>
            <img
              type="submit"
              src={vectorRight}
              className={styles.vector}
              alt=""
            />
          </Link>
        </div>
        <div className={styles.title}>Where do you want opinions from?</div>
        <LocationSlider changeHandler={changeHandler} mileRadius={mileRadius} />
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

export default LocationPoll;
