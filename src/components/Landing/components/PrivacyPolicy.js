import React from 'react';
import TopBar from './TopBar';
import HalfIntro from './HalfIntro';
import PrivacyPara from './PrivacyPara';
import Footer from './Footer';

import styles from './styles';

const Privacy = () => (
  <div className="lpRoot" style={{ backgroundColor: 'white' }}>
    <div className='landing privacy'>
      <div style={styles.landingHeader}></div>
      <HalfIntro />
      <PrivacyPara />
      <Footer />
    </div>
  </div>
);

export default Privacy;
