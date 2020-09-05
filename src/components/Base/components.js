import styled from "styled-components";

export const HeaderContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // border: '1px solid blue',
  width: "100%",
  height: 40,
  fontSize: 22,
  fontWeight: 800,
});

// used for no list items use case
export const SimpleMessageOne = styled.div({
  paddingTop: 200,
  paddingLeft: 20,
  paddingRight: 20,
  width: "100%",
  height: 40,
  fontSize: 22,
  fontWeight: 800,
  textAlign: "center",
});

export const FilterHeaderContainer = styled.div({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: 20,
  // border: '1px solid blue',
  width: "100%",
  height: 55,
  fontSize: 20,
  fontWeight: 800,
});

export const FilterListHeaderContainer = styled.div({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: 20,
  // border: '1px solid blue',
  width: "100%",
  height: 30,
  fontSize: 16,
  fontWeight: 600,
});

export const FlexCenterContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // border: "1px solid blue",
  width: "100%",
  paddingLeft: 20,
  paddingRight: 20,
});

export const FormContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // border: "1px solid blue",
  width: "100%",
  height: "100%",
  flex: 1,
  // height: "100%",
  paddingLeft: 20,
  paddingRight: 20,
});

export const FormButtonContainer = styled.div({
  display: "flex",
  flex: 1,
  width: "100%",
  justifyContent: "flex-end",
  flexDirection: "column",
});

export const FabButtonContainer = styled.div({
  width: 160,
  height: 80,
  display: "flex",
  justifyContent: "center",
});

export const BottomOneButtonContainer = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  position: "fixed",
  left: 0,
  bottom: 0,
  marginBottom: 40,
  width: "100%",
  paddingLeft: 0,
  border: "1px hidden white",
});
