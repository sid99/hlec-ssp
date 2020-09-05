import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  MobilePageOuterContainer,
} from "./MobilePageContainers";

export const SpinnerContainer = styled.div({
  width: "100%",
  height: "100%",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
});

const Spinner = () => (
  <MobilePageOuterContainer>
  <SpinnerContainer>
    <CircularProgress />
  </SpinnerContainer>
</MobilePageOuterContainer>
);

export default Spinner;
