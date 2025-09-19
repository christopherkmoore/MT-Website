import React from "react";
import { Toolbar } from "@mui/material";
import Contact from "./sections/Contact";
import Footer2 from "./sections/Footer2";
import MTTopBar from "./sections/MTTopBar";

const ContactPage = () => {
  return (
    <div className="landing">
      <MTTopBar />
      <Toolbar />
      <Contact />
      <Footer2 />
    </div>
  );
};

export default ContactPage;