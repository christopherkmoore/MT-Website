import {
  darken,
  Grid,
  Icon
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";
import React from "react";
import GithubIcon from "../common/icons/GithubIcon";
import LinkedinIcon from "../common/icons/LinkedinIcon";
import MediumIcon from "../common/icons/MediumIcon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    background: "#011C3A",
    color: palette.primary.contrastText,
  },
  iconWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 4,
    marginRight: 12,
    "&:hover": {
      background: darken("#011C3A", 0.2),
    },
    cursor: "pointer",
  },
  link: {
    borderRadius: 4,
    "&:hover": {
      background: darken("#011C3A", 0.2),
    },
  },
}));

const userfulLink = [
  // {
  //   title: "Terms of Services",
  //   link: "https://staging.d1spf6k7qx7ko1.amplifyapp.com/"
  // },
  {
    title: "Privacy Policy",
    link: "https://none.d1kcel26541ny4.amplifyapp.com/"
  },
  {
    title: "Contact Me",
    link: "https://staging.d1spf6k7qx7ko1.amplifyapp.com/"
  }
];

const Footer2 = () => {
  const classes = useStyles();

  return (
    <section className={`section ${classes.section}`} id="contact4">
      <div className="container">
        <Grid container>
          <Grid item lg={6} md={6} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-20 mb-6 relative">
                Christopher Moore
              </h4>
              <p className="text-inherit">
                Check out some of my work, or reach me here:
              </p>
              <div className="flex flex-wrap">
                <div className={classes.iconWrapper}>
                  <a href="https://github.com/christopherkmoore">
                    <GithubIcon className="text-13" fontSize="small" />
                  </a>
                </div>
                <div className={classes.iconWrapper}>
                  <a href="https://www.linkedin.com/in/christopher-moore1/">
                    <LinkedinIcon className="text-13" fontSize="small" />
                  </a>
                  </div>
                  <div className={classes.iconWrapper}>
                    <a href="https://medium.com/@christopherkmoore">
                      <MediumIcon className="text-13" fontSize="small" />
                    </a>
                  </div>
                <div className={classes.iconWrapper}>
                  <a href="https://www.paypal.com/donate/?business=P5YETTFZG73JG&no_recurring=0&currency_code=USD"><u>Consider buying me a coffee ☕️ </u></a>

                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-20 mb-6 relative">Contact</h4>
              <div className="px-4 my-8 flex items-center mx--4">
                <Icon className="text-secondary">mail</Icon>
                <div className="pl-4">
                  <h5 className="m-0 p-0 text-16">Email</h5>
                  <p className="m-0 p-0 text-inherit">christopherkmoore1@gmail.com</p>
                </div>
              </div>
              <div className="px-4 mt-8 flex items-center mx--4">
                <Icon className="text-secondary">location_on</Icon>
                <div className="pl-4">
                  <h5 className="m-0 p-0 text-16">Address</h5>
                  <p className="m-0 p-0 text-inherit">
                    San Diego, California
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-20 mb-6 relative">Useful Links</h4>
              <div className="mt-4 mb-6 ml--4">
                {userfulLink.map((item, ind) => (
                  <div
                    key={ind}
                    className={clsx(
                      "flex items-center py-2 cursor-pointer px-4 w-full",
                      classes.link
                    )}
                  >
                    <Icon>navigate_next</Icon>
                    <a href={item.link}><span>{item.title}</span></a>
                  </div>
                ))}
              </div>
            </div>
          </Grid>

        </Grid>
      </div>
    </section>
  );
};

export default Footer2;
