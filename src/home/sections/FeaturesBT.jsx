import { Card, Grid, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '6rem 0',
    background: 'rgba(30, 41, 59, 0.4)',
  },
  featureCard: {
    padding: '2rem',
    height: '100%',
    background: 'rgba(51, 65, 85, 0.6)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    borderRadius: '12px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2)',
    },
  },
  featureIcon: {
    fontSize: '3rem',
    color: '#10b981',
    marginBottom: '1rem',
  },
  featureTitle: {
    color: theme.palette.text.primary,
    fontWeight: '600',
    marginBottom: '1rem',
    fontSize: '1.25rem',
  },
  featureDescription: {
    color: '#94a3b8',
    lineHeight: '1.6',
  },
  sectionTitle: {
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: '3rem',
    fontSize: '2.5rem',
    fontWeight: '700',
  },
  sectionSubtitle: {
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: '4rem',
    fontSize: '1.125rem',
    maxWidth: '600px',
    margin: '0 auto 4rem auto',
  },
  gallerySection: {
    marginTop: '6rem',
    padding: '4rem 2rem',
    background: 'rgba(51, 65, 85, 0.4)',
    borderRadius: '12px',
    border: '1px solid rgba(148, 163, 184, 0.2)',
  },
  galleryTitle: {
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2rem',
    fontWeight: '600',
  },
  screenshotImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));

const features = [
  {
    icon: 'schedule',
    title: 'Real-Time Updates',
    description: 'Live border crossing wait times updated every 15 minutes from official CBP data sources.'
  },
  {
    icon: 'speed',
    title: 'Lightning Fast',
    description: 'Optimized for speed with sub-200ms load times and efficient caching for instant data access.'
  },
  {
    icon: 'language',
    title: 'Bilingual Support',
    description: 'Full English and Spanish language support with proper internationalization (i18n).'
  },
  {
    icon: 'devices',
    title: 'Mobile Optimized',
    description: 'Responsive design that works perfectly on desktop, tablet, and mobile devices.'
  },
  {
    icon: 'cloud',
    title: 'AWS Infrastructure',
    description: 'Built on scalable AWS serverless architecture with Lambda, DynamoDB, and CloudFront CDN.'
  },
  {
    icon: 'analytics',
    title: 'SEO Optimized',
    description: 'Fully optimized for search engines with proper meta tags, canonical URLs, and performance.'
  },
];

export default function FeaturesBT() {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className="container">
        <h2 className={classes.sectionTitle}>
          Technical Excellence
        </h2>
        <p className={classes.sectionSubtitle}>
          Border Times showcases modern web development best practices with enterprise-grade
          performance and scalability.
        </p>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item lg={4} md={6} sm={12} xs={12} key={index}>
              <Card className={classes.featureCard} elevation={0}>
                <Icon className={classes.featureIcon}>
                  {feature.icon}
                </Icon>
                <h3 className={classes.featureTitle}>
                  {feature.title}
                </h3>
                <p className={classes.featureDescription}>
                  {feature.description}
                </p>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div className={classes.gallerySection}>
          <h3 className={classes.galleryTitle}>
            Application Screenshots
          </h3>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <img
                src="/assets/images/border-times4.png"
                alt="Border Times Home Page"
                className={classes.screenshotImage}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <img
                src="/assets/images/border-times2.png"
                alt="Border Times Mobile View"
                className={classes.screenshotImage}
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <img
                src="/assets/images/border-times3.png"
                alt="Border Times Crossing Details"
                className={classes.screenshotImage}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}