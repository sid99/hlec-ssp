import React from "react";

import {
  MobilePageOuterContainer,
  MobilePageOuterContainerTwo,
} from "../Base/MobilePageContainers";
import Twelve from "./BarTwelve.tsx";
import Thirteen from "./BarThirteen.tsx";

export default function Reports() {
  return (
    <MobilePageOuterContainer>
      <MobilePageOuterContainerTwo>
	<div style={{ flex:1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
	<div style={{height: 10}} />
	<Twelve width="350" height="300" />
	<div style={{height: 10}} />
	<Thirteen width="350" height="300" />
	<div style={{height: 10}} />
      </div>
      </MobilePageOuterContainerTwo>
    </MobilePageOuterContainer>
  );
}
