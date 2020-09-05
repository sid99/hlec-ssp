import React, {useEffect} from "react";

import Banner from "../landing/containers/Saas2/Banner";
import HeaderMenu from "../landing/containers/Saas2/HeaderMenu";
import ProductOverview from "../landing/containers/Saas2/ProductOverview";
// import OurProduct from "../landing/containers/Saas2/OurProduct";
// import Performance from "../landing/containers/Saas2/Performance";
// import Pricing from "../landing/containers/Saas2/Pricing";
import Footer from "../landing/containers/Saas2/Footer";
// import Testimonials from "../landing/containers/Saas2/Testimonials";
// import GlobalStyle from "../landing/containers/Saas2/Common/global-styles";
import SEO from "../landing/components/seo";
import Fonts from "../landing/containers/Saas2/Common/fonts";

import firebase from "../core/hooks/useFirebase";

const IndexPage = () => {
  useEffect(() => {
    firebase.analytics().logEvent("landed_lp");
  }, []);

  return (
    <div>
      <Fonts/>
      <HeaderMenu/>
      <main>
	<SEO 
	  title="Becho"
	  description="Sharable Personalized Storefront"
	/>
	<Banner/>
	<ProductOverview/>
      </main>
      <Footer/>
    </div>
  );
};

export default IndexPage;
