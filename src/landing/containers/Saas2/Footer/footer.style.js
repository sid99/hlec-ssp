import styled from 'styled-components';
import {Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'
// import {SocialFacebook} from 'styled-icons/typicons/SocialFacebook'
// import {SocialTwitter} from 'styled-icons/typicons/SocialTwitter'
// import {SocialLinkedin} from 'styled-icons/typicons/SocialLinkedin'
// import {SocialInstagram} from 'styled-icons/typicons/SocialInstagram'

export const FooterSection = styled.footer`
    width:100%;
    background:#f9fafc;
    padding:60px 0px;
    position:relative;
    
    @media ${device.tablet} {
        padding:0px 10px;
    }
`;

export const FooterCol = styled.div`
    padding:20px 0px;

    ul{
        margin-left:0px;
    }
    a{
        text-decoration:none;
        color:#7a7f83;
        :hover{
            text-decoration:underline;
        }
    }
`;

export const FooterLogo = styled.img`
    max-width: 170px;

    @media ${device.laptop} {
        max-width: 140px;
    }

    @media ${device.tablet} {
        max-width: 170px;
    }
`;

export const FooterTitle = styled(Commonh4)`
    color:#272727;
    font-size:26px;
    margin-bottom:25px;

    @media ${device.laptop} {
        font-size:24px;
    }
`;

export const FooterPara = styled(Commonpara)`
    font-size:14px;
    margin-bottom:5px;
`;

export const FooterLi = styled.li`
    list-style:none;
    margin-bottom:6px;
`;

export const FooterSocial = styled.a`
    margin-right:5px;
`;

export const FooterAddWrapper = styled.div`
    display:flex;
    align-items:top;
`;

export const FooterAddLeft = styled.div`
    width:15%;
`;

export const FooterAddImg = styled.img`
    margin-bottom: 0px;
    width:35px;
`;

export const FooterAddRight = styled.div`
    width:85%;
`;

export const FooterAddText = styled(Commonpara)`
    font-size:14px;
    margin-left:10px;
`;

export const BottomFooterWrapper = styled.section`
    width:100%;
    padding:20px 0px;
    background:#fdfdfe;
    .row{
        align-items: center;
    }

    @media ${device.tablet} {
        padding-left:10px;
        padding-right:10px;
    }
`;
export const BottomFooterPara = styled.p`
    margin-bottom:0px;
    padding:10px 0px;   
    font-size:15px;

    @media ${device.tablet} {
        text-align:center;
        margin-bottom:20px;
    }
`;

export const BottomFooterRight = styled.div`
    text-align:right;
    @media ${device.tablet} {
        text-align:center;
    }
`;

/*
export const InstaIcon = styled(SocialInstagram)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 0px 8px;
    background: #ec008c;
    transition:all .5s;
    :hover{
        background: none;
        color: #ec008c;
        border:2px solid #ec008c;
    }
`;

export const LinkedinIcon = styled(SocialLinkedin)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 0px 8px;
    background: #2e318f;
    transition:all .5s;
    :hover{
        background: none;
        color: #2e318f;
        border:2px solid #2e318f;
    }
`;

export const TwitterIcon = styled(SocialTwitter)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 0px 8px;
    background: #00aeee;
    transition:all .5s;
    :hover{
        background: none;
        color: #00aeee;
        border:2px solid #00aeee;
    }
`;

export const FbIcon = styled(SocialFacebook)`
    width: 32px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 0px 8px;
    background: #3949aa;
    transition:all .5s;
    :hover{
        background: none;
        color: #3949aa;
        border:2px solid #3949aa;
    }
`;
*/
