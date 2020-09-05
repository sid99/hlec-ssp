import styled from 'styled-components';
import {SectionHeading,Commonh4,Commonpara} from '../Common/common.style';
import {device} from '../Common/device'

export const ProductOverviewSection = styled.section`
    padding:0px 0px;
    padding-bottom: 100px;
    background:#f9fafc;
    position:relative;

    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const ProductOverviewCustomContainer = styled.div`
`;

export const ProductOverviewSectionHeading = styled(SectionHeading)`
    margin-bottom:20px;
    
    @media ${device.tablet} {
        margin-bottom:0px;
    }
`;
export const ProductOverviewCol = styled.div`
    text-align:center;
    padding:60px 20px 0px;
`;

export const ProductOverviewIcon = styled.img`
    height:75px;
    margin-bottom:24px;
`;

export const ProductOverviewHeading = styled(Commonh4)`
    color:#3a3a3a;
    font-size:22px;
    text-transform:uppercase;
    font-weight:500;
`;
export const ProductOverviewDesc = styled(Commonpara)`
    color:#7a7f83;
    margin-bottom:5px;
    font-size:15px;
`;
