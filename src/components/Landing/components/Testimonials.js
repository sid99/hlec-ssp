import React from "react";

import TestimonialsGrid from './TestimonialsGrid';
import { Copies } from './config';
import styles from './styles';

const Testimonials = () => {
  const { titleOne } = Copies.TESTIMONIALS;

  return (
    <>
      <section className="section section-intro1 section-intro2 testimonialsContainer" id="intro2"
	style={styles.testimonialsOuterContainer}>
	<div className="container"
	  style={styles.testimonialsInnerContainer}>
	  <div className="text-center">
	    <div className="section-intro1__subtitle mb-24 text-secondary callToActionTitleOne">
	      {titleOne}
	    </div>
	  </div>
	  <TestimonialsGrid />
	</div>
      </section>
    </>
  );
};

export default Testimonials;
