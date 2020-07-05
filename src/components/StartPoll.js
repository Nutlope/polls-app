import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#2EC4B6",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 320,
  },
}));

function StartPoll() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          What's on your mind?
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                fullWidth
                required
                id="firstName"
                label="Enter your question here"
                autoFocus
              />
            </Grid>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                What category does it fall under?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                fullWidth
                id="demo-simple-select"
                value="5"
                onChange=""
              >
                <MenuItem>Music</MenuItem>
                <MenuItem>Entertainment</MenuItem>
                <MenuItem>Sports</MenuItem>
                <MenuItem>Entertainment</MenuItem>
                <MenuItem>Entertainment</MenuItem>
                <MenuItem>Entertainment</MenuItem>
                <MenuItem>Entertainment</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default StartPoll;
