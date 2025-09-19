import React from "react";

import { Card, CardContent, Grid, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';

import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: "2px solid rgba(255, 0, 128, 0.3)",
    borderRadius: '15px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
    "& .icon": {
      fontSize: 64,
      color: "#00ffff",
      filter: 'drop-shadow(0 0 10px #00ffff)',
    },
    "&:hover": {
      border: "2px solid #ff0080",
      boxShadow: '0 0 25px rgba(255, 0, 128, 0.5)',
      transform: 'translateY(-5px)',
      "& .icon": {
        color: "#ff0080",
        filter: 'drop-shadow(0 0 15px #ff0080)',
      },
    },
  },
  sectionTitle: {
    background: 'linear-gradient(45deg, #ff0080, #0080ff)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 20px rgba(255, 0, 128, 0.3)',
  },
  serviceTitle: {
    color: '#ffffff',
    textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
  },
  serviceDescription: {
    color: '#e0e0e0',
    lineHeight: '1.5',
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
    <section className="section bg-light-gray" id="service1">
      <div className="container">
        <div className="section__header">
          <h2 className={classes.sectionTitle}>My Services ⚡</h2>
          <p className={classes.serviceDescription}>
            Expertise from start to finish across all ends of technical development.
            Whatever you need, I have the expertise.
          </p>
        </div>

        <Grid container spacing={3} alignContent="stretch">
          {serviceList.map((service) => (
            <Grid item md={3} sm={6} key={service.title}>
              <Card className={clsx("card h-full", classes.card)}>
                <CardContent className="flex-column justify-between min-h-full">
                  <div className="flex-grow">
                    <div className="text-center mb-4">
                      <Icon className="icon">{service.icon}</Icon>
                    </div>
                    <h3 className={`font-light text-24 ${classes.serviceTitle}`}>{service.title}</h3>
                    <p className={classes.serviceDescription}>{service.text}</p>
                  </div>
                  {/* <div className="pt-4">
                    <Button>READ MORE</Button>
                  </div> */}
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
