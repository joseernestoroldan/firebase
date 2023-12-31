import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleButton from "react-google-button";
import {
  FacebookLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import "../App.css";

import { UseAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Copyright from "../components/Copyright/Copyright";

const defaultTheme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    LoginWithEmailAndPass,
    GoogleSignIn,
    FacebookSignIn,
    GitHubSignIn,
    user,
  } = UseAuth();

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    GoogleSignIn();
  };
  const handleFacebookSignIn = () => {
    FacebookSignIn();
  };
  const handleGitHubSignIn = () => {
    GitHubSignIn();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    LoginWithEmailAndPass(email, password);
    setEmail("");
    setPassword("");
  };
  
  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user, navigate]);



  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Divider variant="middle">Or</Divider>
        <Box>
          <div className="container">
            <div>
              <h2>Signin</h2>
            </div>

            <GoogleButton onClick={handleGoogleSignIn} />
            <div className="button-container">
              <FacebookLoginButton
                onClick={handleFacebookSignIn}
              ></FacebookLoginButton>
            </div>
            <div className="button-container">
              <GithubLoginButton
                onClick={handleGitHubSignIn}
              ></GithubLoginButton>
            </div>
          </div>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
