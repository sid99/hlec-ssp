import styled from "styled-components";

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

export const ItemImageFormContainer = styled.div({
  display: "flex",
  // height: 120,
  flexDirection: "row",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "space-between",
  paddingTop: 20,
  paddingLeft: 20,
  paddingRight: 20,
  // border: "1px solid black",
});

// Item Banner
export const ItemImageContainer = styled.div({
  borderRadius: 8,
  width: 25,
  height: 25,
  // display: "flex",
  // flexDirection: "column",
  alignItems: "center",
  // justifyContent: "center",
  alignContent: "center",
  marginRight: 10,
  // border: "1px solid black",
});

export const ItemImage = styled.img({
  borderRadius: 8,
  width: 25,
  height: 25,
  // border: "1px solid black",
  // boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.08)",
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

// Item Banner Form
export const FormItemImageContainer = styled.div({
  borderRadius: 8,
  width: 50,
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 10,
  // border: "1px solid black",
});

export const FormItemImage = styled.img({
  borderRadius: 8,
  width: 50,
  height: 50,
  // boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
});
