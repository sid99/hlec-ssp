import React,{Component} from "react";
import {
  Row,Col,
  ModalBody,
} from "react-bootstrap";

import { Tab, Tabs, TabPanel } from "react-tabs";
import {ModalSection,ModalForm,ModalDialog,CustomTabList,LoginWrapper,FacebookWrapper,TwitterWrapper,
  FormGroup,LoginName,LoginPassword,LoginSubmit,ForgotPasswordLink,SignupLink,OrLogin,TextRight,SignupWrapper,
  RegisterSocialUl,RegisterSocialLi,RegisterSocialLink} from "./logindialog.style"

class LoginDialog extends Component {
  render(){
    return(
      <div>
	<ModalDialog show={this.props.modalFlag} onHide={() => this.props.handleClose()}>
	  <ModalSection>
	    <ModalForm>

	      {/* <ModalHeader ></ModalHeader> */}

	      <ModalBody>
		<Tabs>
		  <CustomTabList>
		    <Tab>Login</Tab>
		  </CustomTabList>

		  <TabPanel>
		    <LoginWrapper>
		      <FormGroup>
			<LoginName type="text" placeholder="User Name"/>
		      </FormGroup>
		      <FormGroup>
			<LoginPassword type="password" placeholder="Password"/>
		      </FormGroup>
		      <FormGroup>
			<LoginSubmit onclick={() => alert("Username and password are wrong")}>Login</LoginSubmit>
		      </FormGroup>
		    </LoginWrapper>
		  </TabPanel>
		  <TabPanel>
		    <SignupWrapper>
		      <FormGroup>
			<LoginName type="text" placeholder="Your Name"/>
		      </FormGroup>
		      <FormGroup>
			<LoginName type="email" placeholder="Email ID"/>
		      </FormGroup>
		      <FormGroup>
			<LoginPassword type="password" placeholder="Password"/>
		      </FormGroup>
		      <FormGroup>
			<LoginPassword type="password" placeholder="Confirm Password"/>
		      </FormGroup>
		      <FormGroup>
			<LoginSubmit>Register</LoginSubmit>
		      </FormGroup>
		    </SignupWrapper>
		  </TabPanel>
		</Tabs>
	      </ModalBody>
	    </ModalForm>
	  </ModalSection>
	</ModalDialog>
      </div>
    );
  }
}

export default LoginDialog;
