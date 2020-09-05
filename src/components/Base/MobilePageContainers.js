import styled from "styled-components";

// export const MobilePageOuterContainer = styled.div((props) => ({
export const MobilePageOuterContainer = styled.div`
  display: flex;
  padding-top: 0px;
  flexDirection: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  align-content: center;
  position: relative;
  // border: 1px solid red;
  height: calc(100vh - 60px);
  // max-width: 500px;
  // height: 100vh;
  // marginTop: -60px;
  width: 100%;
`;

export const MobilePageOuterContainerTwo = styled.div`
  padding-top: 0px;
  position: relative;
  // border: 1px solid red;
  height: calc(100vh - 60px);
  max-width: 500px;
  // height: 100vh;
  // marginTop: -60px;
  width: 100%;
  // maxWidth: 500,
`;

// height: 90vh;
// height: "calc(100% - 60px)",
export const MobilePageInnerContainer = styled.div(props => ({
  // width: 360,
  // border: "1px solid black",
  maxWidth: 500,
  width: "100%",
  paddingLeft: 20,
  paddingRight: 20,
}));

export const MobilePageOuterLongContainer = styled.div({
  display: "flex",
  paddingTop: 0,
  flexDirection: "column",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  position: "relative",
  // border: 1px solid red;
  // height: 100vh;
  // marginTop: -60px;
  width: "100%",
});
