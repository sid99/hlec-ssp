import React from "react";
import styled from "styled-components";

// Main containers
export const ItemPreviewContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // border: '1px solid black',
  width: 100,
  height: 200,
  fontSize: 32,
  boxShadow: "4px 4px 8px 4px rgba(0,0,0,0.02)",
  paddingLeft: 10,
  paddingRight: 10,
  marginRight: 10,
  marginBottom: 10,
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
  fontSize: 10,
});

export const NameContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 20,
  fontSize: 10,
  fontWeight: "bold",
  width: 100,
});

export const DescContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 20,
  fontSize: 8,
  width: 100,
});

export const PriceContainer = styled.div({
  // border: '1px solid black',
  alignItems: "center",
  height: 20,
  fontSize: 8,
  width: 100,
});

const CatalogImage = styled.img({
  // borderRadius: 8,
  width: 100,
  height: 100,
});

export default function CatalogItem({item}) {
  return (
    <ItemPreviewContainer>
      <CatalogImage src={item.image} />
      <div style={{height: 10}}/>
      <NameContainer>{item.name}</NameContainer>
      <DescContainer>{item.description}</DescContainer>
      <PriceContainer>Total Revenue-{item.price}</PriceContainer>
    </ItemPreviewContainer>
  );
}
