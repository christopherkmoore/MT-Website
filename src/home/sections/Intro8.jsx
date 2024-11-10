import { Button, Grid, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";


const strengths = ["Future proof your app with my excellence in SwiftUI & Jetpack Compose.",
  "Stay up-to-date with the latest design and mobile trends.",
  "Always be on the cutting edge with high-performance applications."
]

const useStyles = makeStyles(({ palette, ...theme }) => ({
  imageWrapper: {
    position: "relative",
    zIndex: 3,
    "& .price": {
      position: "absolute",
      right: 24,
      top: -12,
      height: 100,
      width: 100,
      borderRadius: "50%",
      boxShadow: "0px 10px 6px rgba(0,0,0,0.17)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 450,
      width: 450,
      background: "rgba(var(--primary),0.15)",
      borderRadius: "50%",
      zIndex: -1,
    },
    "&:before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 390,
      width: 390,
      background: "rgba(var(--primary),0.2)",
      borderRadius: "50%",
      zIndex: -2,
    },
    [theme.breakpoints.down("sm")]: {
      "&:after": {
        height: 350,
        width: 350,
      },
      "&:before": {
        height: 290,
        width: 290,
      },
      "& .price": {
        right: 0,
      },
    },
    [theme.breakpoints.down("xs")]: {
      "&:after": {
        height: 300,
        width: 300,
      },
      "&:before": {
        height: 240,
        width: 240,
      },
    },
  },
}));

const Intro8 = () => {
  const classes = useStyles();

  return (
    <section className="section mt-12" id="intro8">
      <div className="container">
        <Grid container spacing={10} justify="space-between">
          <Grid item sm={6} xs={12}>
            <div
              className={clsx(
                "flex-column justify-center items-center h-full",
                classes.imageWrapper
              )}
            >
              <div className="relative">
                <img
                  src="/assets/images/app1.png"
                  alt="Laptop"
                  className="w-full block mt-6"
                />
                {/* <div className="price flex items-center justify-center bg-paper">
                  <h4 className="text-18 font-normal m-0">$ 499.99</h4>
                </div> */}
              </div>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <h1 className="mt-0 mb-4 font-normal text-48">Christopher Moore</h1>
            <h4 className="text-primary font-normal text-20 m-0">
              Expert Mobile Developer and Tech Enthusiast.
            </h4>
            <p className="my-8 max-w-400">
              With years of experience in developing innovative mobile apps,
              I bring  a unique blend of creativity, technical expertise, and passion
              to every project I undertake. My specialties include mobile app design, development,
              and deployment on mobile platforms.
            </p>
            {strengths.map((item) => (
              <div key={item} className="flex items-center">
                <Icon className="mr-4" color="primary">
                  done
                </Icon>
                <p className="my-2">
                  {item}
                </p>
              </div>
            ))}

            <div className="mt-12">
              <div className="mb-4">
                <Button
                  variant="contained"
                  color="primary"
                  className="rounded px-2px py-2px "
                >
                  <NavLink className="pl-8 pr-7" to="/Contact">Hire me</NavLink>
                </Button>

              </div>
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  className="rounded px-2px py-2px"
                >
                  <NavLink className="pl-8 pr-7" to="/MileTracker">See products</NavLink>
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Intro8;
