import styled from 'styled-components';
import {Commonpara,Commonh3,Commonbtn,Commonh4} from '../Common/common.style'
import {device} from '../Common/device'
// import {Play} from 'styled-icons/boxicons-regular/Play'

export const BannerSection = styled.section`
    padding:100px 0px;
    min-height:100vh;
    display:flex;
    align-items:center;

    @media ${device.tablet} {
        background-size:cover;
        padding:80px 10px;
    }
`;

export const BannerContents = styled.div`
    padding-top:20px;
    display:flex;
    align-items:center;

    @media ${device.tablet} {
        display:block;
        padding-top:30px;
    }
`;

export const BannerContentLeft = styled.div`
    width:60%;
    padding-right:100px;

    @media ${device.laptop} {
        width:60%;
        padding-right:10px;
    }

    @media ${device.tablet} {
        width:100%;
        text-align:center;
        padding-right:0px;
    }
`;

export const BannerH3 = styled(Commonh3)`
    line-height: 42px;
    margin-bottom:15px;
    color:#272727;
    font-weight:500;

    @media ${device.laptop} {
        font-size: 32px;
        line-height: 36px;
    }
`;

export const BannerH4 = styled(Commonh4)`
    font-size:30px;
    margin-bottom:30px;
    font-weight:500;
    color:#272727;

    @media ${device.laptop} {
        font-size: 26px;
        line-height:26px;
    }
`;

export const BannerPara = styled(Commonpara)`
    color:#7a7f83;
    margin-bottom:40px;
    opacity:0.8;
`;

export const BannerBtnsWrapper = styled.div`
    
`;
/*
    height: 60px;
    width: 150px;
    text-align: center;
    ling-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
*/

export const BannerBtn = styled(Commonbtn)`
    text-decoration:none;

    @media ${device.tablet} {
        margin-bottom:30px;
        margin-right:10px;
    }
    @media ${device.mobileS} {
        margin-bottom:30px;
        margin-right:5px;
    }
`;

export const BannerVideoBtn = styled.a`
    margin-left:25px;
    text-decoration:none;
    color: #05b169;
    border: 1px solid #05b169;
    display:inline-block !important;
    border-radius: 50px;
    padding: 0px 20px 0px 20px;
    transition:all .5s;

    :hover{
        background:#05b169;
        color:#fff;
        transition:all .5s;
        text-decoration:none;
    }

    @media ${device.tablet} {
        margin-left:10px;
    }
    @media ${device.mobileS} {
        margin-left:0px;
    }
`;
/*
export const PlayIconCustom = styled(Play)`
    position: relative;
    vertical-align: middle;
    color: #05b169 !important;
    width: 33px;
    height: 39px;
    transition:all .5s;

    ${BannerVideoBtn}:hover &{
        color:#fff !important;
        transform: scale(1.1);
        transition:all .5s;
    }
`;
    minWidth: 300,
    minHeight: 300,
*/

export const BannerContentRight = styled.div`
    width:40%;
    border: 1px hidden white;

    @media ${device.tablet} {
        width:100%;
        text-align:center;
        padding-top:45px;
    }
`;

export const BannerImg = styled.img`
    minWidth: 300,
    minHeight: 300,
`;
