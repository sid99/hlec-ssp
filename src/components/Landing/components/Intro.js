import React from 'react';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';

import { Copies } from './config';
import styles from './styles';
import { routes } from '../../../config';

const Intro = () => {
  const router = useRouter();
  const {
    titleOne,
    titleTwo,
    callToActionOne,
  } = Copies.INTRO;

  // TODO: got to add analytics events
  const hanldeGetStarted = () => {
    router.push(routes.SIGN_IN);
  };

  const routeToSignIn = () => {
    router.push(routes.SIGN_IN);
  };

  const routeToHome = () => {
    // router.push(routes.SKIN_ASSESSMENT_PAGE);
    router.push(routes.HOME_PAGE);
  };

  // <img src="./logo48H.png" alt="" />
  return (
      <section
	className="section section-intro1 section-intro2 introContainer"
	id="intro2"
      >
	<div className="intro2-brand" onClick={routeToHome}>
	  <a href="">
	</a>
	</div>
	    <div onClick={hanldeGetStarted} style={styles.getStarted}>
	      <div style={styles.getStartedTextContainer}>
		Sign In
	      </div>
	    </div>
	<div className="container">
	  <div className="text-center">
	    <div style={{ height: 30 }} />
	    <div className="titleOne">
	      {titleOne}
	    </div>
	    <div style={{ height: 20 }} />
	    <h1 className="titleTwo">
	      {titleTwo}
	    </h1>
	    <div style={{ height: 40 }} />
	    <div>
	      <Button
		variant="contained"
		size="large"
		aria-label="Buy"
		onClick={routeToSignIn}
		style={styles.callToActionOne}
	      >
		{callToActionOne}
	      </Button>
	    </div>
	  </div>
	</div>
	<div style={{height: 50}} />
      </section>
  );
};

export default Intro;
