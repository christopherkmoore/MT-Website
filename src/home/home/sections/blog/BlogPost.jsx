
import React, { useEffect, useState } from "react";
import { MarkdownRenderer } from "./Markdown";

const getResource = async (filepath) => {
  const res = await fetch(`${filepath}`);

  // check for errors
  if (!res.ok) {
    throw res;
  }

  return res.text();
};


const BlogPost = ({ post }) => {

  const [text, setText] = useState(""); // init with an empty string

  useEffect(() => {
    getResource(`${post.fileUrl}`).then(setText).catch(console.error);
  }, [post.fileUrl]);

  return (
    <section className="section section-bg-light-primary" id="blogPost">
      <div className="container">
        <div className="mb-16 mx-auto">
          <br />
          <h1 className="font-normal text-44 mt-0">{post.title}</h1>
          <h6>{post.readTime} read - {post.date}</h6>
          {/*  keywords for tags */}
          <p className="max-w-400 mb-16"> </p>
          <div className="text-center">
            <img src={post.imageHeadline} alt="empty"></img>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <MarkdownRenderer>{text}</MarkdownRenderer>
        </div>
      </div>
    </section>

  )
}
export default BlogPost