import React from "react";

import Navigation from "../BottomNavigation";
import AppBar from "../components/Base/AppBarWithOnlyHeader";

const IndexPage = () => {
  return (
    <div>
      <AppBar headerTitle="Your Plugins" />
      <h1> Your Plugins </h1>
      <Navigation value="yourplugins" />
    </div>
  );
};

export default IndexPage;
