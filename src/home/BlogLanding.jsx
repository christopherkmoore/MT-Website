import React from "react";
import { Toolbar } from "@mui/material";
import Footer2 from "./sections/Footer2";

import BlogGallery from "./sections/blog/BlogGallery";
import CallToAction1 from "./sections/CallToAction1";
import MTTopBar from "./sections/MTTopBar";

const BlogLanding = () => {
  return (
    <div className="landing">
      <MTTopBar />
      <Toolbar />
      <BlogGallery />
      <CallToAction1 />
      <Footer2 />
    </div>
  );
};

export default BlogLanding;
