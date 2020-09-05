import React from "react";
import { Grid, Button } from "@material-ui/core";
import { useRouter } from 'next/router';

import { Copies } from './config';
import styles from './styles';
import { routes } from '../../../config';

const CallToAction = () => {
  const router = useRouter();
  const { titleOne, callToActionTwo } = Copies.CALL_TO_ACTION;

  const routeToSignIn = () => {
    router.push(routes.SIGN_IN);
  };

  return (
    <div className="section section-cta1 callToActionContainer" id="cta1">
      <div className="container">
	<Grid
	  container
	  spacing={2}
	  direction="row"
	  alignItems="center"
	  justify="center"
	>
	  <Grid item lg={8} md={8} sm={12} xs={12}>
	    <h2 className="callToActionTitleOne">{titleOne}</h2>
	  </Grid>
	  <Grid item lg={4} md={4} sm={12} xs={12} className="text-center">
	    <Button
	      variant="contained"
	      size="large"
	      aria-label="Buy"
	      style={styles.callToActionOne}
	      onClick={routeToSignIn}
	    >
	      {callToActionTwo}
	    </Button>
	  </Grid>
	</Grid>
      </div>
    </div>
  );
}

export default CallToAction;

/*REFERENCE - DO NOT DELETE
      <div className="section section-cta1" id="cta1"
      style={{ marginTop: 50, background: `url(${bg || './assets/images/home-bg.jpg'}) center center/cover no-repeat`}}>
      */
