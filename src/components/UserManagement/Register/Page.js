import React from "react";

import Form from "./Form";
import AppBar from "../../Base/AppBar";
import {
  MobilePageOuterContainer,
  MobilePageInnerContainer,
} from "../../Base/MobilePageContainers";

export default function RegisterPage() {
  const headerTitle = "Register";

  return (
    <>
      <AppBar headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<MobilePageInnerContainer>
	  <Form buttonName="Register" header="Register" />
	</MobilePageInnerContainer>
      </MobilePageOuterContainer>
    </>
  );
}

