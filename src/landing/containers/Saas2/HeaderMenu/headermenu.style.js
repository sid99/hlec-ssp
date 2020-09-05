import styled from 'styled-components';
import {device} from '../Common/device'
// import {Menu} from 'styled-icons/feather/Menu'

export const Headerwrapper = styled.header`
    width:100%;
    position:fixed;
    box-shadow: ${props => props.isSticky?"0px 1px 11px -1px #d6d6d6":"none"};
    height:auto;
    left:0px;
    right:0px;
    z-index:99;
`;

export const NavCustom = styled.nav`
    background: ${props => props.isSticky?"#ffffff":"#ffffff00"};
`;

export const UlCustom = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin:0px;

    .active-main-li{
        display: block;
    }
`;

export const LiCustomLogo = styled.li`
    order: 0;
    padding: ${props => props.isSticky?"5px 0px":"10px 0px"};
    margin:0px;
    flex:1;
    line-height:0px;

    @media ${device.tablet} {
        flex:1;
    }
`;

export const BrandLogo = styled.img`
    margin-bottom:0px;
    max-width:${props => props.isSticky?"125px":"175px"};
    transition:all .5s;
    
    @media ${device.mobileM} {
        max-width:145px;
    }
`;

export const LiCustomItem = styled.li`
    font-size: 16px;
    white-space: nowrap;
    margin:0px;
    display: block;
    width: auto;
    order: 1;

    @media ${device.tablet} {
        background:#fff;
        order: 3;
        width:100%;
        display: none;
    }

    ul{
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin:0px;
        
        .active{
            display: block;
        }

        .is-current a{
            opacity: 1;
            color:${props => props.isSticky?"#05b169":"#05b169"}
        }
    
        @media ${device.tablet} {
            padding-right: 15px;
            padding-left: 15px;
        
            .is-current{
                border-bottom:2px solid #05b169;
            }
            .is-current a{
                color:#05b169;
            }
        }
    }

    li{
        font-size: 16px;
        padding: 15px 20px;
        white-space: nowrap;
        margin:0px;
        display: block;
        width: auto;
        order: 1;

        @media ${device.laptop} {
            padding: 15px 15px;
        }

        @media ${device.tablet} {
            background:#fff;
            width: 100%;
            text-align: left;
            order: 3;
            display: none;
        }
    }

    a{
        color: ${props => props.isSticky?"#111":"#111"};
        text-decoration: none;
        font-size: 16px;
        opacity:0.7;
    
        :hover {
            opacity:1;
        }

        @media ${device.tablet} {
            color:#111;
        }
    }
    
`;
export const LiCustomToggle = styled.li`
    font-size: 16px;
    padding: 15px 10px;
    white-space: nowrap;
    display: none;
    order: 1;
    margin:0px;

    @media ${device.tablet} {
        display: block;
        flex:1;
        text-align:right;
        order:2;
    }
`;

export const AnchorCustom = styled.a`
    color: white;

    :hover {
        opacity:1;
    }
`;
/*
export const MenuIcon = styled(Menu)`
    width:50px;
    color:${props => props.isSticky?"#111":"#111"};

    @media ${device.mobileM} {
        width:30px;
    }
        
`;
*/
