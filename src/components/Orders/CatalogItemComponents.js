import styled from "styled-components";

// Item containers
export const CatalogItemContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  // border: "1px solid black",
  width: "100%",
  height: 80,
  fontSize: 32,
  boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.08)",
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 0,
  paddingBottom: 0,
  margin: 0,
});

export const DescriptionContainer = styled.div({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  // paddingLeft: 20,
  // border: "1px solid red",
  width: "100%",
  height: "100%",
  fontSize: 12,
  paddingRight: 0,
  paddingTop: 2,
  paddingBottom: 2,
});

export const SelectionContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "flex-end",
  // paddingRight: 20,
  // border: "1px solid red",
  height: "100%",
  fontSize: 12,
  margin: 0,
});

export const NameContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 30,
  fontSize: 12,
});

export const NewNameContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // border: "1px solid black",
  // alignItems: "center",
  height: 38,
  fontSize: 12,
  // display: "flex",
  // justifyContent: "space-between",
  width: "100%",
});

export const StatusTextContainer = styled.span({
  fontWeight: 800,
  color: "green",
});

export const ItemNameTextContainer = styled.span({
  flex: 7,
  // fontWeight: 800,
  color: "black",
});

export const PriceTextContainer = styled.span({
  display: "flex",
  justifyContent: "flex-end",
  textAlign: "right",
  flex: 5,
  maxWidth: 80,
  // border: "1px solid red",
  fontSize: 10,
  fontWeight: 800,
  color: "black",
});

export const DescContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 50,
  fontSize: 10,
});

export const PriceContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 20,
  fontSize: 14,
});

export const CatalogImageContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  // alignContent: "center",
  width: 50,
  height: 50,
  marginRight: 10,
  // border: "1px solid red",
});

export const CatalogImage = styled.img({
  borderRadius: 8,
  alignSelf: "center",
  width: "100%",
  height: "100%",
  resizeMode: "cover",
  // border: "1px solid black",
  margin: 0,
  boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.08)",
});

export const FormContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  // border: "1px solid #FAFAFA",
  // border: "1px solid black",
  width: "100%",
  flex: 1,
  height: "100%",
  // height: "100%",
  paddingLeft: 10,
});

export const OutOfStockContainer = styled.div({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  // paddingLeft: 20,
  // border: "1px solid red",
  fontWeight: 800,
  color: "red",
  width: "100%",
  height: 10,
  fontSize: 10,
});
