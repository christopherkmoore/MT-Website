import React from 'react';
import { useParams } from 'react-router-dom';
import { Toolbar } from "@mui/material";
import Footer2 from "./sections/Footer2";

import BlogPost from "./sections/blog/BlogPost";
import blogPosts from './sections/blog/blogPosts.jsx';
import MTTopBar from "./sections/MTTopBar";

const BlogPostPage = () => {
  let { slug } = useParams();
  const foundBlogPost = blogPosts.posts.find(post => post.urlSlug === slug);

  return (
    <div className="landing">
      <MTTopBar />
      <Toolbar />
      <BlogPost post={foundBlogPost} />
      <Footer2 />
    </div>
  );
};

export default BlogPostPage;
