import React, { useEffect } from "react";
import { scrollTo } from "../utils";
import MTTopBar from "./sections/MTTopBar";
import Intro4 from "./sections/Intro4";
import FeatureTracking from "./sections/Feature-Tracking";
import ProductAnalytics from "./sections/ProductAnalytics";
import Feature5 from "./sections/Features5";
import Pricing2 from "./sections/Pricing2";
import Testimonial4 from "./sections/Testimonial4";
import CallToAction3 from "./sections/CallToAction3";
import Footer2 from "./sections/Footer2";

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
