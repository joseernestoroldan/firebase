import { useContext, createContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signIn = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signIn(provider);
  };

  const FacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    signIn(provider);
  };

  const GitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    signIn(provider);
  };

  const GoogleLogOut = async () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ GoogleSignIn, GoogleLogOut, FacebookSignIn, GitHubSignIn, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  return useContext(AuthContext);
};
