//@ts-check
import {
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, database } from "../../Config/Firebase/Firebase";

export const AuthContext = createContext({
  user: null,
  authIsReady: false,
  signup: null,
  login: null,
  signout: null,
  continueWithGoogle: null,
  forgotPassword: null,
  message: null
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authIsReady, setAuthIsReady] = useState(false);
  const [message, setMessage] = useState(null);
  const signup = async (
    /**@type {string} */ email,
    /** @type {any} */ password,
    /**@type {any} */ userName
  ) => {
    if (email && password && userName) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => updateProfile(auth.currentUser, { displayName: userName }))
        .catch((error) => setMessage(error.message));
    } else {
      setMessage("Please fill the required fields to create an account");
    }
  };
  const login = async (
    /**@type {string} */ email,
    /**@type {any} */ password
  ) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  const continueWithGoogle = async () => {
    await signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
      setMessage(error.message);
    });
  };

  const signout = async () => {
    await signOut(auth);
    setUser(null);
  };
  const forgotPassword = (/**@type {string} */ email) => {
    sendPasswordResetEmail(auth, email);
    setMessage(`password rest link has been sent to ${email}`);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (userCrebditials) => {
      setUser(userCrebditials);
      setAuthIsReady(true);
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        continueWithGoogle,
        user,
        authIsReady,
        signup,
        login,
        signout,
        forgotPassword,
        message
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
