import styled from "styled-components";

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

export const ItemsContainer = styled.div({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  // flexWrap: "wrap",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  // alignItems: "flex-start",
  // border: '1px solid blue',
  // width: "100%",
  // padding: 0,
});

export const ButtonsContainer = styled.div({
  display: "flex",
  // flex: 1,
  // flexDirection: 'column',
  flexWrap: "wrap",
  // justifyContent: "flex-end",
  justifyContent: "center",
  alignItems: "center",
  border: "1px hidden white",
  // border: "1px solid blue",
  // width: "100%",
  paddingRight: 40,
  position: "fixed",
  right: 0,
  bottom: 0,
  marginBottom: 40,
});

export const ScrollWraper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemPreviewContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // alignItems: "center",
  border: "1px hidden white",
  width: "100%",
  height: 160,
  fontSize: 32,
  boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.09)",
  paddingTop: 10,
  paddingLeft: 20,
  paddingRight: 20,
  // marginRight: 10,
  // marginBottom: 10,
});

export const NameContainer = styled.div({
  display: "flex",
  // flexDirection: "column",
  flex: 1,
  justifyContent: "flex-start",
  alignContent: "center",
  alignItems: "center",
  // border: '1px solid black',
  border: "1px hidden white",
  height: 20,
  fontSize: 14,
  fontWeight: "bold",
  width: "100%",
});

export const DescContainer = styled.div({
  // border: '1px solid black',
  border: "1px hidden white",
  alignItems: "center",
  height: 16,
  fontSize: 10,
  width: "100%",
});

export const ActionsContainer = styled.div({
  border: "1px hidden white",
  alignItems: "center",
  height: 60,
  fontSize: 10,
  fontWeight: "bold",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

// Menu Banner
export const BannerContainer = styled.div({
  width: "100%",
  height: 150,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Banner = styled.img({
  boxShadow: "0 4px 4px 0 rgba(0,0,0,0.2)",
  width: 200,
  height: "100%",
  objectFit: "cover",
});

export const DetailsTopConatainer = styled.div({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  // border: "1px solid blue",
  border: "1px hidden white",
  width: "100%",
});

export const ItemImage = styled.img({
  borderRadius: 8,
  width: 80,
  height: 60,
  alignItems: "center",
  // boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
});

export const DescriptionContainer = styled.div({
  alignItems: "center",
  // border: "1px solid blue",
  width: "100%",
  height: "100%",
  paddingLeft: 10,
});

export const ShareContainer = styled.div({
  // border: "1px solid black",
  height: 150,
  padding: 0,
  maring: 0,
  position: "absolute",
  width: "100%",
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // boxShadow: "10px 10px 10px 10px rgba(0,0,0,0.5)",
});

export const ShareButtonsContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  flex: 1,
  paddingBottom: 50,
});

export const MenuListActionsContainer = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  position: "fixed",
  left: 0,
  bottom: 0,
  // height: 80,
  marginBottom: 40,
  width: "100%",
  paddingLeft: 0,
  border: "1px hidden white",
});

export const DragAndDropContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // border: "1px solid blue",
  width: "100%",
  // height: 40,
  // fontWeight: 800,
  // fontSize: 22,
  paddingTop: 20,
});
