import React from "react";

import { Card, CardContent, Grid, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';

import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    borderTop: "2px solid black",
    "& .icon": {
      fontSize: 64,
    },

    "&:hover": {
      borderTop: "2px solid rgba(var(--primary), 1)",
      "& .icon": {
        color: "rgba(var(--primary),1)",
      },
    },
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
          <h2>My Services</h2>
          <p>
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
                    <h3 className="font-light text-24">{service.title}</h3>
                    <p>{service.text}</p>
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
