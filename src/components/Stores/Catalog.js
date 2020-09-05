import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div({
  display: "flex",
  width: "100%",
  paddingTop: 20,
  paddingLeft: 20,
  paddingRight: 20,
  flexDirection: "column",
});

const TopContainer = styled.div({
  flex: 2,
  alignItems: "center",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingTop: 20,
  // border: '1px solid blue',
});

const BottomContainer = styled.div({
  flex: 8,
  display: "flex",
  alignItems: "center",
  // flexDirection: 'row',
  justifyContent: "space-between",
  alignContent: "center",
  width: "100%",
});

const CatalogImage = styled.img({
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  borderRadius: 8,
  width: 50,
  height: 50,
});

export default function CatalogPreview({storeid}) {
  const href = `/catalog/${storeid}`;

  return (
    <Container>
      <TopContainer>
	<div> Catalog </div>
	<Link href={href} style={{textDecoration: "none"}}>
	  See All  >
	</Link>
      </TopContainer>
      <TopContainer>
	<div> Fruits </div>
      </TopContainer>
      <BottomContainer>
      </BottomContainer>
      <TopContainer>
	<div> Vegetables </div>
      </TopContainer>
      <BottomContainer>
      </BottomContainer>
    </Container>
  );
}
