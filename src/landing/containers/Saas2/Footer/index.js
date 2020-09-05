import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {FooterSection,FooterCol,FooterTitle,FooterPara,
  FooterLi,FooterSocial,BottomFooterPara,BottomFooterRight,
  FooterAddWrapper,FooterAddLeft,FooterAddRight,FooterAddImg,FooterAddText,
  BottomFooterWrapper,FooterLogo,
} from './footer.style';

import ScrollSpy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Footer } from '../../../pagedata/Saas2';

const FooterPage = () =>{
  return (
    <div>
      <FooterSection>
	<Container>
	  <Row>
	    <Col md="3">
	      <FooterCol>
		<FooterLogo src={require("../../../assets/"+Footer.FooterLogo)} alt=""/>
	      </FooterCol>
	    </Col>
	    <Col md="3">
	      <FooterCol>
		<FooterTitle>{Footer.FooterCol2.FooterTitle}</FooterTitle>
		{
		  Footer.FooterCol2.FooterPara.map((item,idx) => {
		    return <FooterPara key={idx}>
		      {item.Para}
		    </FooterPara>
		  })
		}
	      </FooterCol>
	    </Col>
	    <Col md="3">
	      <FooterCol>
		<FooterTitle>{Footer.FooterCol3.FooterTitle}</FooterTitle>
		<ScrollSpy offset={-59} items={Footer.Items} currentClassName="is-current">
		  {
		    Footer.FooterCol3.FooterUl.map((item,idx) => {
		      return <FooterLi key={idx}>
			<AnchorLink offset={55} href={item.Href}>
			  {item.FooterMenu}
			</AnchorLink>
		      </FooterLi>
		    })
		  }
		</ScrollSpy>
	      </FooterCol>
	    </Col>
	    <Col md="3">
	      <FooterCol>
		<FooterTitle>{Footer.FooterCol4.FooterTitle}</FooterTitle>
		{
		  Footer.FooterCol4.FooterAddWrapper.map((item,idx) => {
		    return <FooterAddWrapper key={idx}>
		      <FooterAddLeft>
			<FooterAddImg src={require("../../../assets/"+item.FooterAddImg)} alt=""/>
		      </FooterAddLeft>
		      <FooterAddRight>
			<FooterAddText>
			  {item.FooterAddText}
			</FooterAddText>
		      </FooterAddRight>
		    </FooterAddWrapper>
		  })
		}
	      </FooterCol>
	    </Col>
	  </Row>
	</Container>
      </FooterSection>
      <BottomFooterWrapper>
	<Container>
	  <Row>
	    <Col md="6">
	      <BottomFooterPara>
		{Footer.BottomFooterPara}
	      </BottomFooterPara>
	    </Col>
	    <Col md="6">
	      <BottomFooterRight>
		<FooterSocial key="fb" href="#" aria-label="Facebook Link">
		</FooterSocial>
		<FooterSocial key="tw" href="#" aria-label="Twitter Link">
		</FooterSocial>
		<FooterSocial key="li" href="#" aria-label="Linkedin Link">
		</FooterSocial>
		<FooterSocial key="in" href="#" aria-label="Instagram Link">
		</FooterSocial>
	      </BottomFooterRight>
	    </Col>
	  </Row>
	</Container>
      </BottomFooterWrapper>
    </div>
  );
}

export default FooterPage;
