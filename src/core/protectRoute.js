import React, {useEffect} from "react";
import {useRouter} from "next/router";

import firebase from "./hooks/useFirebase";
import {routes} from "../config";

export default function ProtectRoute(Component) {
  return () => {
    const router = useRouter();
    useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
	if (user===null || !user) {
	  router.push(routes.SIGN_IN);
	}
      });
      return () => unsubscribe();
    }, []);

    return <Component {...arguments} />;
  };
}
