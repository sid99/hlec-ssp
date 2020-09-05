export const TITLE = "Becho";
export const ENVRONMENT = "test";

export const TIMEZONE = "Asia/Kolkata";
export const RANDOM_TEMP = "temp";

export const routes = {
  HOME: "/",
  ACCOUNT: "/account",
  SIGN_IN: "/signin",
  STORE: "/store",
  CREATE_STORE: "/createstore",
  UPDATE_STORE: "/updatestore",
  CATALOG_ITEMS: "/catalogitems",
  MARKETING: "/marketing",
  MEMBERS: "/members",
  MENUS: "/menus",
  ORDERS: "/orders",
  COMMUNITIES: "/communities",
  CANCELLED_ORDERS: "/orders/cancelled",
  SETTLED_ORDERS: "/orders/settled",
  UNSETTLED_ORDERS: "/orders/unsettled",
  REPORTS: "/reports",
  PAYMENTS: "/payments",
  REDIRECT_AFTER_SIGN_IN: "/store",
  REDIRECT_AFTER_LOGOUT: "/",
};

export const getBuyerOrderTrackingRoute = orderId => (`/orders/${orderId}`);
export const getBuyerOrderTrackingWithPayNowRoute = orderId => (
  `/orders/${orderId}?payNow=1`);
export const getBuyerOrderTrackingWithPayLaterRoute = orderId => (
  `/orders/${orderId}`);

const allConfigs = {
  test: {
    FIREBASE: {
      apiKey: "AIzaSyDPvLlgW_HeLASDP50I_zps8txDXkxNtTA",
      authDomain: "becho-ssp-client-test.firebaseapp.com",
      databaseURL: "https://becho-ssp-client-test.firebaseio.com",
      projectId: "becho-ssp-client-test",
      storageBucket: "becho-ssp-client-test.appspot.com",
      messagingSenderId: "625170771717",
      appId: "1:625170771717:web:f216333932aaad4b90d16c",
      measurementId: "G-M4KKCR834N",
    },
    dynamicLinkBase: "https://ivoryroots.page.link/?link=https://test.bechoapp.com/placeorders/",
    whatsappMessage: "test place orderid",
    buyerCheckoutBaseUrl: "https://test.bechoapp.com/placeorders/",
    razorpayKeyId: "rzp_test_WI02xC82gB4woe",
  },
  production: {
    FIREBASE: {
      apiKey: "AIzaSyCa9B2cFQDl8pyc020m2bTbFFUDalPeKJo",
      authDomain: "becho-ssp-client-stage.firebaseapp.com",
      databaseURL: "https://becho-ssp-client-stage.firebaseio.com",
      projectId: "becho-ssp-client-stage",
      storageBucket: "becho-ssp-client-stage.appspot.com",
      messagingSenderId: "792232538008",
      appId: "1:792232538008:web:67b84befda84a760c385ed",
      measurementId: "G-QL8DY0LWBZ",
    },
    dynamicLinkBase: "https://ivoryroots.page.link/?link=https://bechoapp.com/placeorders/",
    whatsappMessage: "place orderid",
    buyerCheckoutBaseUrl: "https://bechoapp.com/placeorders/",
    razorpayKeyId: "rzp_test_WI02xC82gB4woe",
  },
};

const configKey = process.env.NEXT_PUBLIC_CONFIG_VAR ?
  process.env.NEXT_PUBLIC_CONFIG_VAR : "test";

export const config = allConfigs[configKey];
