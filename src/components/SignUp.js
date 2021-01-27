import React from "react";
import logoDrawing from "./../assets/logo-image.png";
import logoText from "./../assets/logo.png";
import { Link } from "react-router-dom";
import styles from "./signup.module.css";
import { Button, TextField, Grid, Container } from "@material-ui/core";

export default function SignUp() {
  return (
    <Container component="main" maxWidth="xs">
      <div className={styles.paper}>
        <img src={logoDrawing} width="309px" height="182px" alt="" />
        <img src={logoText} width="309px" height="182px" alt="" />
        <form className={styles.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                id="firstName"
                label="Email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                id="lastName"
                label="Password"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
          </Grid>
          <Link to="/StartPoll">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submit}
            >
              Log in
            </Button>
          </Link>
          <Grid container justify="flex-end">
            <Grid item>
              Don't have an account? <Link to="/Registration-personal-info">Register here</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
