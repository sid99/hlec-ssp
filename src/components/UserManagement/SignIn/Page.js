import React from "react";
import {useRouter} from "next/router";

import Form from "./Form";
import {routes} from "../../../config";
import AppBar from "../../Base/AppBarWithOnlyHeader";
import {
  MobilePageOuterContainer,
  MobilePageInnerContainer,
} from "../../Base/MobilePageContainers";
import {useAuth} from "../../../core/hooks/useFirebase";

export default function SignInPage() {
  const router = useRouter();
  const {db, signin} = useAuth();
  const headerTitle = "Sign In";
  const buttonName = "Sign In";

  const next = async user => {
    const storesRef = db.collection("stores");
    const query = storesRef.where("owner", "==", user.uid);
    const querySnapshot = await query.get();
    if (querySnapshot.empty) {
      router.push(routes.CREATE_STORE);
    } else {
      // const stores = querySnapshot.docs.map(doc => doc.data());
      router.push(routes.STORE);
    }
  };

  const handleError = error => (alert(error));

  const onSubmit = data => {
    signin(data.email, data.password, next, handleError);
  };

  return (
    <>
      <AppBar headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<MobilePageInnerContainer>
	  <Form buttonName={buttonName} header="Register" onSubmit={onSubmit} />
	</MobilePageInnerContainer>
      </MobilePageOuterContainer>
    </>
  );
}

