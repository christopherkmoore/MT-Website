import { React, useEffect } from "react";
import {
  Route,
  HashRouter as Router,
  Routes,
  useLocation
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

import BlogLanding from "./home/BlogLanding";
import BlogPostPage from "./home/BlogPostPage";
import ContactPage from "./home/ContactPage";
import Home from "./home/Home";
import ProductsPage from "./home/ProductsPage";
import ScrollToTop from "./components/ScrollToTop";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import advancedAnalytics from "./utils/AdvancedAnalytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6pDSPFNcAyiDfd9PkbeUZ_zzGQ6pkk0M",
  authDomain: "website-16efe.firebaseapp.com",
  projectId: "website-16efe",
  storageBucket: "website-16efe.firebasestorage.app",
  messagingSenderId: "473489024447",
  appId: "1:473489024447:web:9da3c477ebb92e0fd1ed0a",
  measurementId: "G-0GG4RGT89H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Initialize advanced analytics after Firebase is ready
advancedAnalytics.initialize();

function FirebaseAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Track page view using the advanced analytics class
    const cleanupEngagement = advancedAnalytics.trackPageView(location);

    // Return the cleanup function for engagement tracking
    return cleanupEngagement;
  }, [location]);

  useEffect(() => {
    // Initialize scroll tracking using the advanced analytics class
    const cleanupScroll = advancedAnalytics.initializeScrollTracking(location);

    // Return the cleanup function for scroll tracking
    return cleanupScroll;
  }, [location]);

  return null;
}
function App() {
  // Initialize session tracking
  useEffect(() => {
    advancedAnalytics.initializeSession();
  }, []);

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
          <FirebaseAnalytics />
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogLanding to="/blog" />} />
              <Route path="/blog/:slug" element={<BlogPostPage to="/blog/:slug" />} />
              <Route path="/Contact" element={<ContactPage to="/Contact" />} />
              <Route path="/Products" element={<ProductsPage to="/Products" />} />
              <Route path="/Products/:productName" element={<ProductsPage to="/Products/:productName" />} />
              {/* <Route component={Error} /> */}
            </Routes>
          </Router>
        </Scrollbar>
      </GlobalCss>
    </ThemeProvider>
  );
}

export default App;
