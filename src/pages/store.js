import React from "react";

import Navigation from "../BottomNavigation";
import Page from "../components/Stores/StorePage";

const PageWrap = () => (
    <div>
      <Page />
      <Navigation value="yourstore" />
    </div>
  );

export default PageWrap;
