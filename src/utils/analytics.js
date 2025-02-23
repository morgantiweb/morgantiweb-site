import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-PZ3TMKN6BK";

export const initializeAnalytics = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
  ReactGA.send("pageview");
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
