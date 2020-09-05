import React from 'react';
import TopBar from './TopBar';
import HalfIntro from './HalfIntro';
import DisclaimerPara from './DisclaimerPara';
import Footer from './Footer';

import styles from './styles';

const Privacy = () => (
  <div className="lpRoot" style={{ backgroundColor: 'white' }}>
    <div className='landing privacy'>
      <div style={styles.landingHeader}></div>
      <HalfIntro />
      <DisclaimerPara />
      <Footer />
    </div>
  </div>
);

export default Privacy;
