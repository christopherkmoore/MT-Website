import React from "react";
import Footer2 from "./sections/Footer2";

import BlogGallery from "./home/sections/blog/BlogGallery";
import CallToAction1 from "./sections/CallToAction1";
import MTTopBar from "./sections/MTTopBar";

const BlogLanding = () => {
  return (
    <div className="landing">
      <MTTopBar />
      <BlogGallery />
      <CallToAction1 />
      <Footer2 />
    </div>
  );
};

export default BlogLanding;
