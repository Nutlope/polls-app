import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logoDrawing from "./../assets/logo-image.png";
import logoText from "./../assets/logo.png";
import { Link as RouterLink } from "react-router-dom";
import { FirebaseContext } from "./Firebase";
import axios from "axios";

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
}));

export default function SignUp() {
  const classes = useStyles();
  const initialUserInfo = {
    email: "",
    passwordOne: "",
    // username: "",
    // passwordTwo: "",
    error: null,
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);

  console.log("This is the current state", userInfo);

  const OnSubmit = (event) => {
    //   props.firebase
    //     .doCreateUserWithEmailAndPassword(userInfo.email, userInfo.passwordOne)
    //     .then((authUser) => {
    //       setUserInfo({ ...initialUserInfo });
    //     })
    //     .catch((error) => {
    //       setUserInfo({ error });
    //     });
    //   event.preventDefault();
  };

  const OnChange = (event) => {
    setUserInfo({ [event.target.name]: event.target.value });
  };

  const sendData = () => {
    axios.post("https://reqres.in/api/register").then((response) => {
      console.log(response);
    });
  };

  const isInvalid = userInfo.passwordOne === "" || userInfo.email === "";

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logoDrawing} width="309px" height="182px" alt="" />
        <img src={logoText} width="309px" height="182px" alt="" />
        <form className={classes.form} onSubmit={OnSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                variant="outlined"
                required
                id="email"
                label="Email"
                autoFocus
                value={userInfo.email}
                onChange={OnChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                id="password"
                label="Password"
                name="password"
                value={userInfo.passwordOne}
                onChange={OnChange}
              />
            </Grid>
          </Grid>
          <Button
            disabled={isInvalid}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log in
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              Don't have an account?{" "}
              <RouterLink to="/Registration-personal-info">
                <Link href="/StartPoll" variant="body2">
                  Register here
                </Link>
              </RouterLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

// Add error handling for form
// Form validation
