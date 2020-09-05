import React from 'react';

const foo = `This disclaimer Policy ("Policy") is intended for Villuva Inc, accessible from https://villivainc.com(website, blog, mobile application, social media, email communication, collectively, the "affiliated services").
The content provided on this website and our affiliated services is for informational and educational purposes only. This content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. The use of information from the affiliated services is at your own risk.
Always seek the advice of your physician or other qualified and licensed health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you read on our affiliated services.
We are not associated or affiliated with any skincare or cosmetic brand. Thus we are not incentivized to promote or recommend any specific product or brand. We use our fact and scientific driven algorithms to provide recommendations.
Since we constantly improve and update our algorithms, we make no promises on the accuracy, and as and when we update our models, the data shown may differ. However, we do not provide any guarantee on the immediate or speedy update to our models with new research findings or new product launches.
`;

const baz = foo.split(/\n/).map((item, index) => (<p key={index}>{item}</p>))

const Landing = () => (
  <div className="privacy-para">
    <h1>Disclaimer</h1>
    <div style={{height: 10}} />
    {baz}
  </div>
);

export default Landing;
