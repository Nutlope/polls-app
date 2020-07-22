import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
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
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: "0 mi",
  },
  {
    value: 30,
    label: "30 mi",
  },
  {
    value: 60,
    label: "60 mi",
  },
  {
    value: 100,
    label: "100 mi",
  },
];

function valuetext(value) {
  return `${value} miles`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom className={classes.text}>
        Mile Radius:
      </Typography>
      <Slider
        className={classes.slider}
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
}
