import { Grid, Icon, lighten, useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
  feature: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center !important",
    },
  },

  musicImage: {
    width: "362px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  musicImageWrapper: {
    position: "relative",
    textAlign: "right",

    // marginLeft: "100px",
    "&::before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: "72%",
      top: "14%",
      left: 0,
      right: 0,
      margin: "0 -2000px 0 -80px",
      borderRadius: "300px",
      background: theme.palette.primary.main,
      zIndex: -1,
      opacity: 0.1,

      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },

    "&::after": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 36,
      width: "80%",
      marginTop: 32,
      left: "calc(10% + 20px)",
      opacity: 0.75,
      background:
        "radial-gradient(ellipse at center,  rgba(0,0,0,0.65) -25%,rgba(0,0,0,0) 55%);",
    },

    [theme.breakpoints.down("sm")]: {
      display: "block",
      "&::after": {
        display: "none",
      },
      "&::before": {
        display: "none",
      },
    },
  },

  buttonGroupBG: {
    background: lighten(theme.palette.primary.light, 0.9),
    "&>div": {
      transition: "all 250ms",
      "&:hover": {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: 8,
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        width: "100%",
      },
    },
  },
}));

const features = [
  "Auto Tracking feature will automatically record when you start driving.",
  "Search by the different activity type, and see your trips filtered by running, cycling or driving.",
  "Modify the size to thumbnails or view full-screen sized trip summaries."
]

const FeatureTracking = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width: 768px");

  return (
    <section className="section">
      <div className="container">
        <Grid container spacing={isMobile ? 3 : 10} alignItems="center">
          <Grid item lg={8} md={8} sm={6} xs={12}>
            <div className="max-w-400 mb-16">
              <h1 className="mt-0 font-normal text-44">Tracking</h1>
              <p>
                Start the tracking feature or use the auto-tracking feature to get
                a snapshot of your movement while you record!
              </p>
            </div>

            <div className="mb-16 inline-block">
              <div
                className={`flex flex-wrap items-center border-radius-8 ${classes.buttonGroupBG}`}
              >
                <div className="px-6 py-2 box-shadow-none">Walking</div>
                <div className="px-6 py-2 box-shadow-none">Cycling</div>
                <div className="px-6 py-2 box-shadow-none">Driving</div>
              </div>
            </div>

            <div>
              <h1 className="mt-0 font-normal text-44">
                Collect Trips
              </h1>
              <p className="mb-8 mr-4">
                Trips can be used to create reports, that show information about a collection of Trips.
                use Reports to invoice your employer and get paid!
              </p>
              {features.map((item) => (
                <div key={item} className="flex items-center">
                  <Icon className="mr-4" color="primary">
                    done
                  </Icon>
                  <p className="my-2">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12} className={classes.feature}>
            <div className={classes.musicImageWrapper}>
              <img
                className={classes.musicImage}
                src="/assets/images/mt-home-light-full-1.png"
                alt="mobile-1"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default FeatureTracking;
