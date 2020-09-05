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
  paddingTop: 10,
  fontSize: 18,
  fontFamily: 'Nunito',
  fontStyle: 'normal',
  // minHeight: 132,
  paddingBottom: 13,
  display: 'flex',
  alignItem: 'center',
  verticalAlign: 'middle',
  textAlign: 'center',
}));

const MainCard = ({
  iconName,
  title,
  body,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  testimonials,
}) => {
  const imageName = `${iconName}.png`;
  let foo;
  let quote;
  let name;
  if (testimonials) {
    foo = body.split(' - ');
    quote = foo[0];
    name = foo[1];
  }
  return (
    <OuterContainerMobile
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
    >
      {
	(testimonials)
	  ? (
	    <BodyContainerMobile2 testimonials>
	      <span>
		{quote}
		{' '}
		-
		  {' '}
		  <b>{name}</b>
		</span>
	      </BodyContainerMobile2>
	  )
	  : (
	    <BodyContainerMobile1 testimonials>
	      <h3> Foo </h3>
	      <ul>
	      <li>{body}</li>
	      <li>{body}</li>
	    </ul>
	    </BodyContainerMobile1>
	  )
      }
      {
	(iconName)
	  ? (
	    <IconContainerMobile>
	      <img width="335" height="180" src={imageName} alt="" />
	    </IconContainerMobile>
	  ) : null
      }
    </OuterContainerMobile>
  );
};

/*
      <TitleContainerMobile>
	<span>{title}</span>
	</TitleContainerMobile>
	*/
export default MainCard;
