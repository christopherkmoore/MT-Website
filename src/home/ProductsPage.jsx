import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup, Toolbar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useParams, useNavigate, Navigate } from "react-router-dom";

// Mile Tracker components
import Intro4 from "./sections/Intro4";
import FeatureTracking from "./sections/Feature-Tracking";
import ProductAnalytics from "./sections/ProductAnalytics";
import Feature5 from "./sections/Features5";
import CallToAction3 from "./sections/CallToAction3";

// Privacy OTP components
import IntroOTP from "./sections/IntroOTP";
import PrivacyAnalytics from "./sections/PrivacyAnalytics";
import FeaturesOTP from "./sections/FeaturesOTP";
import CallToActionOTP from "./sections/CallToActionOTP";

// Common components
import Footer2 from "./sections/Footer2";
import MTTopBar from "./sections/MTTopBar";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '8rem',
    paddingBottom: '2rem',
    background: 'rgba(15, 23, 42, 0.9)',
  },
  toggleGroup: {
    background: 'rgba(30, 41, 59, 0.7)',
    borderRadius: '12px',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    padding: '4px',
  },
  toggleButton: {
    border: 'none !important',
    borderRadius: '8px !important',
    color: '#94a3b8',
    fontWeight: '600',
    padding: '12px 24px',
    transition: 'all 0.3s ease',
    '&.Mui-selected': {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      color: '#ffffff',
      boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)',
    },
    '&:hover': {
      color: '#e2e8f0',
    },
  },
}));

const ProductsPage = () => {
  const classes = useStyles();
  const { productName } = useParams();
  const navigate = useNavigate();

  // Convert URL parameter to internal product key
  const getProductKey = (urlParam) => {
    if (urlParam === 'MileTracker') return 'mile-tracker';
    if (urlParam === 'PrivacyOTP') return 'privacy-otp';
    return 'mile-tracker'; // default
  };

  // Convert internal product key to URL parameter
  const getUrlParam = (productKey) => {
    if (productKey === 'mile-tracker') return 'MileTracker';
    if (productKey === 'privacy-otp') return 'PrivacyOTP';
    return 'MileTracker'; // default
  };

  const [selectedProduct, setSelectedProduct] = useState(getProductKey(productName));

  // Update state when URL changes
  useEffect(() => {
    if (productName) {
      setSelectedProduct(getProductKey(productName));
    }
  }, [productName]);

  const handleProductChange = (event, newProduct) => {
    if (newProduct !== null) {
      setSelectedProduct(newProduct);
      navigate(`/Products/${getUrlParam(newProduct)}`);
    }
  };

  // Redirect /Products to /Products/MileTracker
  if (!productName) {
    return <Navigate to="/Products/MileTracker" replace />;
  }


  return (
    <div className="landing">
      <MTTopBar />
      <Toolbar />

      <div className={classes.toggleContainer}>
        <ToggleButtonGroup
          value={selectedProduct}
          exclusive
          onChange={handleProductChange}
          className={classes.toggleGroup}
        >
          <ToggleButton value="mile-tracker" className={classes.toggleButton}>
            Mile Tracker+
          </ToggleButton>
          <ToggleButton value="privacy-otp" className={classes.toggleButton}>
            Privacy OTP
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {selectedProduct === 'mile-tracker' ? (
        <>
          <Intro4 />
          <FeatureTracking />
          <ProductAnalytics />
          <Feature5 />
          <CallToAction3 />
        </>
      ) : (
        <>
          <IntroOTP />
          <PrivacyAnalytics />
          <FeaturesOTP />
          <CallToActionOTP />
        </>
      )}

      <Footer2 />
    </div>
  );
};

export default ProductsPage;