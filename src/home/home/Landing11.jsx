import React from "react";
import Footer2 from "./sections/Footer2";

import TopBar3 from "./sections/TopBar3";
import Intro11 from "./sections/Intro11";
import Clients1 from "./sections/Clients1";
import Features11 from "./sections/Features11";
import Marketing3 from "./sections/Marketing3";
import Testimonial10 from "./sections/Testimonial10";
import Services11 from "./sections/Services11";
import FAQ1 from "./sections/FAQ1";
import Subscription2 from "./sections/Subscription2";

const Home = () => {
  return (
    <div className="landing">
      <TopBar3 />
      <Intro11 />
      <Clients1 />
      <Features11 />
      <Marketing3 />
      <Testimonial10 />
      <Services11 />
      <FAQ1 />
      <Subscription2 />
      <Footer2 />
    </div>
  );
};

export default Home;
