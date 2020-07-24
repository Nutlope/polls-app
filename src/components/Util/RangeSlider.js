import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
    border: "1px solid grey",
    margin: "10px",
    padding: "20px",
    borderRadius: "20px",
  },
  slider: {
    marginTop: "50px",
  },
  text: {
    fontFamily: "Futura",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    marginBottom: "10px",
    marginTop: "20px",
    color: "    grey",
  },
});

function valuetext(value) {
  return value;
}

export default function RangeSlider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom className={classes.text}>
        Age Range:
      </Typography>
      <Slider
        min={18}
        max={90}
        onChange={props.changeHandler}
        value={props.ageRange}
        className={classes.slider}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
