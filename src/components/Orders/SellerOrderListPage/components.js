import styled from "styled-components";

export const CommunitiesPageContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  // border: "1px solid red",
});

export const CommunitiesContainer = styled.div({
  width: "100%",
  // border: "1px solid red",
  display: "flex",
  flexDirection: "row",
  // alignItems: "center",
  // flexWrap: "nowrap",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  alignItems: "center",
});

export const SelectAllContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  // border: "1px solid red",
  width: "100%",
  // height: 90,
  fontSize: 16,
  // boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.05)",
  paddingLeft: 16,
  // paddingRight: 20,
});

export const ItemContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  // border: "1px solid red",
  width: "100%",
  height: 50,
  margin: 0,
  fontSize: 32,
  // boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.05)",
  // paddingLeft: 20,
  // paddingRight: 20,
});

export const StatsContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  // border: "1px solid black",
  width: "100%",
  // paddingLeft: "2.5%",
  // paddingRight: "2.5%",
  height: 40,
  // fontSize: 32,
  // boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.05)",
  // paddingLeft: 20,
  // paddingRight: 20,
});

export const LeftContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 4,
  // border: "1px solid red",
  width: "100%",
  height: "100%",
  fontSize: 12,
});

export const RightContainer = styled.div({
  display: "flex",
  flex: 6,
  flexDirection: "column",
  alignItems: "right",
  alignContent: "flex-end",
  justifyContent: "flex-end",
  // border: "1px solid red",
  width: "100%",
  height: "100%",
  fontSize: 12,
});

export const CancelStatusContainer = styled.div({
  display: "flex",
  flex: 4,
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "left",
  alignText: "left",
  color: "red",
  fontWeight: 800,
  // border: "1px solid red",
  width: "100%",
  height: "100%",
  fontSize: 12,
});

export const PriceContainer = styled.div({
  // border: '1px solid black',
  display: "flex",
  alignItems: "center",
  height: 20,
  fontSize: 12,
  fontWeight: 800,
});

export const PriceContainerRight = styled.div({
  // border: '1px solid black',
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  height: 20,
  fontSize: 12,
  fontWeight: 800,
});

export const OrderNumberContainer = styled.div({
  // border: '1px solid black',
  display: "flex",
  alignItems: "center",
  height: 20,
  fontSize: 12,
});

export const OrderNumberContainerRight = styled.div({
  // border: '1px solid black',
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  height: 20,
  fontSize: 12,
});

export const OrderNumber = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 20,
  fontSize: 12,
});

export const StatusTextContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 20,
  fontSize: 16,
  color: "green",
});

export const BuyerDetails = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 16,
  fontSize: 12,
});

export const OrderStatus = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 20,
  fontSize: 12,
});

export const OrderTypeContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 20,
  fontSize: 12,
});

export const OrderStatusContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 20,
  fontSize: 12,
});

export const OrderItemsContainer = styled.div({
  // border: "1px solid black",
  alignItems: "center",
  // height: 80,
  fontSize: 12,
});

export const OrderItemsHeader = styled.div({
  // border: "1px solid black",
  alignItems: "center",
  height: 20,
  fontSize: 10,
  fontWeight: 800,
});


export const OrderItemContainer = styled.div({
  // border: "1px solid black",
  alignItems: "center",
  height: 12,
  fontSize: 8,
});

export const DetailsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  // border: "1px solid black",
  width: "100%",
  // boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.05)",
  // paddingLeft: 20,
  // paddingRight: 20,
});

// styles
export const statsPaperStyles = {
  width: "100%",
  height: "100%",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  fontWeight: 600,
  paddingLeft: 20,
};

export const ButtonsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // border: "1px solid black",
  width: "100%",
  height: 80,
});

export const ButtonsTopContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  // border: "1px solid black",
  width: "80%",
  height: 40,
});

export const ButtonsBottomContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  // border: "1px solid black",
  width: "80%",
  height: 40,
});
