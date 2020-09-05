import styled from 'styled-components';
import {device} from '../Common/device';
import {Commonpara,Commonbtn,SectionHeading} from '../Common/common.style';
import {Row} from "react-bootstrap";

export const OurProductSection = styled.section`
    padding:100px 0px;
    background:#fff;

    @media ${device.tablet} {
	padding:80px 10px;
    }
`;

export const ProductsHeadingWrapper = styled.div`
    text-align:center;
    max-width:600px;
    margin:auto;
`;

export const ProductsHeading = styled(SectionHeading)`
    line-height:30px;
    margin-bottom:20px;

    @media ${device.tablet} {
	margin-bottom:0px;
    }
`;

export const ProductsInner = styled.div`
    padding-top:60px;
`;

export const ProductsRowReverse = styled(Row)`
    flex-direction: row-reverse;
    padding-bottom:${props => props.paddingbottom};
    align-items:center;

    @media ${device.tablet} {
	padding-bottom:80px;
	:last-child{
	    padding-bottom:0px;
	}
    }
`;

export const ProductsRight = styled.div`
    position: relative;
    text-align:right;

    @media ${device.tablet} {
	text-align:left;
    }
`;

export const ProductsRightImgFirst = styled.img`
    width: calc(100% - 100px);
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 26px 5px #d0d0d0;
    position:relative;
    right:30px;
    margin-bottom:30px;

    @media ${device.laptop} {
	width: calc(100% - 50px);
    }

    @media ${device.tablet} {
	width: calc(100% - 30px);
	right:0px;
    }
`;

export const ProductsRightImgSecond = styled.img`
    position: absolute;
    bottom: 0px;
    right: 0px;
    border-radius: 10px;
    box-shadow: 0px 0px 26px 5px #d0d0d0;
    margin-bottom:0px;
    max-width:50%;
`;

export const ProductsLeft = styled.div`
    @media ${device.tablet} {
	text-align:left;
    }
`;

export const ProductsLeftHeading = styled(SectionHeading)`
    text-align:left;

    @media ${device.laptop} {
	font-size:26px;
    }
    @media ${device.tablet} {
	font-size:30px;
	margin-top:80px;
    }
`;


export const ProductsRightHeading = styled(SectionHeading)`
    text-align:left;

    @media ${device.laptop} {
	font-size:26px;
    }
    @media ${device.tablet} {
	font-size:30px;
	margin-top:40px;
    }
`;

export const ProductsLeftPara = styled(Commonpara)`
    text-align:left;
    font-size:14px;
`;

export const ProductsBtn = styled(Commonbtn)`

`;

export const ProductsRow = styled(Row)`
    padding-bottom:80px;
    align-items:center;
`;

export const ProductsLeftImgFirst = styled.img`
    width: calc(100% - 100px);
    border-radius: 10px;
    box-shadow: 0px 0px 26px 5px #d0d0d0;
    position:relative;
    margin-bottom:0px;

    @media ${device.laptop} {
	width: calc(100% - 50px);
    }
    @media ${device.tablet} {
	width: calc(100% - 30px);
    }
    @media ${device.mobileL} {

    }
`;

export const ProductsLeftImgSecond = styled.img`
    position: absolute;
    bottom: 0px;
    right: 70px;
    border-radius: 10px;
    box-shadow: 0px 0px 26px 5px #d0d0d0;
    margin-bottom:0px;
    max-width:60%;

    @media ${device.laptop} {
	right:20px;
    }
    @media ${device.tablet} {
	right:0px;
    }
`;
