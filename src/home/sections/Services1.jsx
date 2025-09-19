import React from "react";

import { Card, CardContent, Grid, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    padding: '6rem 0',
    background: 'rgba(15, 23, 42, 0.6)',
  },
  card: {
    background: 'rgba(30, 41, 59, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    borderRadius: '16px',
    padding: '1rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    height: '100%',
    "& .icon": {
      fontSize: 40,
      color: "#3b82f6",
      marginBottom: '1rem',
    },
    "&:hover": {
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
      transform: 'translateY(-2px)',
      borderColor: 'rgba(59, 130, 246, 0.4)',
      "& .icon": {
        color: "#60a5fa",
      },
    },
  },
  sectionTitle: {
    color: '#e2e8f0',
    fontWeight: '700',
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  },
  serviceTitle: {
    color: '#e2e8f0',
    fontWeight: '600',
    fontSize: '1.25rem',
    marginBottom: '0.75rem',
    paddingBottom: '0.75rem',
    borderBottom: '2px solid #e2e8f0',
    position: 'relative',
  },
  serviceDescription: {
    color: '#94a3b8',
    lineHeight: '1.6',
    fontSize: '1rem',
  },
  headerDescription: {
    color: '#94a3b8',
    fontSize: '1.125rem',
    lineHeight: '1.7',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem',
    textAlign: 'center',
  },
}));

const Services1 = () => {
  const classes = useStyles();

  const serviceList = [
    {
      icon: "stay_primary_portrait",
      title: "Mobile Application",
      text:
        "Build cutting edge mobile apps using the most modern technolgies like SwiftUI and Jetpack Compose.",
    },
    {
      icon: "computer",
      title: "Website Development",
      text:
        "From a personal site to admin dashboards, we can start today",
    },
    {
      icon: "cloud_queue",
      title: "AWS Cloud Software",
      text:
        "AWS expertise in cloud software, including RDS, Lambda, S3, SQS, EC2, and Gateway - build the most scalable tech in the world.",
    },
    {
      icon: "storage",
      title: "Database Administration",
      text:
        "Professional relational database storage, graph or something as simple as S3 for all your storage needs.",
    },

  ];

  return (
    <section className={classes.section} id="service1">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className={classes.sectionTitle}>My Services</h2>
          <p className={classes.headerDescription}>
            Expertise from start to finish across all ends of technical development.
            Whatever you need, I have the expertise.
          </p>
        </div>

        <Grid container spacing={4} alignContent="stretch">
          {serviceList.map((service) => (
            <Grid item md={3} sm={6} xs={12} key={service.title}>
              <Card className={classes.card} elevation={0}>
                <CardContent>
                  <div className="text-center mb-4">
                    <Icon className="icon">{service.icon}</Icon>
                  </div>
                  <h3 className={classes.serviceTitle}>{service.title}</h3>
                  <p className={classes.serviceDescription}>{service.text}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Services1;
