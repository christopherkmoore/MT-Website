
import React, { useEffect, useState } from "react";
import { MarkdownRenderer } from "./Markdown";
import { makeStyles } from '@mui/styles';
import { Container } from "@mui/material";


const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "clip",
    overflowY: "clip"
  },
}));

const getResource = async (filepath) => {
  const res = await fetch(`${filepath}`);

  // check for errors
  if (!res.ok) {
    throw res;
  }

  return res.text();
};


const BlogPost = ({ post }) => {
  const classes = useStyles();

  const [text, setText] = useState(""); // init with an empty string

  useEffect(() => {
    getResource(`${post.fileUrl}`).then(setText).catch(console.error);
  }, [post.fileUrl]);

  return (
    <section className="section section-bg-light-primary" id="blogPost">
      <div className="container">
        <div className="max-w-800 mx-auto">
          <br />
          <h1 className="font-normal text-44 mt-0">{post.title}</h1>
          <h6>{post.readTime} read - {post.date}</h6>
          {/*  keywords for tags */}
          <div className="text-center">
            <div className={classes.introWrapper}>
              <img src={post.imageHeadline} alt="empty"></img>
            </div>

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