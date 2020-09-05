import React from "react";
import styled from "styled-components";

import StatusButtons from "./StatusButtons";

// Main containers
export const CatalogItemContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  // border: '1px solid black',
  width: "100%",
  height: 120,
  fontSize: 32,
  boxShadow: "4px 4px 8px 4px rgba(0,0,0,0.02)",
  paddingLeft: 20,
  paddingRight: 20,
});

export const StatusContainer = styled.div({
  display: "flex",
  flex: 4,
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  paddingLeft: 20,
  // border: '1px solid red',
  width: "100%",
  height: 100,
  fontSize: 12,
});

export const DescriptionContainer = styled.div({
  display: "flex",
  flex: 6,
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  paddingLeft: 20,
  // border: '1px solid red',
  width: "100%",
  height: 100,
  fontSize: 12,
});

export const NameContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 30,
  fontSize: 12,
});

export const PriceContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 20,
  fontSize: 10,
});

export default function CatalogItem({item}) {
  return (
    <CatalogItemContainer>
      <DescriptionContainer>
	<NameContainer>Order #{item.id}</NameContainer>
	<PriceContainer>Total - {item.total}</PriceContainer>
      </DescriptionContainer>
      <StatusContainer>
	<StatusButtons />
      </StatusContainer>
    </CatalogItemContainer>
  );
}
