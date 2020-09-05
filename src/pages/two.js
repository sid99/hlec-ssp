import React from "react";

import Navigation from "../BottomNavigation";
import AppBar from "../components/Base/AppBarWithOnlyHeader";

const IndexPage = () => {
  return (
    <div>
      <AppBar headerTitle="foo" />
      <h1> Two </h1>
      <Navigation value="two" />
    </div>
  );
};

export default IndexPage;
