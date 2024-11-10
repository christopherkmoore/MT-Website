import React from "react";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";
import { Button } from "@mui/material";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  container: {
    backgroundImage: 'url("/assets/images/doted-bg-1.png")',
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
}));

const Intro11 = () => {
  const classes = useStyles();

  return (
    <section className="section mt-16" id="intro11">
      <div className={clsx("container", classes.container)}>
        <div className="max-w-550 mx-auto text-center">
          <img
            src="/assets/images/laptop-4.png"
            alt="laptop"
            className="full"
          />
          <h1 className="font-normal m-0 text-48">A Master in mobile technologies</h1>
          <h1 className="font-normal m-0 text-48 text-primary">
            find help you need.
          </h1>

          <p className="text-center mt-10 mb-14 max-w-400 mx-auto">
            Contact me to see if we can help your idea grow.
          </p>

          <div className="flex justify-center">
            <Button
              variant="outlined"
              color="primary"
              className="mr-4 border-radius-8 hover-bg-primary"
            >
              SEE PRODUCTS
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="border-radius-8"
            >
              CONTACT ME
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro11;