import React from 'react';

import { Copies } from './config';
import HowItWorksGrid from './HowItWorksGrid';

const HowItWorks = () => {
  const { titleOne } = Copies.HOW_IT_WORKS;


  // style={styles.howItWorksContainer}
  return (

    <>
      <section
	className="section section-intro1 section-intro2 howItWorksContainer"
	id="intro2"
      >
	<div
	  className="container"
	  style={{ backgroundColor: '#ffffff', paddingTop:50 }}
	>
	  <div className="text-center">
	    <div className="section-intro1__subtitle mb-24 text-secondary callToActionTitleOne">
	      {titleOne}
	    </div>
	  </div>
	  <HowItWorksGrid />
	  <div className="howItWorksPadding" />
	</div>
      </section>
    </>
  );
};

export default HowItWorks;
