import React from 'react';
import Intro from './Intro';
import Footer from './Footer';
import CallToAction from './CallToAction';
import TopBar from './TopBar';
import Stats from './Stats';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';

import styles from './styles';

const Landing = () => (
  <div className="lpRoot" style={{ backgroundColor: 'white' }}>
    <div className='landing'>
      <div style={styles.landingHeader}></div>
      <Intro />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  </div>
);

export default Landing;
