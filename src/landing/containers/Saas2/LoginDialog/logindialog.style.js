import styled from "styled-components"
import Modal from "react-bootstrap/Modal";
import { TabList } from 'react-tabs';
// import {SocialFacebook} from 'styled-icons/typicons/SocialFacebook'
// import {SocialTwitter} from 'styled-icons/typicons/SocialTwitter'
import {device} from '../Common/device'
import {CommonSubmitbtn} from '../Common/common.style'
// import {Close} from 'styled-icons/material/Close'

export const ModalDialog = styled(Modal)`
    z-index: 9999;

    .modal-dialog{
	max-width: 540px;
	margin: 50px auto;
	overflow: hidden;
	border-radius: 10px;

	@media ${device.laptop} {
	    import DatePicker from 'react-datepicker';
	    margin: 20px auto;
	}

	@media ${device.mobileXL} {
	    margin: 20px;
	}
    }

    .modal-body{
	padding: 40px 60px 30px 60px;
	position:relative;

	@media ${device.laptop} {
	    padding: 30px 30px 20px 30px;
	}
    }
`;

export const ModalSection = styled.section`

`;

export const ModalForm = styled.div`

`;

export const CustomTabList = styled(TabList)`
    margin:0px;
    .react-tabs__tab--selected {
	background: transparent;
	border-color: transparent;
	color: #05b169;
	border-radius: 0;
	border: none;
	border-bottom: 2px solid #05b169 !important;
    }
    .react-tabs__tab{
	border: none;
	border-bottom: 2px solid #ebebeb;
	width: 50%;
	text-align: center;
	font-size: 22px;
    }
    .react-tabs__tab:focus {
	box-shadow:none;
	border-color: #05b169;
	outline: none;
	border-bottom: 2px solid #05b169 !important;
    }
    .react-tabs__tab{
	position:inherit !important;
    }

    @media ${device.tablet} {
	.react-tabs__tab{
	    font-size: 20px;
	}
    }

    @media ${device.tablet} {
	.react-tabs__tab{
	    font-size: 18px;
	}
    }
`;

export const LoginWrapper = styled.div`
    padding-top:25px;
`;

export const FormGroup = styled.div`
    margin-bottom:25px;
`;

export const LoginName = styled.input`
    width:100%;
    background:#fff;
    border:none;
    outline:0;
    font-size:15px;
    padding: 13px 20px;
    border-radius: 25px;
    box-shadow: 0px 0px 10px 1px #ddd;
    ::placeholder{
	font-size:15px;
    }
`;
export const LoginPassword = styled.input`
    width:100%;
    background:#fff;
    border:none;
    outline:0;
    font-size:15px;
    border-radius:4px;
    padding: 13px 20px;
    border-radius: 25px;
    box-shadow: 0px 0px 10px 1px #ddd;
    ::placeholder{
	font-size:15px;
    }
`;

export const ForgotPasswordLink = styled.a`
    color:#565759;
    text-decoration:none;
    :hover{
	color: #05b169;
    }
`;

export const TextRight = styled.div`
    text-align:right;
    @media ${device.tablet} {
	text-align:left;    
    }
`;

export const SignupLink = styled.a`
    color:#565759;
    text-decoration:none;
    :hover{
	color: #05b169;
    }
`;

export const LoginSubmit = styled(CommonSubmitbtn)`
    width:100%;
    background: #05b169;
    border: none;
    padding: 11px;
    border-radius: 25px;
    outline:0;
    text-transform:uppercase;
    color:#fff;
    cursor:pointer;
`;

export const OrLogin = styled.p`
    text-align: center;
    color: #565759;
    font-size: 16px;
`;

export const RegisterSocialUl = styled.ul`
    display:flex;
    margin:0px;
`;

export const RegisterSocialLi = styled.li`
    flex: 1;
    list-style:none;
    margin: 0px 8px;
    text-align:center;
`;

export const RegisterSocialLink = styled.a`
    text-decoration:none;
`;

export const SignupWrapper = styled.div`
    padding-top:25px;
`;

export const FacebookWrapper = styled.div`
    border:2px solid #3949ab;
    color:#3949ab;
    border-radius:25px;

    :hover{
	background:#3949ab;
	color:#fff;
    }

    :hover svg{
	color:#fff;
    }

    @media ${device.mobileM} {
	font-size:12px;
    }
`;
export const TwitterWrapper = styled.div`
    border:2px solid #00adef;
    color:#00adef;
    border-radius:25px;

    :hover{
	background:#00adef;
	color:#fff;
    }

    :hover svg{
	color:#fff;
    }

    @media ${device.mobileM} {
	font-size:12px;
    }

`;

/*
export const TwitterIcon = styled(SocialTwitter)`
    height: 40px;
    color: #00adef;
    padding: 6px;
    transition:all .5s;

    :hover{
	border-radius:0;
    }
    @media ${device.mobileM} {
	height: 30px;
	padding: 4px;
    }

`;
export const CloseIcon = styled(Close)`
    height: 20px;
    color: #666;
    position:absolute;
    transition:all .5s;
    top: 15px;
    right: 15px;
    cursor:pointer;
    :hover{
	color:#111;
    }
`;

export const FbIcon = styled(SocialFacebook)`
    height: 40px;
    color: #3949ab;
    padding: 6px;
    transition:all .5s;

    :hover{
	border-radius:0;
    }
    @media ${device.mobileM} {
	height: 30px;
	padding: 4px;
    }
`;
*/
