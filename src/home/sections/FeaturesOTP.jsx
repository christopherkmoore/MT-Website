import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '6rem 0',
    background: 'rgba(15, 23, 42, 0.6)',
  },
  contentContainer: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    color: '#e2e8f0',
    fontWeight: '700',
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.75rem',
    },
  },
  description: {
    color: '#94a3b8',
    fontSize: '1.125rem',
    lineHeight: '1.7',
    marginBottom: '2rem',
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1.5rem',
    padding: '1.5rem',
    background: 'rgba(30, 41, 59, 0.7)',
    borderRadius: '12px',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateX(8px)',
      borderColor: 'rgba(59, 130, 246, 0.4)',
      background: 'rgba(30, 41, 59, 0.8)',
    },
  },
  featureIcon: {
    fontSize: '2rem',
    marginRight: '1rem',
    marginTop: '0.25rem',
    minWidth: '2.5rem',
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    color: '#e2e8f0',
    fontWeight: '600',
    fontSize: '1.125rem',
    marginBottom: '0.5rem',
  },
  featureText: {
    color: '#94a3b8',
    lineHeight: '1.6',
  },
  imageContainer: {
    textAlign: 'center',
  },
  privacyImageWrapper: {
    position: "relative",
    display: "inline-block",
    "&::before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: "75%",
      left: 0,
      right: 0,
      margin: "0 -1800px -40px 150px",
      bottom: 0,
      borderRadius: "250px",
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
  featuresImage: {
    width: '100%',
    maxWidth: '362px',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  highlight: {
    color: '#60a5fa',
    fontWeight: '600',
  },
}));

const FeaturesOTP = () => {
  const classes = useStyles();


  return (
    <section className={classes.section}>
      <div className="container">
        <Grid container spacing={6} alignItems="center">
          <Grid item md={6} sm={12} xs={12}>
            <div className={classes.contentContainer}>
              <h2 className={classes.title}>
                Dead simple to use
              </h2>

              <p className={classes.description}>
                Get up to 50 numbers, with SMS enabled for receiving messages. Makes copying OTP codes organized and easy.
              </p>
            </div>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <div className={classes.imageContainer}>
              <div className={classes.privacyImageWrapper}>
                <img
                  className={classes.featuresImage}
                  src="/assets/privacy-otp/gallery_screenshot3.png"
                  alt="Privacy OTP Advanced Features"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default FeaturesOTP;