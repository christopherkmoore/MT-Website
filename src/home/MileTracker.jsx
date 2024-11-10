import React, { useEffect } from "react";
import { scrollTo } from "../utils";
import CallToAction3 from "./sections/CallToAction3";
import FeatureTracking from "./sections/Feature-Tracking";
import Feature5 from "./sections/Features5";
import Footer2 from "./sections/Footer2";
import Intro4 from "./sections/Intro4";
import MTTopBar from "./sections/MTTopBar";
import ProductAnalytics from "./sections/ProductAnalytics";

const MileTracker = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <MTTopBar />
      <Intro4 />
      <FeatureTracking />
      <ProductAnalytics />
      <Feature5 />
      <CallToAction3 />
      <Footer2 />
    </div>
  );
};

export default MileTracker;
