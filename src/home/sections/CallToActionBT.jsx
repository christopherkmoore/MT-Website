import { Button, Grid, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '6rem 0',
    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)',
  },
  ctaTitle: {
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '2.5rem',
    fontWeight: '700',
  },
  ctaDescription: {
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: '3rem',
    fontSize: '1.125rem',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
    lineHeight: '1.6',
  },
  primaryButton: {
    padding: "16px 32px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    color: "#ffffff",
    textTransform: "none",
    fontWeight: "600",
    fontSize: "18px",
    marginRight: "16px",
    "&:hover": {
      background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 32px rgba(16, 185, 129, 0.3)",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginBottom: "16px",
      width: "100%",
    },
  },
}));


export default function CallToActionBT() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className="container">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12}>
            <h2 className={classes.ctaTitle}>
              Experience Border Times
            </h2>
            <p className={classes.ctaDescription}>
              A production-ready web application serving real-time border crossing data
              with enterprise-grade performance and modern architecture.
            </p>

            <div className="text-center">
              <Button
                variant="contained"
                className={classes.primaryButton}
                href="https://border-times.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="mr-2">launch</Icon>
                Visit Live Site
              </Button>

            </div>
          </Grid>
        </Grid>

      </div>
    </section>
  );
}