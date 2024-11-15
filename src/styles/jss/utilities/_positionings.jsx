import React from "react";
import { GlobalStyles } from "@mui/material";

export const positioningStyles = (
  <GlobalStyles
    styles={({ palette, ...theme }) => ({
        ".hidden": { display: "none" },
        ".block": { display: "block !important" },
        ".inline-block": { display: "inline-block !important" },
        ".flex": { display: "flex" },
        ".flex-column": { display: "flex", flexDirection: "column" },
        ".flex-wrap": { flexWrap: "wrap" },
        ".justify-start": { justifyContent: "flex-start !important" },
        ".justify-center": { justifyContent: "center" },
        ".justify-end": { justifyContent: "flex-end" },
        ".justify-between": { justifyContent: "space-between !important" },
        ".justify-around": { justifyContent: "space-around" },
        ".items-center": { alignItems: "center" },
        ".items-start": { alignItems: "flex-start" },
        ".items-end": { alignItems: "flex-end" },
        ".items-stretch": { alignItems: "stretch" },
        ".flex-grow": { flexGrow: "1" },
        ".overflow-auto": { overflow: "auto !important" },
        ".overflow-hidden": { overflow: "hidden !important" },
        ".overflow-unset": { overflow: "unset !important" },
        ".overflow-visible": { overflow: "visible !important" },
        ".scroll-y": { overflowX: "hidden", overflowY: "scroll" },
        ".relative": { position: "relative" },
        ".position-bottom": { position: "absolute", bottom: "0" },
        ".text-center": { textAlign: "center" },
        ".align-middle": { verticalAlign: "middle" },
        ".text-right": { textAlign: "right" },
        ".text-left": { textAlign: "left" },
        ".x-center": { left: "50%", transform: "translateX(-50%)" },
        ".y-center": { top: "50%", transform: "translateY(-50%)" },
    })}
  />
);
