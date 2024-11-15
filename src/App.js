import React from "react";
import {
  Route,
  HashRouter as Router,
  Routes
} from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import Scrollbar from "react-perfect-scrollbar";
import { Theme } from "./theme";

import { variableStyles } from './styles/jss/_variables';
import { animationStyles } from './styles/jss/utilities/_animations';
import { borderStyles } from './styles/jss/utilities/_border';
import { colorStyles } from './styles/jss/utilities/_color';
import { commonStyles } from './styles/jss/utilities/_common';
import { landingStyles } from './styles/jss/utilities/_landing';
import { positioningStyles } from './styles/jss/utilities/_positionings';
import { shadowStyles } from './styles/jss/utilities/_shadows';
import { spacingStyles } from './styles/jss/utilities/_spacing';
import { typographyStyles } from './styles/jss/utilities/_typography';

import "react-perfect-scrollbar/dist/css/styles.css";
import GlobalCss from "./styles/jss/GlobalCss";

import Home from "./home/Home";
import BlogLanding from "./home/BlogLanding";
import MileTracker from "./home/MileTracker";
import BlogPostPage from "./home/BlogPostPage";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      {variableStyles()}
      {typographyStyles}
      {animationStyles}
      {borderStyles}
      {commonStyles}
      {colorStyles}
      {landingStyles}
      {positioningStyles}
      {shadowStyles}
      {spacingStyles}
      <GlobalCss>
        <Scrollbar
          className="h-full-screen scrollable-content"
          option={{ suppressScrollX: true }}
        >
          <Router basename="/">
            <Routes>
              <Route path="/" element={<Home to="/Home" />} />
              <Route path="/blog" element={<BlogLanding to="/blog" />} />
              <Route path="/blog/:slug" element={<BlogPostPage to="/blog/:slug" />} />
              {/* <Route path="/MileTracker/privacyPolicy" element={<MileTracker to="/MileTracker" />} />
              <Route path="/contact" element={<Contact to="/Contact" />} /> */}

              <Route path="/MileTracker" element={<MileTracker to="/MileTracker" />} />
              {/* <Route component={Error} /> */}
            </Routes>
          </Router>
        </Scrollbar>
      </GlobalCss>
    </ThemeProvider>
  );
}

export default App;
