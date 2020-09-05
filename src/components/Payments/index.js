import React from "react";

import {HeaderContainer} from "../Base/components";
import AppBar from "../Base/AppBar";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../Base/MobilePageContainers";

const headerTitle = "Payments";

export default function Main() {
  return (
    <>
      <AppBar headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<MobilePageOuterContainerTwo>
	  <div style={{height: 200}} />
	  <HeaderContainer> Comming Soon !</HeaderContainer>
	</MobilePageOuterContainerTwo>
      </MobilePageOuterContainer>
    </>
  );
}
