import React, { useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import MainCard from './MainCard';

export const Container = styled.div({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  // marginBottom: 30,
  // border: '1px solid red',
});

const LandingCard = ({ }) => {
  const title = 'Recurring Buys';
  const body = `Invest in cryptocurrency slowly over time by
		scheduling buys daily, weekly or monthly
		`;
  return (
    <Container>
    <MainCard
      title={title}
      body={body}
      paddingBottom="10"
      paddingTop="10"
      paddingLeft="10"
      paddingRight="10"
    />
    </Container>
  );
};

export default LandingCard;
