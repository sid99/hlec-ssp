import React, {Component} from "react";
import Router from "next/router";
import {
  BannerSection,
  BannerContents,
  BannerContentLeft,
  BannerVideoBtn,
  BannerContentRight,
  BannerBtn,
  BannerPara,
  BannerBtnsWrapper,
  BannerH3,
  BannerH4,
  BannerImg,
} from "./banner.style";
import {Container} from "react-bootstrap";
import LoginDialog from "../LoginDialog";
import {Banner} from "../../../pagedata/Saas2";

class BannerPage extends Component {
  constructor(props){
    super(props);
    this.state = {modal: false}
  }

  // handleClose = () => this.setState({ modal: !this.state.modal });
  handleClose = () => {
    Router.push("/signin");
  };

  render(){
    return(
      <BannerSection id="homeContainer">
	<Container>
	  <BannerContents>
	    <BannerContentLeft>
	      <BannerH3>{Banner.BannerH3}</BannerH3>
	      <BannerPara>{Banner.BannerPara}</BannerPara>
	      <BannerBtnsWrapper>
		<BannerBtn onClick={this.handleClose}>{Banner.BannerBtn}</BannerBtn>
	      </BannerBtnsWrapper>
	    </BannerContentLeft>

	    <BannerContentRight>
	      <BannerImg 
		src={require("../../../assets/"+Banner.BannerImage)} 
		alt=""
	      />
	    </BannerContentRight>

	  </BannerContents>

	</Container>
      </BannerSection>
    );
  }
}

// <LoginDialog modalFlag = {this.state.modal} handleClose ={this.handleClose}/>
export default BannerPage;
