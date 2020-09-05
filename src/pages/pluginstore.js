import React from "react";

import Navigation from "../BottomNavigation";
import AppBar from "../components/Base/AppBarWithOnlyHeader";

const IndexPage = () => {
  return (
    <div>
      <AppBar headerTitle="Plugin Store" />
      <h1> Work in Progress </h1>
      <Navigation value="pluginstore" />
    </div>
  );
};

export default IndexPage;
