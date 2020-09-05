import React from "react";
import { Grid, Icon } from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';

import styles from './styles';
// import { FacebookUrl, InstagramUrl } from '../../../config';

const Footer = () => {
  return (
    <div className="section-footer1 light-dark" id="footer1"
      style={{ marginLeft: -10, marginTop:20, paddingBottom: 40, border: '0px solid black', backgroundColor: 'white' }}>
      <div className="container">
	<Grid container alignItems="center" justify="space-around" spacing={3}>
	  <Grid item>
	    <div style={{ display: 'flex', flexDirection: 'column', width: 325, alignContent: 'flex-start', justifyContent: 'flex-start', height: 70, border: '2px solid white' }}>
		<h4 style={styles.about_header}>Contact</h4>
	      <div style={{ marginLeft: -5, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-even', alignContent: 'space-even', border: '1px solid white', paddingTop: 0 }}>
		<div style={{ border: '1px solid white'  }}>
		  <EmailIcon style={{ width: 25, height: 25, color: 'black', paddingRight: 1 }}/>
		</div>
		<div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', height: 25, border:'1px solid white', paddingBottom: 8, paddingLeft: 5 }}>
		  <p style={styles.email_body}>admin@villuvainc.com</p>
		</div>
	      </div>
	    </div>
	  </Grid>
	  <Grid item>
	    <div style={{ display: 'flex', flexDirection: 'column', width: 325, alignContent: 'flex-start', justifyContent: 'flex-start', height: 70, border: '0px solid black' }}>
	      <div style={{ paddingTop: 10 }}>
	      </div>
	    </div>
	  </Grid>
	</Grid>
	<Grid container alignItems="center" justify="center">
	  <div className="footer1__disclaimer">
	    <p style={styles.company_body}>&copy; Villuva Inc., 2020 |<a href="/privacypolicy"> Privacy Policy </a>|<a href="/disclaimer"> Disclaimer</a> | v0.1</p>
	  </div>
	</Grid>
      </div>
    </div>
  );
}

export default Footer;
