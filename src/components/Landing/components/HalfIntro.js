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

  const routeToHome = () => {
    // router.push(routes.SKIN_ASSESSMENT_PAGE);
    router.push(routes.HOME_PAGE);
  };

  // <img src="./Logo48H.png" alt="" />
  return (
    <section
      className="section section-intro1 section-intro2"
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
    </section>
  );
};

export default Intro;
