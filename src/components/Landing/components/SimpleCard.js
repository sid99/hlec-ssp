import React from 'react';
import styled from 'styled-components';

export const OuterContainerMobile = styled.div({
  width: 335,
  // borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 15,
  paddingRight: 15,
  // boxShadow: '0 0 10px #cccccc',
  flexDirection: 'column',
  // marginBottom: 30,
  // border: '2px solid red',
});

export const IconContainerMobile = styled.div({
  // alignItem: 'left',
  display: 'flex',
  // width: '100%',
  justifyContent: 'center',
  // paddingBottom: 30,
  // border: '2px solid red',
});

export const Header = styled.div({
  // border: '2px solid red',
  fontSize: 16,
  fontWeight: 600,
  // alignItem: 'left',
  fontFamily: 'Nunito',
  width: '100%',
  height: 50,
});

export const StyledLi = styled.li({
  fontSize: 12,
  // alignItem: 'left',
  fontFamily: 'Nunito',
  width: '100%',
});

export const TitleContainerMobile = styled.div({
  fontSize: 16,
  // alignItem: 'left',
  display: 'flex',
  fontFamily: 'Nunito',
  width: '100%',
  justifyContent: 'center',
  paddingBottom: 10,
  paddingTop: 0,
});

export const BodyContainerMobile2 = styled.div(({ testimonials }) => ({
  border: '2px solid white',
  paddingTop: 10,
  fontSize: 18,
  fontFamily: 'Nunito',
  fontStyle: 'Italic',
  // minHeight: 132,
  paddingBottom: 13,
  display: 'flex',
  alignItem: 'center',
  verticalAlign: 'middle',
  textAlign: 'center',
}));

export const BodyContainerMobile1 = styled.div(({ testimonials }) => ({
  border: '2px solid white',
  // paddingTop: 10,
  fontSize: 18,
  fontFamily: 'Nunito',
  fontStyle: 'normal',
  // minHeight: 132,
  // paddingBottom: 13,
  // display: 'flex',
  // alignItem: 'center',
  // verticalAlign: 'middle',
  textAlign: 'left',
  // border: '2px solid red',
}));

const MainCard = ({
  iconName,
  title,
  body,
  body1,
  body2,
  body3,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  testimonials,
}) => {
  return (
    <OuterContainerMobile
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
    >
      <BodyContainerMobile1>
	<Header>{title} </Header>
	<ul style={{border: "0px solid black", padding: 0}}>
	  <StyledLi>{body1}</StyledLi>
	  <StyledLi>{body2}</StyledLi>
	  <StyledLi>{body3}</StyledLi>
	</ul>
      </BodyContainerMobile1>
    </OuterContainerMobile>
  );
};

/*
      <TitleContainerMobile>
	<span>{title}</span>
	</TitleContainerMobile>
	*/
export default MainCard;
