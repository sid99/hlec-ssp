import styled from "styled-components";

export const SelectItemInnerContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const SelectItemInnerLeftContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
});

// Main containers
export const HeaderContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // border: '1px solid blue',
  width: "100%",
  height: 40,
  fontWeight: 800,
  fontSize: 22,
});

export const ItemHeader = styled.div({
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  // border: "1px solid blue",
  width: "100%",
});

export const LeftItemHeader = styled.div({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  // justifyContent: "center",
  // border: "1px solid blue",
  width: "100%",
});

export const DetailsConatiner = styled.div({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  // justifyContent: "space-between",
  alignItems: "center",
  // border: "1px solid blue",
  width: "100%",
});

export const DetailsTopConatainer = styled.div({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  // justifyContent: "space-between",
  // alignItems: "center",
  // border: "1px solid blue",
  width: "100%",
});

export const DescriptionContainer = styled.div({
  alignItems: "center",
  // border: "1px solid blue",
  width: "100%",
  height: "100%",
});

export const DetailsBottomConatainer = styled.div({
  display: "flex",
  flex: 1,
  height: 40,
  paddingTop: 10,
  justifyContent: "space-between",
  // alignItems: "center",
  // border: "1px solid blue",
  width: "100%",
});

export const ActionsContainer = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  position: "fixed",
  left: 0,
  bottom: 0,
  marginBottom: 40,
  width: "100%",
  paddingLeft: 0,
  border: "1px hidden white",
});

export const AddItemContainer = styled.div({
  width: 160,
  height: 80,
  // border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  // position: "fixed",
  // left: 0,
  // bottom: 0,
  // marginBottom: 40,
  // width: "100%",
  // textAlign: "center",
});

export const UploadButtonContainer = styled.div({
  display: "flex",
  // flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "flex-end",
  // paddingBottom: 10,
  // border: "1px solid black",
  height: "100%",
});
