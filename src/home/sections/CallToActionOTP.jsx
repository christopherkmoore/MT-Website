import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '6rem 0',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 41, 59, 0.8) 100%)',
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
  ctaCard: {
    background: 'rgba(30, 41, 59, 0.9)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(148, 163, 184, 0.3)',
    borderRadius: '16px',
    padding: '4rem',
    textAlign: 'center',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 35px 70px rgba(59, 130, 246, 0.3)',
    },
    [theme.breakpoints.down('md')]: {
      padding: '3rem 2rem',
    },
  },
  title: {
    color: '#e2e8f0',
    fontWeight: '700',
    fontSize: '3rem',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: '1.25rem',
    lineHeight: '1.6',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '2rem',
  },
  primaryButton: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    border: 'none',
    borderRadius: '12px',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: '1.125rem',
    padding: '16px 32px',
    boxShadow: '0 8px 16px rgba(59, 130, 246, 0.4)',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      boxShadow: '0 12px 24px rgba(59, 130, 246, 0.6)',
      transform: 'translateY(-2px)',
    },
  },
  secondaryButton: {
    background: 'transparent',
    border: '2px solid #3b82f6',
    borderRadius: '12px',
    color: '#3b82f6',
    fontWeight: '600',
    fontSize: '1.125rem',
    padding: '14px 30px',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(59, 130, 246, 0.1)',
      borderColor: '#2563eb',
      color: '#2563eb',
    },
  },
  trustBadges: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    marginTop: '2rem',
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    color: '#94a3b8',
    fontSize: '0.875rem',
    fontWeight: '500',
  },
  badgeIcon: {
    marginRight: '0.5rem',
    fontSize: '1rem',
  },
  highlight: {
    background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}));

const CallToActionOTP = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={`container ${classes.container}`}>
        <div className={classes.ctaCard}>
          <h2 className={classes.title}>
            Start Protecting Your <span className={classes.highlight}>Privacy</span> Today
          </h2>

          <p className={classes.subtitle}>
            Join thousands of users who trust Privacy OTP to keep their personal information safe.
            Get started with your first temporary phone number in under 60 seconds.
          </p>

          <div className={classes.buttonContainer}>
            <Button
              className={classes.primaryButton}
              variant="contained"
              size="large"
            >
              <a href="https://privacyotp.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                Check it out
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionOTP;