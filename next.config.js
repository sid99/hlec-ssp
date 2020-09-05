const withImages = require("next-images");
// const withCSS = require("@zeit/next-css")
// const withSass = require("@zeit/next-sass")
const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");
const withOffline = require("next-offline");

require("dotenv").config()

const cssConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    })
    return config
  }
};

const nextConfiguration = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    TEST_VAR: process.env.TEST_VAR,
  },
  devIndicators: {
    autoPrerender: false,
  },
  pageExtensions: ["jsx", "js"],
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
	urlPattern: /^https?.*/,
	handler: "networkFirst",
	options: {
	  cacheName: "https-calls",
	  networkTimeoutSeconds: 15,
	  expiration: {
	    maxEntries: 150,
	    maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
	  },
	  cacheableResponse: {
	    statuses: [0, 200]
	  }
	}
      }
    ]
  }
};


// module.exports = withPlugins([withCSS(cssConfig)], nextConfiguration);
module.exports = withPlugins([
  [
    withOptimizedImages,
    {
      mozjpeg: {
	quality: 90,
      },
      webp: {
	preset: "default",
	quality: 90,
      },
    },
  ],
  withFonts(withCSS(cssConfig)),
  withImages], withOffline(nextConfiguration));
