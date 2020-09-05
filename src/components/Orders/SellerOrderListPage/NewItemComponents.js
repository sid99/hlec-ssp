import styled from "styled-components";

export const ItemContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  // border: "1px solid red",
  width: "100%",
  height: 40,
});

export const LeftContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 6,
  // border: "1px solid red",
  width: "100%",
  height: "100%",
  fontSize: 12,
});

export const RightContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 4,
  alignItems: "right",
  alignContent: "flex-end",
  justifyContent: "flex-end",
  width: "100%",
  height: "100%",
  fontSize: 12,
  // border: "1px solid red",
});

export const TopContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "center",
  // border: "1px solid black",
  width: "100%",
  height: "100%",
});

export const BottomContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "center",
  // border: "1px solid black",
  width: "100%",
  height: "100%",
});

export const LeftDetailsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  alignContent: "center",
  textAlign: "center",
  height: 16,
  fontSize: 12,
  // border: "1px solid black",
});

export const RightDetailsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  alignContent: "center",
  textAlign: "center",
  height: 16,
  fontSize: 12,
  // border: "1px solid black",
});

export const OrderStatusContainer = styled.div({
  fontWeight: 800,
  color: "green",
});

export const PaymentStatusContainer = styled.div({
  fontWeight: 800,
  color: "#5300eb",
  fontStyle: "italic",
});

export const CancelStatusContainer = styled.div({
  fontWeight: 800,
  color: "red",
  fontStyle: "bold",
});

// Details
export const DetailsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  // border: "1px solid red",
  width: "100%",
});

export const BuyerAddressContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  // border: "1px solid red",
  width: "100%",
  fontSize: 12,
});

export const OrderItemsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  // border: "1px solid red",
  width: "100%",
  fontSize: 12,
});

export const OrderItemsHeader = styled.div({
  display: "flex",
  flexDirection: "column",
  // border: "1px solid red",
  width: "100%",
  fontSize: 12,
  fontWeight: 800,
});


export const OrderItemContainer = styled.div({
  flexDirection: "column",
  // border: "1px solid red",
  width: "100%",
  fontSize: 12,
  // fontWeight: 800,
});
