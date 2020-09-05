import React from 'react';

const foo = `This Privacy Policy ("Policy") shows how Villuva Inc, accessible from https://villuvainc.com ("Company" or "villivainc.com" or "we" or "our" or "us") ingests and processes information from a customer's ("you" or "your" or "User") actions on our website, mobile application or interactions through email, social media, blogs or other electronic communication (collectively, the "affiliated services").
Through usage of the above affiliated services, you consent to our Privacy Policy detailed below and agree to its Terms and Conditions.
Information collected includes what you may input into our website or mobile application, including personal information such as first and last name, age, email address, and other details asked in the skin analysis. We also log non-personally identifiable information like your Internet Service Provider (ISP), internet protocol (IP) addresses, website activity including date and time details. These are gathered to analyse trends and improve the recommendations provided. We also include links to third-party retailer websites, and if you click on them, we will receive the personal information you enter as described above. However, our privacy policy does not apply to third party retailers, so please do go through the privacy policy of the third party retailer before making purchases. We will also, if you provide permission, collect your precise location data and other data from your mobile device like fitness data, weather, and other data that will assist us in giving you better product recommendations.
We also use "cookies" to understand your website activity and store information that helps us understand your preferences and thus assist us to customize our content better
We use third-party services like Google Analytics to analyse information described above to help better understand you. These services may use cookies to access your data. Please read how they work and their privacy policy at www.google.com/policies/privacy/partners/
The information we collect as described above is used to better our recommendations for you and to help improve our algorithms and operations through the data trends we analyse from the above information. We may use your email address to contact you about your product recommendations, collect feedback on the product recommendations, answer any questions you may have about them, give you new inputs, and keep you updated about our affiliated services that might impact you.
We will also use the information collected to send you updated information on our new offers and services. However, you can opt out of this if required. We will store your personal information on our servers using industry standard safeguards. However we cannot guarantee a definitive promise of complete security of your personal information stored on our servers.
We will not explicitly provide your personal information to any third party provider for any marketing purpose. However, we may use aggregated non-personally identifiable information and provide it to our third-party advertising partners to help us better target other services and use the same in our blogs or advertisements.
If you provide any information on third party links you click on our website, our information policy does not apply to them, therefore, please read their privacy policy before providing any information
Our affiliated services are not intended to be used by children under the age of 13, and we do not promote our affiliated services to children under the age of 18. We do not intend to collect any personally identifiable information from children under the age of 13, so if you are a parent/guardian, please monitor your child's online activity and, as we are not responsible for any personal identifiable information if your child has provided the same on our affiliated services, we will not be able to remove them, should you request us to do so.
  Our information is generally stored and processed in the United States, but we also store and process data in other countries if needed. By using our affiliated services from any country globally, you consent to transfer of your information globally despite your country having more stringent data protection regulations.
`;

const baz = foo.split(/\n/).map((item, index) => (<p key={index}>{item}</p>))

const Landing = () => (
  <div className="privacy-para">
    <h1>PRIVACY POLICY</h1>
    <div style={{height: 10}} />
    {baz}
  </div>
);

export default Landing;
