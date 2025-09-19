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
      background: "rgba(255, 0, 128, 0.1)",
      borderRadius: "50%",
      zIndex: -1,
    },
    "&:before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 390,
      width: 390,
      background: "rgba(0, 128, 255, 0.1)",
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
  heroTitle: {
    color: '#e2e8f0',
    fontWeight: '700',
    fontSize: '3rem',
  },
  heroSubtitle: {
    color: '#60a5fa',
    fontWeight: '600',
  },
  heroText: {
    color: '#cbd5e1',
    lineHeight: '1.6',
  },
  strengthIcon: {
    color: '#10b981',
  },
  professionalButton: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    border: 'none',
    borderRadius: '8px',
    color: '#ffffff',
    fontWeight: '600',
    padding: "12px 30px",
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
  professionalButtonSecondary: {
    background: 'transparent',
    border: '2px solid #3b82f6',
    borderRadius: '8px',
    color: '#3b82f6',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: '#3b82f6',
      color: '#ffffff',
    },
    '& a': {
      color: 'inherit !important',
      textDecoration: 'none',
      fontWeight: '600',
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
            <h1 className={`mt-0 mb-4 font-normal text-48 ${classes.heroTitle}`}>
              Christopher Moore
            </h1>
            <h4 className={`font-normal text-20 m-0 ${classes.heroSubtitle}`}>
              Expert Mobile Developer and Tech Enthusiast.
            </h4>
            <p className={`my-8 max-w-400 ${classes.heroText}`}>
              With years of experience in developing innovative mobile apps,
              I bring a unique blend of creativity, technical expertise, and passion
              to every project I undertake. My specialties include mobile app design, development,
              and deployment on mobile platforms.
            </p>
            {strengths.map((item) => (
              <div key={item} className="flex items-center">
                <Icon className={`mr-4 ${classes.strengthIcon}`}>
                  done
                </Icon>
                <p className={`my-2 ${classes.heroText}`}>
                  {item}
                </p>
              </div>
            ))}

            <div className="mt-12">
              <div className="mb-4">
                <Button
                  variant="contained"
                  className={classes.professionalButton}
                >
                  <NavLink to="/Contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Hire me 🚀
                  </NavLink>
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
