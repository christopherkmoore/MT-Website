import React from "react";
import Footer2 from "./sections/Footer2";

import CallToAction1 from "./sections/CallToAction1";
import Gallery1 from "./sections/Gallery1";
import Intro8 from "./sections/Intro8";
import MTTopBar from "./sections/MTTopBar";
import Services1 from "./sections/Services1";

const Home = () => {
  return (
    <div className="landing">
      {/* Palm tree decorative elements */}
      <div className="palm-tree palm-tree-left">🌴</div>
      <div className="palm-tree palm-tree-right">🌴</div>

      <MTTopBar />
      <Intro8 />
      {/* <Intro9 />     if I had a better image maybe this would be nice. */}
      {/* <Portfolio1 /> will be better when i have more than 1 project.*/ }
      {/* <About1 /> */}
      <Gallery1 />
      {/* <WorkProcess1 /> */}
      <Services1 />
      {/* <Services6 /> */}
      <CallToAction1 />
      <Footer2 />
    </div>
  );
};

export default Home;
