import React, { useEffect } from "react";
import { scrollTo } from "../utils";
import CallToActionOTP from "./sections/CallToActionOTP";
import FeaturesOTP from "./sections/FeaturesOTP";
import Footer2 from "./sections/Footer2";

import IntroOTP from "./sections/IntroOTP";
import MTTopBar from "./sections/MTTopBar";
import PrivacyAnalytics from "./sections/PrivacyAnalytics";

const PrivacyOTP = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <MTTopBar />
      <IntroOTP />
      <PrivacyAnalytics />
      <FeaturesOTP />
      <CallToActionOTP />
      <Footer2 />
    </div>
  );
};

export default PrivacyOTP;