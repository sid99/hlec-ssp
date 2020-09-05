import React from "react";

import {HeaderContainer} from "../Base/components";
import AppBar from "../Base/AppBar";
import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../Base/MobilePageContainers";
import Twelve from "./BarTwelve.tsx";
// import Area from "./Area.tsx";
import Area from "./Area2";
// import Thirteen from "./BarThirteen.tsx";

const headerTitle = "Reports";

export default function Main() {
  return (
    <>
      <AppBar headerTitle={headerTitle} />
      <MobilePageOuterContainer>
	<MobilePageOuterContainerTwo>
	  <div style={{height: 200}} />
	  <HeaderContainer> Comming Soon !</HeaderContainer>
	  {/*
	  <div style={{height: 20}} />
	  <Area width="550" height="400" />
	  */}
	</MobilePageOuterContainerTwo>
      </MobilePageOuterContainer>
    </>
  );
}

/*
	<div style={{ flex:1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
	<div style={{height: 10}} />
	  <Twelve width="350" height="300" />
	<div style={{height: 10}} />
	  <Thirteen width="350" height="300" />
	<div style={{height: 10}} />
	</div>
*/
