import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '4rem 0',
    background: 'rgba(15, 23, 42, 0.6)',
  },
  featureCard: {
    background: 'rgba(30, 41, 59, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    borderRadius: '12px',
    padding: '2rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    height: '100%',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
      borderColor: 'rgba(59, 130, 246, 0.4)',
    },
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
    display: 'block',
  },
  featureTitle: {
    color: '#e2e8f0',
    fontWeight: '600',
    fontSize: '1.25rem',
    marginBottom: '1rem',
  },
  featureDescription: {
    color: '#94a3b8',
    lineHeight: '1.6',
  },
  sectionTitle: {
    color: '#e2e8f0',
    fontWeight: '700',
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionSubtitle: {
    color: '#94a3b8',
    fontSize: '1.125rem',
    textAlign: 'center',
    marginBottom: '4rem',
    maxWidth: '600px',
    margin: '0 auto 4rem',
  },
}));

const FeaturePrivacy = () => {
  const classes = useStyles();

  const features = [
    {
      icon: "🔒",
      title: "Complete Privacy",
      description: "Your real phone number stays private. No tracking, no data collection, no spam."
    },
    {
      icon: "📱",
      title: "Instant Verification",
      description: "Receive SMS verification codes instantly on temporary numbers that work everywhere."
    },
    {
      icon: "🌍",
      title: "Global Coverage",
      description: "Get phone numbers from multiple countries for international services and apps."
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Get a new number in seconds. No long registration process or identity verification."
    },
    {
      icon: "🛡️",
      title: "Secure by Design",
      description: "End-to-end encryption ensures your messages and data remain completely secure."
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Pay only for what you use. No monthly subscriptions or hidden fees."
    }
  ];

  return (
    <section className={classes.section}>
      <div className="container">
        <h2 className={classes.sectionTitle}>Why Choose Privacy OTP?</h2>
        <p className={classes.sectionSubtitle}>
          Protect your identity and privacy with our advanced temporary phone number service
        </p>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid key={index} item lg={4} md={6} sm={12} xs={12}>
              <div className={classes.featureCard}>
                <span className={classes.featureIcon}>{feature.icon}</span>
                <h3 className={classes.featureTitle}>{feature.title}</h3>
                <p className={classes.featureDescription}>{feature.description}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default FeaturePrivacy;