import React from 'react';
import {OurProductSection,ProductsHeadingWrapper,ProductsRightHeading,
  ProductsHeading,ProductsInner,ProductsLeft,ProductsRight,ProductsLeftHeading,
  ProductsLeftPara,ProductsRightImgFirst,ProductsLeftImgFirst,ProductsLeftImgSecond,
  ProductsRightImgSecond,ProductsBtn,ProductsRowReverse,ProductsRow
} from './OurProduct.style';
import {Container, Row, Col} from "react-bootstrap";
import { Product } from '../../../pagedata/Saas2';
const ProductPage  = () => {
  return (
    <OurProductSection id="ProductContainer">
      <Container>
	<Row>
	  <Col md="12">
	    <ProductsHeadingWrapper>
	      <ProductsHeading>{Product.ProductHeading}</ProductsHeading>
	    </ProductsHeadingWrapper>
	  </Col>
	</Row>

	<ProductsInner>

	  <ProductsRowReverse paddingbottom={"80px"}>
	    <Col md="7">
	      <ProductsRight>
		<ProductsRightImgFirst src={require("../../../assets/"+Product.ProductRow1.ProductRightImgFirst)} alt=""/>
		<ProductsRightImgSecond src={require("../../../assets/"+Product.ProductRow1.ProductRightImgSecond)} alt=""/>
	      </ProductsRight>
	    </Col>

	    <Col md="5">
	      <ProductsLeft>
		<ProductsLeftHeading>
		  {Product.ProductRow1.ProductHeading}
		</ProductsLeftHeading>
		<ProductsLeftPara>
		  {Product.ProductRow1.ProductDescription}
		</ProductsLeftPara>
		<ProductsBtn href="#">
		  {Product.ProductRow1.ProductBtn}
		</ProductsBtn>
	      </ProductsLeft>
	    </Col>
	  </ProductsRowReverse>

	  <ProductsRow>
	    <Col md="7">
	      <ProductsRight style={{textAlign:"left"}}>
		<ProductsLeftImgFirst src={require("../../../assets/"+Product.Row.ProductLeftImgFirst)} alt=""/>
		<ProductsLeftImgSecond src={require("../../../assets/"+Product.Row.ProductLeftImgSecond)} alt=""/>
	      </ProductsRight>
	    </Col>
	    <Col md="5">
	      <ProductsLeft>
		<ProductsRightHeading>
		  {Product.Row.ProductHeading}
		</ProductsRightHeading>
		<ProductsLeftPara>
		  {Product.Row.ProductDescription}
		</ProductsLeftPara>
		<ProductsBtn href="#">
		  {Product.Row.ProductBtn}
		</ProductsBtn>
	      </ProductsLeft>
	    </Col>
	  </ProductsRow>

	  <ProductsRowReverse paddingbottom={"0px"}>
	    <Col md="7">
	      <ProductsRight>
		<ProductsRightImgFirst src={require("../../../assets/"+Product.ProductRow2.ProductRightImgFirst)} alt=""/>
		<ProductsRightImgSecond src={require("../../../assets/"+Product.ProductRow2.ProductRightImgSecond)} alt=""/>
	      </ProductsRight>
	    </Col>
	    <Col md="5">
	      <ProductsLeft>
		<ProductsLeftHeading>
		  {Product.ProductRow2.ProductHeading}
		</ProductsLeftHeading>
		<ProductsLeftPara>
		  {Product.ProductRow2.ProductDescription}
		</ProductsLeftPara>
		<ProductsBtn href="#">
		  {Product.ProductRow2.ProductBtn}
		</ProductsBtn>
	      </ProductsLeft>
	    </Col>
	  </ProductsRowReverse>                
	</ProductsInner>
      </Container>
    </OurProductSection>
  );
}
export default ProductPage;
