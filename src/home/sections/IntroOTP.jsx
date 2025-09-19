import { Button, Grid, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";
import AppleIcon from "../common/icons/AppleIcon";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '6rem 0',
    background: 'rgba(15, 23, 42, 0.6)',
  },
  themeText: {
    color: theme.palette.text.primary,
  },
  privacyImage: {
    width: "100%",
    maxWidth: "362px",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
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
      margin: "0 -2000px -50px 180px",
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
  downloadButton: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    border: 'none',
    borderRadius: '8px',
    color: '#ffffff',
    fontWeight: '600',
    padding: "12px 30px",
    margin: "8px",
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    "&:hover": {
      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
      transform: "translateY(-1px)",
    },
  },
}));

const IntroOTP = () => {
  const classes = useStyles();

  return (
    <section className={classes.section} id="intro4">
      <div className="container">
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item md={6} sm={12} xs={12}>
            <div>
              <h1 className="font-normal text-44 mt-0">
                <span className={classes.themeText}>Privacy OTP</span>
              </h1>
              <p className="max-w-400 mb-8">
                Protect your privacy with secure, temporary phone numbers.
                Get one-time verification codes without exposing your real number
                to advertisers and data collectors.
              </p>

              <div className="mt-25" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Button
                  className="px-6 mb-4 rounded py-3"
                  variant="contained"
                  style={{
                    width: '180px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: '#ffffff',
                    border: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                    }
                  }}
                >
                  <a href="https://privacyotp.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Check us out!
                  </a>
                </Button>

                <Button
                  className="px-6 mb-4 rounded py-3"
                  variant="contained"
                  style={{
                    width: '180px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: '#ffffff',
                    border: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                    }
                  }}
                >
                  <AppleIcon fontSize="small" className="mr-3" />
                  <span style={{ color: 'inherit', textDecoration: 'none' }}>
                    App Store
                  </span>
                </Button>

                <Button
                  className="px-6 mb-4 rounded py-3"
                  variant="contained"
                  style={{
                    width: '180px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: '#ffffff',
                    border: 'none',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                    }
                  }}
                >
                  <Icon fontSize="small" className="mr-3">
                    android
                  </Icon>
                  <span style={{ color: 'inherit', textDecoration: 'none' }}>
                    Play Store
                  </span>
                </Button>
              </div>

            </div>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <div className="text-center">
              <div className={classes.privacyImageWrapper}>
                <img
                  className={classes.privacyImage}
                  src="/assets/privacy-otp/gallery_screenshot1.png"
                  alt="Privacy OTP Mobile App"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default IntroOTP;