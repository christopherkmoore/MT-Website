import { Box, Container, Typography, IconButton, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";
import GithubIcon from "../common/icons/GithubIcon";
import LinkedinIcon from "../common/icons/LinkedinIcon";
import MediumIcon from "../common/icons/MediumIcon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  footer: {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    borderTop: '1px solid rgba(59, 130, 246, 0.2)',
    paddingTop: '4rem',
    paddingBottom: '2rem',
    marginTop: '4rem',
  },
  footerSection: {
    marginBottom: '2rem',
  },
  sectionTitle: {
    color: '#e2e8f0',
    fontWeight: '600',
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
  },
  brandSection: {
    textAlign: 'left',
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '12px',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    padding: '2rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(30, 41, 59, 0.7)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
  },
  name: {
    background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '800',
    fontSize: '2rem',
    marginBottom: '0.5rem',
    letterSpacing: '-0.025em',
  },
  tagline: {
    color: '#94a3b8',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
    maxWidth: '350px',
  },
  socialContainer: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  socialIcon: {
    background: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    color: '#60a5fa',
    padding: '12px',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(59, 130, 246, 0.2)',
      color: '#3b82f6',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
    },
  },
  coffeeLink: {
    background: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    color: '#60a5fa',
    padding: '8px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '0.875rem',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(59, 130, 246, 0.2)',
      color: '#3b82f6',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
    },
  },
  contactSection: {
    textAlign: 'left',
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '12px',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    padding: '2rem',
    height: '100%',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(30, 41, 59, 0.7)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    color: '#94a3b8',
    marginBottom: '1rem',
    fontSize: '0.95rem',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  contactIcon: {
    marginRight: '0.75rem',
    fontSize: '1.2rem',
  },
  contactLink: {
    color: '#60a5fa',
    textDecoration: 'none',
    '&:hover': {
      color: '#3b82f6',
    },
  },
  linksSection: {
    textAlign: 'left',
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '12px',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    padding: '2rem',
    height: '100%',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(30, 41, 59, 0.7)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  linkItem: {
    display: 'block',
    color: '#94a3b8',
    textDecoration: 'none',
    marginBottom: '0.75rem',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#60a5fa',
    },
  },
  bottomSection: {
    borderTop: '1px solid rgba(59, 130, 246, 0.1)',
    marginTop: '3rem',
    paddingTop: '2rem',
    textAlign: 'center',
  },
  copyright: {
    color: '#64748b',
    fontSize: '0.875rem',
  },
}));

const Footer2 = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={8}>
            <div className={classes.brandSection} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <Typography className={classes.name}>
                  Christopher Moore
                </Typography>
                <Typography className={classes.tagline}>
                  Building innovative software with cutting-edge technology.
                  Passionate about creating exceptional user experiences.
                </Typography>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
                <Box className={classes.socialContainer} style={{ justifyContent: 'flex-end', margin: 0 }}>
                  <IconButton
                    className={classes.socialIcon}
                    href="https://github.com/christopherkmoore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon />
                  </IconButton>
                  <IconButton
                    className={classes.socialIcon}
                    href="https://www.linkedin.com/in/christopher-moore1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon />
                  </IconButton>
                  <IconButton
                    className={classes.socialIcon}
                    href="https://medium.com/@christopherkmoore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MediumIcon />
                  </IconButton>
                </Box>

                <a
                  href="https://www.paypal.com/donate/?business=P5YETTFZG73JG&no_recurring=0&currency_code=USD"
                  className={classes.coffeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ☕ Buy me a coffee
                </a>
              </div>

            </div>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} md={4}>
            <div className={classes.linksSection}>
              <Typography className={classes.sectionTitle}>
                Links
              </Typography>

              <a
                href="https://staging.d1spf6k7qx7ko1.amplifyapp.com/"
                className={classes.linkItem}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Me
              </a>

              <a
                href="https://none.d1kcel26541ny4.amplifyapp.com/"
                className={classes.linkItem}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </div>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <div className={classes.bottomSection}>
          <Typography className={classes.copyright}>
            © {new Date().getFullYear()} Christopher Moore. All rights reserved.
          </Typography>
        </div>
      </Container>
    </Box>
  );
};

export default Footer2;
