import styled from 'styled-components';
import {Commonpara,Commonbtn,SectionHeading} from '../Common/common.style';
import {Row} from "react-bootstrap";
import {device} from '../Common/device';

export const PricingSection = styled.section`
    padding:100px 0px;
    background: #f9fafc;
    background-size:100%;
    position:relative;
    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const PricingHeadingWrapper = styled.div`
    max-width:600px;
    margin:auto;
    text-align:center;
    margin-bottom:60px;

    @media ${device.tablet} {
        margin-bottom:40px;
    }
`;

export const PricingHeading = styled(SectionHeading)`
    
`;

export const PricingCustomRow = styled.div`
    display:flex;

    @media ${device.tablet} {
        display:block;
    }
`;
 
export const PricingCol = styled.div`
    width:33.33%;

    @media ${device.tablet} {
        width:100%;
    }
`;

export const PricingPlanCol = styled.div`
    background:#fff;
    border-radius: 15px;
    text-align:center;
    padding: 60px 25px;
    box-shadow: 0px 0px 30px 0px #d8d8d8;

    margin:20px 0px;

    border-top-left-radius: ${props => props.index === 2 ? "0px ":"15px"};
    border-bottom-left-radius: ${props => props.index === 2 ? "0px ":"15px"};

    border-top-right-radius: ${props => props.index === 0 ? "0px ":"15px"};
    border-bottom-right-radius: ${props => props.index === 0 ? "0px ":"15px"};

    @media ${device.tablet} {
        border-radius:15px;
        margin:0px 0px;
    }
`;

export const PricingPlanColCenter = styled.div`
    border-radius:15px;
    text-align: center;
    padding: 80px 25px;
    box-shadow: 0px 0px 30px 0px #d8d8d8;
    background: #fff;
    position: relative;
    z-index: 9;

    @media ${device.laptop} {
        padding-top: 40px 15px 40px 15px;
    }

    @media ${device.tablet} {
        transform: none;
        padding-top: 40px 25px;
        margin:20px 0px;
    }
`;

export const PricingPlanHeading = styled(SectionHeading)`
    color:#05b169;
    margin-bottom:30px;
    font-size: 18px;
    font-weight:bold;
    text-transform:uppercase;
`;

export const PricingPlanImg = styled.img`
    width:80px;    
    margin-bottom:25px;
`;

export const PricingPlanPrice = styled.h3`
    font-size: 43px;
    font-family: 'Lato',sans-serif !important;
    span
    {
        font-size: 18px;
        text-transform: uppercase;
        margin-top: 15px;
        display: block;
        font-weight:bold;
        color: #7a7f83;
        text-align: center;
    }
    @media ${device.laptop} {
        font-size: 32px;
        span
        {
            font-size: 16px;
        }
    }
    @media ${device.tablet} {
        font-size: 43px;
        span
        {
            font-size: 18px;
        }
    }
`;

export const PricingPlanLine = styled.hr`
    background: #05b169;
    max-width: 50%;
    margin: 30px auto;
`;

export const PricingPlanDarkText = styled(Commonpara)`
    color:#7a7f83;
    font-weight:500;
    margin-bottom:5px;
    font-size:16px;
    @media ${device.laptop} {
        font-size:14px;
    }
    @media ${device.tablet} {
        font-size:16px;
    }
`;

export const PricingPlanLightText = styled(Commonpara)`
    color:#c3c3c3;
    margin-bottom:5px;
    font-weight:500;
    font-size:16px;
    @media ${device.laptop} {
        font-size:14px;
    }
 
    @media ${device.tablet} {
        font-size:16px;
    }
`;

export const PricingPlanBtn = styled(Commonbtn)`
    margin-top: 30px;

`;

export const PricingPlanBtnCenter = styled(Commonbtn)`
    margin-top: 30px;
`;
