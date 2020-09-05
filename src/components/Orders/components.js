import styled from "styled-components";

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

// Main containers
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

// Main containers
export const HeaderContainerTwo = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // border: '1px solid blue',
  width: "100%",
  height: 40,
  fontSize: 16,
  fontWeight: 800,
});

// Main containers
export const SmallHeaderContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // border: '1px solid blue',
  width: "100%",
  height: 20,
  fontSize: 16,
  fontWeight: 800,
});

export const TotalContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 900,
  // border: '1px solid #f58442',
  boxShadow: "0 8px 8px 0 rgba(0,0,0,0.2)",
  width: "100%",
  height: 40,
  fontSize: 24,
});

export const ActionsContainer = styled.div({
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

export const OrderStatusButtonsContainer = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  alignContent: "flex-end",
  width: "100%",
  justifyContent: "space-between",
  // border: "1px solid black",
});

// order details cart
export const OrderDetailsCartHeaderContainer = styled.div({
  fontSize: 18,
  fontWeight: 600,
  flex: 1,
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  // paddingLeft: 20,
  // paddingRight: 20,
});

export const OrderItemsContainer = styled.div({
  // border: "1px solid black",
  alignItems: "center",
  // height: 80,
  // fontSize: 12,
});

export const OrderItemsHeader = styled.div({
  // border: "1px solid black",
  alignItems: "center",
  height: 20,
  fontSize: 14,
  fontWeight: 800,
});

export const OrderItemContainer = styled.div({
  // border: "1px solid black",
  alignItems: "center",
  height: 16,
  fontSize: 12,
});

export const OrderItemContainerTwo = styled.div({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  height: 20,
  fontSize: 12,
});

// Main containers
export const CheckOutTotalContainer = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  // border: '1px solid blue',
  width: "100%",
  height: 40,
  fontSize: 22,
  fontWeight: 800,
});

export const DisclaimerContainer = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  height: 60,
  width: "100%",
  // border: "1px solid black",
});

export const ActionsContainerTwo = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  position: "fixed",
  left: 0,
  bottom: 0,
  height: 80,
  marginBottom: 40,
  width: "100%",
  paddingLeft: 20,
  paddingRight: 20,
  // border: "1px solid black",
});

export const StatusText = styled.span({
  fontWeight: 800,
  color: "green",
});

export const RegularText = styled.span({
  // fontWeight: 800,
  color: "black",
});

export const BoldText = styled.span({
  fontWeight: 800,
  color: "black",
});
