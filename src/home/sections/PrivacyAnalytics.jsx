import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '6rem 0',
    background: 'rgba(15, 23, 42, 0.6)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(59, 130, 246, 0.1)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)" /%3E%3C/svg%3E")',
      opacity: 0.5,
    },
  },
  container: {
    position: 'relative',
    zIndex: 1,
  },
  imageContainer: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  privacyImageWrapper: {
    position: "relative",
    display: "inline-block",
    "&::before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: "80%",
      left: 0,
      right: 0,
      margin: "0 2000px -50px -180px",
      bottom: 0,
      borderRadius: "300px",
      background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      zIndex: -1,
      opacity: 0.3,
    },
    "&::after": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 36,
      width: "80%",
      marginTop: 32,
      left: "10%",
      opacity: 0.75,
      background: "radial-gradient(ellipse at center, rgba(0,0,0,0.65) -25%, rgba(0,0,0,0) 55%)",
    },
    [theme.breakpoints.down("sm")]: {
      "&::after": {
        display: "none",
      },
    },
  },
  analyticsImage: {
    width: '362px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem',
  },
  title: {
    color: '#e2e8f0',
    fontWeight: '700',
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  },
  description: {
    color: '#94a3b8',
    fontSize: '1.125rem',
    lineHeight: '1.7',
    marginBottom: '2rem',
  },
  highlight: {
    color: '#60a5fa',
    fontWeight: '600',
  },
}));

const PrivacyAnalytics = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={`container ${classes.container}`}>
        <Grid container spacing={6} alignItems="center">
          <Grid item md={6} sm={12} xs={12}>
            <div className={classes.imageContainer}>
              <div className={classes.privacyImageWrapper}>
                <img
                  className={classes.analyticsImage}
                  src="/assets/privacy-otp/gallery_screenshot4.png"
                  alt="Privacy OTP Dashboard"
                />
              </div>
            </div>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <div className={classes.contentContainer}>
              <h2 className={classes.title}>
                Your Privacy is <span className={classes.highlight}>Guaranteed</span>
              </h2>

              <p className={classes.description}>
                Declutter your messages, phone and mail apps from random number messages for stuff.
                Let those spaces be for what they were intended for.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default PrivacyAnalytics;