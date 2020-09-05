import React from "react";
import {useRouter} from "next/router";
import Button from "@material-ui/core/Button";

import {FormContainer} from "../Base/components";
import {ButtonStyle} from "../Base/styles";
import {routes} from "../../config";
import AppBar from "../Base/AppBar";
import {
  MobilePageOuterContainer,
  MobilePageInnerContainer,
} from "../Base/MobilePageContainers";

const telegramRegistraionUrl = "https://t.me/ava_v0_bot";

const LandingPage = () => {
  const router = useRouter();
  const headerTitle = "HyperLocal";
  const buttonName = "Sign In";

  const onSubmit = () => {
    router.push(routes.SIGN_IN);;
  }

  return (
    <>
      <AppBar headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<MobilePageInnerContainer>
	  <FormContainer>
	    <h3> HyperLocal </h3>
	    <a target="_blank" href={telegramRegistraionUrl}> Connect to telegram </a>
	    <Button
	      style={ButtonStyle}
	      type="submit"
	      variant="contained"
	      color="primary"
	      onClick={onSubmit}
	    >
	      {buttonName}
	    </Button>
	  </FormContainer>
	</MobilePageInnerContainer>
      </MobilePageOuterContainer>
    </>
  );
}

export default LandingPage;
