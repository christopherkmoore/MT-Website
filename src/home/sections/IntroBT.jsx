import { Button, Grid, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '6rem 0',
    background: 'rgba(15, 23, 42, 0.6)',
  },
  themeText: {
    color: theme.palette.text.primary,
  },
  borderImage: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "12px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  borderImageWrapper: {
    position: "relative",
    display: "inline-block",
    "&::before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: "80%",
      left: 0,
      right: 0,
      margin: "0 -2000px -50px 180px",
      bottom: 0,
      borderRadius: "300px",
      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
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
      "&::before": {
        margin: "0 -2000px -50px 50px",
      },
    },
  },
  appStoreButton: {
    padding: "12px 24px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    color: "#ffffff",
    textTransform: "none",
    fontWeight: "600",
    fontSize: "16px",
    "&:hover": {
      background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    },
  },
  webButton: {
    padding: "16px 32px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    color: "#ffffff",
    textTransform: "none",
    fontWeight: "600",
    fontSize: "16px",
    marginLeft: "16px",
    "&:hover": {
      background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 32px rgba(16, 185, 129, 0.3)",
    },
  },
}));

export default function IntroBT() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className="container">
        <Grid container spacing={6} alignItems="center">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className="hero-content">
              <h1 className={classes.themeText}>
                Real-time US-Mexico Border Crossing Wait Times
              </h1>
              <p className={classes.themeText} style={{marginTop: '1.5rem', marginBottom: '1.5rem'}}>
                Get live updates on border crossing wait times for all major US-Mexico
                crossings. Make informed decisions about when to cross with data updated
                every 15 minutes from official CBP sources.
              </p>

              <div className="my-4">
                <Button
                  variant="contained"
                  className={classes.webButton}
                  href="https://border-times.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="mr-2">web</Icon>
                  Visit Border Times
                </Button>
              </div>

              <div className="feature-list mt-4">
                <div className="feature-item mb-2">
                  <Icon className="text-green mr-2">schedule</Icon>
                  <span className={classes.themeText}>Live wait times updated every 15 minutes</span>
                </div>
                <div className="feature-item mb-2">
                  <Icon className="text-green mr-2">location_on</Icon>
                  <span className={classes.themeText}>All major US-Mexico border crossings</span>
                </div>
                <div className="feature-item mb-2">
                  <Icon className="text-green mr-2">devices</Icon>
                  <span className={classes.themeText}>Mobile-optimized responsive design</span>
                </div>
                <div className="feature-item">
                  <Icon className="text-green mr-2">speed</Icon>
                  <span className={classes.themeText}>Sub-second page load times</span>
                </div>
              </div>
            </div>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className="text-center">
              <div className={classes.borderImageWrapper}>
                <img
                  src="/assets/images/border-times1.png"
                  alt="Border Times Website Screenshot"
                  className={classes.borderImage}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}