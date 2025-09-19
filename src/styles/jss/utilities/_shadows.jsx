import { GlobalStyles } from "@mui/material";
import React from "react";

const generateShadows = (theme) => {
  let classList = {};
  theme.shadows.forEach((shadow, ind) => {
    classList[`.elevation-z${ind}`] = {
      boxShadow: `${shadow} !important`,
    };
  });
  return classList;
};

export const shadowStyles = (
  <GlobalStyles
    styles={({ palette, ...theme }) => ({
        ...generateShadows(theme),
    })}
  />
);
