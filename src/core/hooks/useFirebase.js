import React, {
  useState, useEffect, useContext, createContext,
} from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";

import {config} from "../../config";

if (!firebase.apps.length) {
  firebase.initializeApp(config.FIREBASE);
}
if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(config.FIREBASE);
  // To enable analytics. https://firebase.google.com/docs/analytics/get-started
  // if ("measurementId" in config) firebase.analytics()
}

const authContext = createContext();

export function ProvideAuth({children}) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState({uid: 1});
  const db = firebase.firestore();
  const storage = firebase.storage();

  const signin = (email, password, next, handleError) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
	setUser(response.user);
	next(response.user);
      })
      .catch(e => {
	handleError(e.message);
      });
  };

  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
	setUser(response.user);
	return response.user;
      });
  };

  const signout = next => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
	setUser(false);
	next();
      });
  };

  const sendPasswordResetEmail = email => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
	return true;
      });
  };

  const sendSignInLinkToEmail = email => {
    return firebase
      .auth()
      .sendSignInLinkToEmail(email, config.actionCodeSettings)
      .then(() => {
	window.localStorage.setItem("emailForSignIn", email);
	return true;
      });
  };

  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
	return true;
      });
  };

  const isSignInWithEmailLink = () => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
      }
      // The client SDK will parse the code from the link for you.
      firebase.auth().signInWithEmailLink(email, window.location.href)
	.then(function(result) {
	  // Clear email from storage.
	  window.localStorage.removeItem("emailForSignIn");
	  setUser(result.user);
	  return response.user;
	})
	.catch(function(error) {
	  // Some error occurred, you can inspect the code: error.code
	  // Common errors could be invalid email and invalid or expired OTPs.
	});
    }
  }

  const recaptchaVerifier = (onSubmit) => {
    return firebase
      .auth
      .RecaptchaVerifier("recaptcha-container", {
	"size": "invisible",
	"callback": function(response) {
	  // reCAPTCHA solved, allow signInWithPhoneNumber.
	  onSubmit();
	}
      });
  }

  const signInWithPhoneNumber = (phoneNumber, appVerifier) => {
    const testVerificationCode = "123456";
    return firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
	// SMS sent. Prompt user to type the code from the message, then sign the
	// user in with confirmationResult.confirm(code).
	// window.confirmationResult = confirmationResult;
	return confirmationResult.confirm(testVerificationCode)
      }).catch(function (error) {
	// Error; SMS not sent
	// ...
      });
  }

  const bareAuth = firebase.auth();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
	setUser(user);
      } else {
	setUser(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    db,
    storage,
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    recaptchaVerifier,
    bareAuth,
    signInWithPhoneNumber,
  };
}

export default firebase;
