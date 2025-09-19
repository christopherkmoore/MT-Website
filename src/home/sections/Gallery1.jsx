import { Button, Grid, Card, CardContent, Box } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React from "react";
import { NavLink } from "react-router-dom";


const useStyles = makeStyles(({ palette, ...theme }) => ({
  projectCard: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: 16,
    padding: "2rem",
    marginBottom: "3rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    "&:nth-child(even)": {
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
  },
  projectTitle: {
    color: "white",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  projectDescription: {
    color: "rgba(255,255,255,0.9)",
    marginBottom: "2rem",
  },
  cardHolder: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: 280,
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      "& $cardOverlay": {
        opacity: 1,
      },
    },
  },
  cardHolderLarge: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: 400,
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
      "& $cardOverlay": {
        opacity: 1,
      },
    },
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
  },
  cardOverlay: {
    padding: "1rem",
    transition: "all 250ms ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute",
    borderRadius: 12,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    color: palette.primary.contrastText,
    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
    zIndex: 5,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
  projectButton: {
    borderRadius: 25,
    padding: "12px 30px",
    background: "rgba(255,255,255,0.2)",
    color: "white",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.3)",
    "&:hover": {
      background: "rgba(255,255,255,0.3)",
      transform: "translateY(-2px)",
    },
  },
}));

const Gallery1 = () => {
  const classes = useStyles();

  const privacyOtpImages = [
    {
      title: "Easy to Use",
      subtitle: "Get a new telephone number.",
      image: "/assets/privacy-otp/web_marketing.png",
    },
    {
      title: "Works on your Phone",
      subtitle: "Download for iPhone or Android",
      image: "/assets/privacy-otp/mobile_marketing.png",
    },
    {
      title: "Multiple uses!",
      subtitle: "Protect yourself from advertisers",
      image: "/assets/privacy-otp/web_marketing2.png",
    },
  ];

  const mileTrackerImages = [
    {
      title: "Tracking",
      subtitle: "Easy to use Tracking",
      image: "/assets/images/mt-home-dark-full-1.png",
    },
    {
      title: "Trends",
      subtitle: "See real time analytics",
      image: "/assets/images/mt-trends-dark-full-1.png",
    },
    {
      title: "Reports",
      subtitle: "Make money",
      image: "/assets/images/mt-reports-dark-full-1.png",
    },
  ];

  const renderProjectSection = (title, description, images, buttonText, buttonLink, isEven, useLargeCards = false) => (
    <Card className={classes.projectCard} style={{
      background: isEven
        ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }}>
      <CardContent>
        <h2 className={classes.projectTitle}>{title}</h2>
        <p className={classes.projectDescription}>{description}</p>

        <Grid container spacing={3}>
          {images.map((item, ind) => (
            <Grid key={ind} item lg={4} md={4} sm={6} xs={12}>
              <div className={useLargeCards ? classes.cardHolderLarge : classes.cardHolder}>
                <img className={classes.cardImage} src={item.image} alt={item.title} />
                <div className={classes.cardOverlay}>
                  <h3 className="m-0">{item.title}</h3>
                  <p className="text-inherit">{item.subtitle}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>

        {buttonLink && (
          <div className={classes.buttonContainer}>
            <Button
              className={classes.projectButton}
              variant="contained"
            >
              <NavLink to={buttonLink} style={{ color: 'inherit', textDecoration: 'none' }}>
                {buttonText}
              </NavLink>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section className="section" id="gallery1">
      <div className="container">
        <div className="mb-16">
          <h1 className="font-normal text-44 mt-0">My Works And Portfolios</h1>
          <p className="max-w-400 mb-16">
            Here's some of the latest for what I've been working on --
            Let's see if we can build something together!
          </p>
        </div>

        {renderProjectSection(
          "Privacy OTP",
          "A secure one-time password generator focused on privacy and security.",
          privacyOtpImages,
          "LEARN MORE",
          null,
          false,
          false
        )}

        {renderProjectSection(
          "Mile Tracker",
          "Comprehensive mileage tracking solution for business and personal use.",
          mileTrackerImages,
          "READ MORE",
          "/MileTracker",
          true,
          true
        )}
      </div>
    </section>
  );
};

export default Gallery1;
