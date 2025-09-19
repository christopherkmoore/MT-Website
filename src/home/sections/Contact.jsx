import { Container, Typography, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";
import GithubIcon from "../common/icons/GithubIcon";
import LinkedinIcon from "../common/icons/LinkedinIcon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    paddingTop: '6rem',
    paddingBottom: '4rem',
    minHeight: '80vh',
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '70vh',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
      marginBottom: '3rem',
      alignItems: 'center',
    },
  },
  profileContainer: {
    position: 'relative',
    display: 'inline-block',
  },
  profileImage: {
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid rgba(59, 130, 246, 0.3)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      borderColor: 'rgba(59, 130, 246, 0.6)',
      boxShadow: '0 25px 50px rgba(59, 130, 246, 0.2)',
    },
    [theme.breakpoints.down('md')]: {
      width: '220px',
      height: '220px',
    },
  },
  statusIndicator: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    width: '24px',
    height: '24px',
    background: '#10b981',
    borderRadius: '50%',
    border: '3px solid rgba(30, 41, 59, 0.9)',
    animation: '$pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%, 100%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0.7,
    },
  },
  rightSection: {
    flex: 1,
    paddingLeft: '1rem',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
    },
  },
  greeting: {
    color: '#60a5fa',
    fontSize: '1.125rem',
    fontWeight: '500',
    marginBottom: '0.5rem',
  },
  title: {
    color: '#e2e8f0',
    fontWeight: '700',
    fontSize: '2.5rem',
    lineHeight: '1.2',
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: '1.125rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
    maxWidth: '500px',
  },
  contactMethods: {
    marginBottom: '2rem',
  },
  contactMethod: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    padding: '1rem',
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '12px',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    '&:hover': {
      background: 'rgba(30, 41, 59, 0.7)',
      borderColor: 'rgba(59, 130, 246, 0.4)',
      transform: 'translateY(-2px)',
    },
  },
  preferredMethod: {
    background: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    '&:hover': {
      background: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 0.5)',
    },
  },
  contactIcon: {
    fontSize: '2.75rem',
    marginRight: '1rem',
    minWidth: '2.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailIcon: {
    color: '#60a5fa',
    fontSize: '2rem',
  },
  githubIcon: {
    color: '#94a3b8',
  },
  linkedinIcon: {
    color: '#0ea5e9',
  },
  contactText: {
    flex: 1,
  },
  contactLabel: {
    color: '#e2e8f0',
    fontWeight: '600',
    fontSize: '1rem',
    marginBottom: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  contactValue: {
    color: '#94a3b8',
    fontSize: '0.875rem',
  },
  preferredBadge: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: '#ffffff',
    padding: '2px 8px',
    borderRadius: '8px',
    fontSize: '0.6rem',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  responseTime: {
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    borderRadius: '12px',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  responseIcon: {
    color: '#10b981',
    marginRight: '0.75rem',
    fontSize: '1.25rem',
  },
  responseText: {
    color: '#10b981',
    fontWeight: '500',
    fontSize: '0.95rem',
  },
  profileInfo: {
    textAlign: 'left',
    marginTop: '2rem',
    paddingLeft: '32px',
    maxWidth: '320px',
  },
  profileGreeting: {
    color: '#60a5fa',
    fontSize: '1.125rem',
    fontWeight: '500',
    marginBottom: '0.5rem',
  },
  profileTitle: {
    color: '#e2e8f0',
    fontWeight: '800 !important',
    fontSize: '32px !important',
    lineHeight: '1.1',
    marginBottom: '0.5rem',
  },
  profileDescription: {
    color: '#94a3b8',
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  profileLocation: {
    color: '#94a3b8',
    fontSize: '24px',
    marginTop: '0.5rem',
    textAlign: 'center',
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <section className={classes.section} id="contact">
      <Container maxWidth="lg">
        <Grid container className={classes.mainContainer} spacing={2}>
          {/* Left Section - Profile Picture */}
          <Grid item xs={12} md={4}>
            <div className={classes.leftSection}>
              <div className={classes.profileContainer}>
                <img
                  src="/assets/images/profile.jpeg"
                  alt="Christopher Moore"
                  className={classes.profileImage}
                />
                <div className={classes.statusIndicator} title="Available for new projects" />
              </div>
              <div className={classes.profileInfo}>
                <Typography className={classes.profileTitle}>
                  Christopher Moore
                </Typography>
                <Typography className={classes.profileLocation}>
                  🌴 San Diego, California
                </Typography>
              </div>
            </div>
          </Grid>

          {/* Right Section - Contact Info */}
          <Grid item xs={12} md={8}>
            <div className={classes.rightSection}>
              <div className={classes.contactMethods}>
                <a
                  href="mailto:christopherkmoore1@gmail.com"
                  className={`${classes.contactMethod} ${classes.preferredMethod}`}
                >
                  <div className={`${classes.contactIcon} ${classes.emailIcon}`}>📧</div>
                  <div className={classes.contactText}>
                    <div className={classes.contactLabel}>
                      Email <span className={classes.preferredBadge}>Preferred</span>
                    </div>
                    <div className={classes.contactValue}>christopherkmoore1@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://github.com/christopherkmoore"
                  className={classes.contactMethod}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className={`${classes.contactIcon} ${classes.githubIcon}`} />
                  <div className={classes.contactText}>
                    <div className={classes.contactLabel}>GitHub</div>
                    <div className={classes.contactValue}>View my repositories and open source work</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/christopher-moore1/"
                  className={classes.contactMethod}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className={`${classes.contactIcon} ${classes.linkedinIcon}`} />
                  <div className={classes.contactText}>
                    <div className={classes.contactLabel}>LinkedIn</div>
                    <div className={classes.contactValue}>Connect professionally and see my experience</div>
                  </div>
                </a>
              </div>

              <div className={classes.responseTime}>
                <span className={classes.responseIcon}>⚡</span>
                <span className={classes.responseText}>
                  Typically respond within 24 hours
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;