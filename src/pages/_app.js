import React, {useEffect} from "react";
import Head from "next/head";
// import * as Sentry from '@sentry/browser';
import {ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./index.css";
import "../components/Landing/index.css";
import "../landing/components/layout.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-tabs/style/react-tabs.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Add the custom css files here

// import Firebase, { FirebaseContext } from '../components/Firebase';
import theme from "../theme";
// import { config } from '../config';
import {TITLE} from "../config";

import { ProvideAuth } from "../core/hooks/useFirebase";

/*
const { environment } = config;
Sentry.init({
  dsn: 'https://beccde720a6a4470aea670c9eb928665@sentry.io/5183031',
  environment,
});
*/

const App = ({Component, pageProps}) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
	<link
            href="https://fonts.googleapis.com/css?family=Nunito"
            rel="stylesheet"
            key="google-font-cabin"
          />
        <title>{TITLE}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
	<meta name="facebook-domain-verification" content="nmo3sv6h07nn6s6rddnthgymp05rnq" />
      </Head>
      <ProvideAuth>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ProvideAuth>
    </>
  );
};

export default App;
/*
	 <FirebaseContext.Provider value={Firebase}>
	</FirebaseContext.Provider>
*/
