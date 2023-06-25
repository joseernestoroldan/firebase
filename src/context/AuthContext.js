import { useContext, createContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const useSignIn = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const LoginWithEmailAndPass = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      console.log('Logged in user:', user);
    } catch (error) {
      console.error('Authentication error:', error);
    }

  }

  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    useSignIn(provider);
  };

  const FacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    useSignIn(provider);
  };

  const GitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    useSignIn(provider);
  };

  const LogOut = async () => {
    signOut(auth);
  };

  const Registration = async (email, password) => {

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Registration successful, you can redirect or perform other actions
      console.log('Registered user:', user);
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error);
    }
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
    <AuthContext.Provider value={{ GoogleSignIn, LogOut, FacebookSignIn, GitHubSignIn, user, Registration, LoginWithEmailAndPass }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  return useContext(AuthContext);
};
