import styled from "styled-components";

// Main containers
export const BusinessInfoContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 5,
  alignItems: "center",
  // border: '1px solid blue',
  width: "100%",
});

export const CatalogContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 2,
  alignItems: "center",
  // border: '1px solid blue',
  width: "100%",
});
/* ***********************************************/
// Store Banner
export const BannerContainer = styled.div({
  width: "100%",
  height: 250,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Banner = styled.img({
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  width: "100%",
  height: "100%",
});

// Business info components
export const BusinessInfoInnerContainer = styled.div({
  width: "100%",
  height: "100%",
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 20,
  paddingRight: 20,
  // border: '1px solid black',
  // backgroundColor: 'red',
});

export const InfoContainer = styled.div(({height}) => ({
  width: "100%",
  height,
  // border: '1px solid red',
  display: "flex",
  flexDirection: "row",
}));

export const InfoLeftContainer = styled.div({
  flex: 1,
  fontSize: 12,
});

export const InfoRightContainer = styled.div({
  flex: 9,
  fontSize: 14,
});
