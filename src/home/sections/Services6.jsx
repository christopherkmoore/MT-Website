import React from "react";
import { Grid, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    "& .card-icon": {
      fontSize: 64,
      transition: "all 250ms ease-in-out",
    },
    "&:hover": {
      "& .card-icon": {
        color: palette.primary.main,
      },
    },
  },
}));

const Service6 = () => {
  const classes = useStyles();

  const cardList = [
    {
      image: "/assets/images/previous-work-1.png",
      text: "Slalom Build",
    },
    {
      image: "/assets/images/previous-work-2.png",
      text: "Starbucks",
    },
    {
      image: "/assets/images/previous-work-3.png",
      text: "PG&E",
    },
    {
      image: "/assets/images/previous-work-4.png",
      text: "Go beyond",
    },
    {
      image: "/assets/images/previous-work-5.png",
      text: "Sell everywhere",
    },
    {
      image: "/assets/images/previous-work-6.jpeg",
      text: "Secured payments",
    },
    {
      image: "/assets/images/previous-work-7.webp",
      text: "Smart pricing",
    },
    {
      image: "/assets/images/previous-work-8.png",
      text: "Go beyond",
    },
  ];

  return (
    <div className="section" id="service6">
      <div className="container">
        <div className="section__header mb-48">
          <h2>Worked with</h2>
          <p>many professional world class businesses.</p>
        </div>
        <Grid container justify="center" alignItems="center" spacing={4}>
          {cardList.map((card, index) => (
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              key={index}
              className="text-center"
            >
              <div
                className={clsx(
                  "h-112 w-112 rounded overflow-hidden mx-auto p-6 card",
                  classes.card
                )}
              >
                <img className="rounded h-full w-full" src={card.image} alt="random" />
                
              </div>
              <p>{card.text}</p>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Service6;
