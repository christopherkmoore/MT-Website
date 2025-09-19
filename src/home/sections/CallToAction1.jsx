import React from "react";

import { Button, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';

import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  sectionBG: ({ bg }) => ({
    background: 'rgba(30, 41, 59, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    borderRadius: '16px',
    margin: '2rem 0',
    padding: '3rem 2rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
  }),
  ctaTitle: {
    color: '#e2e8f0',
    fontWeight: '700',
    fontSize: '2rem',
  },
  ctaText: {
    color: '#cbd5e1',
    lineHeight: '1.6',
    fontSize: '1.125rem',
  },
  ctaButton: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 30px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
      transform: 'translateY(-1px)',
    },
    '& a': {
      color: '#ffffff !important',
      textDecoration: 'none',
      fontWeight: '600',
    },
  },
}));

const CallToAction1 = ({ bg }) => {
  const classes = useStyles({ bg });

  return (
    <div className={clsx("section text-white", classes.sectionBG)} id="cta1">
      <div className="container">
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justify="flex-start"
        >
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <h2 className={classes.ctaTitle}>Let's schedule some time to talk 💬</h2>
            <p className={classes.ctaText}>
              Professional discovery, design, and complete technical coverage for your ideas.
            </p>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} className="text-center">
            <Button size="large" variant="contained" className={classes.ctaButton}>
              <a href="mailto:christopherkmoore1@gmail.com?subject=Hello!">
                Contact me
              </a>
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CallToAction1;
