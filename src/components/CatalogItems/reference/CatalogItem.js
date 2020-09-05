import React from "react";
import styled from "styled-components";

// Main containers
export const CatalogItemContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  // border: '1px solid black',
  width: "100%",
  height: 100,
  fontSize: 32,
  boxShadow: "4px 4px 8px 4px rgba(0,0,0,0.02)",
  paddingLeft: 20,
  paddingRight: 20,
});

export const DescriptionContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  paddingLeft: 20,
  // border: '1px solid red',
  width: "100%",
  height: 60,
  fontSize: 12,
});

export const NameContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 30,
  fontSize: 20,
});

export const DescContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 30,
  fontSize: 12,
});

export const PriceContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 20,
  fontSize: 14,
});

const CatalogImage = styled.img({
  borderRadius: 8,
  width: 50,
  height: 50,
});

export default function CatalogItem({item}) {
  return (
    <CatalogItemContainer>
      <CatalogImage src={item.image} />
      <DescriptionContainer>
	<NameContainer>{item.name}</NameContainer>
	<DescContainer>{item.description}</DescContainer>
	<PriceContainer>{item.price}</PriceContainer>
      </DescriptionContainer>
    </CatalogItemContainer>
  );
}
