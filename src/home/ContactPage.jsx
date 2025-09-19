import React from "react";
import Contact from "./sections/Contact";
import Footer2 from "./sections/Footer2";
import MTTopBar from "./sections/MTTopBar";

const ContactPage = () => {
  return (
    <div className="landing">
      <MTTopBar />
      <Contact />
      <Footer2 />
    </div>
  );
};

export default ContactPage;