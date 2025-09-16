import {
  Grid
} from "@mui/material";
import React from "react";
import BlogCard from "./BlogCard";

import posts from "./posts.json";


const BlogGallery = () => {
  return (
    <section className="section section-bg-light-primary" id="blog">
      <div className="container">
        <div className="mb-16 mx-auto">
          <br />
          <h1 className="font-normal text-44 mt-0">What's New</h1>
          <p className="max-w-400 mb-16">
            Check back as I capture thoughts about lessons learned and other findings.
          </p>
        </div>
        <Grid container spacing={2}>
          {posts.map((post, ind) => (
            <Grid key={ind} item md={3} sm={2} xs={12}>
              <BlogCard post={post}>

              </BlogCard>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default BlogGallery;