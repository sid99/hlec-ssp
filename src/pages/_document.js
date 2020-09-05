import React from "react";
import Document, {
  Html, Head, Main, NextScript,
} from "next/document";
import {ServerStyleSheet} from "styled-components";
import {ServerStyleSheets} from "@material-ui/core/styles";

import theme from "../theme";

const fontUrl = "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons&display=swap";

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href={fontUrl}
          />
	  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
	  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

AppDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const styledComponentsSheet = new ServerStyleSheet();
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => styledComponentsSheet.collectStyles(
      sheets.collect(<App {...props} />),
    ),
  });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
      styledComponentsSheet.getStyleElement(),
    ],
  };
};

export default AppDocument;
/*
*/
