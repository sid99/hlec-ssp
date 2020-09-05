import React from "react";

import Navigation from "../BottomNavigation";
import AppBar from "../components/Base/AppBarWithOnlyHeader";

const IndexPage = () => {
  return (
    <div>
      <AppBar headerTitle="foo" />
      <h1> One </h1>
      <Navigation value="one" />
    </div>
  );
};

export default IndexPage;
