import React from "react";
import { SvgIcon } from "@mui/material";

const MediumIcon = props => {
  return (
    <SvgIcon {...props}>
              {/* <svg viewBox="-2 -2 24 24" preserveAspectRatio="xMinYMin"> */}

      <svg xmlns="http://www.w3.org/2000/svg"
        class="svg-fill-primary"
        x="0"
        y="0"
        width="25"
        height="25"
        viewBox="-2 -2 24 24"
        preserveAspectRatio="xMidYMid meet"
        fill="white"
      >
        <path d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z'/>
        <path d='M6.186 7.632a.392.392 0 0 0-.126-.33L5.126 6.17V6h2.9l2.24 4.952L12.236 6H15v.17l-.798.77a.236.236 0 0 0-.089.226v5.668a.236.236 0 0 0 .089.225l.78.772V14H11.06v-.17l.807-.79c.08-.08.08-.103.08-.225V8.234L9.7 13.981h-.303L6.783 8.234v3.852a.534.534 0 0 0 .145.442l1.05 1.284v.17H5v-.17l1.05-1.284a.515.515 0 0 0 .136-.442V7.632z'/>
      </svg>
    </SvgIcon>
  );
};

export default MediumIcon;
