import styled from 'styled-components';
import {Commonpara,SectionHeading} from '../Common/common.style';
import {device} from '../Common/device';
import BackgroundImg from '../../../assets/saas2-images/skills-bg.jpg'

export const PerformanceSection = styled.section`
    padding:100px 0px;
    background-image: url(${BackgroundImg});
    background-repeat:no-repeat;
    background-size:cover;
    position:relative;

    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const PerformanceHeadingWrapper = styled.div`
    max-width:600px;
    margin:auto;
    text-align:center;
    margin-bottom:60px;

    @media ${device.tablet} {
        margin-bottom:40px;
    }
`;

export const PerformanceSectionHeading = styled(SectionHeading)`
    color:#fff;
`;

export const PerformanceHolder = styled.div`
    text-align:center;
`;

export const PerformanceCount = styled.div`
    border: 1px solid #fff;
    border-radius: 100%;
    max-width: 160px;
    margin: 20px auto;
    span{
        background: rgb(255,255,255,.2);
        border-radius: 100%;
        display: block;
        color: #fff;
        font-weight: bold;
        line-height: 115px;
        font-size: 32px;
        margin: 20px;
    }
`;

export const PerformanceDetails = styled(Commonpara)`
    color:#fff;
    margin-bottom:0px;
`;
