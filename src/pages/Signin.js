import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UseAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  FacebookLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import "../App.css";

const Signin = () => {
  const { GoogleSignIn, FacebookSignIn, GitHubSignIn, user } = UseAuth();
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

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user, navigate]);

  return (
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
        <GithubLoginButton onClick={handleGitHubSignIn}></GithubLoginButton>
      </div>
    </div>
  );
};

export default Signin;
