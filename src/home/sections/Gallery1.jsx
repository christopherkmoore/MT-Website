import { Button, Grid, Card, CardContent, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


const useStyles = makeStyles(({ palette, ...theme }) => ({
  projectCard: {
    background: 'rgba(30, 41, 59, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    borderRadius: 16,
    padding: "2rem",
    marginBottom: "3rem",
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
      transform: 'translateY(-2px)',
      borderColor: 'rgba(59, 130, 246, 0.4)',
    },
  },
  projectTitle: {
    color: "#e2e8f0",
    fontWeight: "700",
    fontSize: '2rem',
    marginBottom: "0.5rem",
  },
  projectDescription: {
    color: "#cbd5e1",
    lineHeight: '1.6',
    marginBottom: "2rem",
  },
  cardHolder: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    background: 'rgba(30, 41, 59, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: 280,
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      "& $cardOverlay": {
        opacity: 1,
      },
    },
  },
  cardHolderLarge: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
    background: 'rgba(30, 41, 59, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: 400,
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
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
    color: '#ffffff',
    background: "linear-gradient(to top, rgba(30, 41, 59, 0.9) 0%, rgba(30, 41, 59, 0.6) 50%, transparent 100%)",
    zIndex: 5,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
  projectButton: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    border: 'none',
    borderRadius: '8px',
    color: '#ffffff',
    fontWeight: '600',
    padding: "12px 30px",
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    "&:hover": {
      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
      transform: "translateY(-1px)",
    },
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  toggleGroup: {
    background: 'rgba(30, 41, 59, 0.7)',
    borderRadius: '12px',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    padding: '4px',
  },
  toggleButton: {
    border: 'none !important',
    borderRadius: '8px !important',
    color: '#94a3b8',
    fontWeight: '600',
    padding: '12px 24px',
    transition: 'all 0.3s ease',
    '&.Mui-selected': {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      color: '#ffffff',
      boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)',
    },
    '&:hover': {
      color: '#e2e8f0',
    },
  },
}));

const Gallery1 = ({ isProductsPage = false }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  // Default to mile-tracker when on products page, privacy-otp when on home page
  const [selectedProduct, setSelectedProduct] = useState(isProductsPage ? 'mile-tracker' : 'privacy-otp');

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

  const borderTimesImages = [
    {
      title: "Real-time Data",
      subtitle: "Live border crossing wait times",
      image: "/assets/images/border-times4.png",
    },
    {
      title: "Mobile Optimized",
      subtitle: "Responsive design for all devices",
      image: "/assets/images/border-times1.png",
    },
    {
      title: "Crossing Details",
      subtitle: "Comprehensive border information",
      image: "/assets/images/border-times3.png",
    },
  ];

  const handleProductChange = (event, newProduct) => {
    if (newProduct !== null) {
      setSelectedProduct(newProduct);
    }
  };

  const getCurrentProduct = () => {
    if (selectedProduct === 'privacy-otp') {
      return {
        title: "Privacy OTP",
        description: "A secure one-time password generator focused on privacy and security.",
        images: privacyOtpImages,
        buttonText: "READ MORE",
        buttonLink: "/Products/PrivacyOTP",
        useLargeCards: false
      };
    } else {
      return {
        title: "Mile Tracker+",
        description: "Comprehensive mileage tracking solution for business and personal use.",
        images: mileTrackerImages,
        buttonText: "READ MORE",
        buttonLink: "/Products/MileTracker",
        useLargeCards: true
      };
    }
  };

  const renderProjectSection = (title, description, images, buttonText, buttonLink, isEven, useLargeCards = false) => {
    const handleCardClick = () => {
      if (!isProductsPage) {
        // Only navigate when on home page
        if (title === "Privacy OTP") {
          navigate("/Products/PrivacyOTP");
        } else if (title === "Mile Tracker") {
          navigate("/Products/MileTracker");
        } else if (title === "Border Times") {
          navigate("/Products/BorderTimes");
        }
      }
    };

    return (
      <Card className={classes.projectCard} onClick={handleCardClick}>
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
  };

  const currentProduct = getCurrentProduct();

  return (
    <section className="section" id="gallery1">
      <div className="container">
        <div className="mb-16">
          <h1 className="font-normal text-44 mt-0">
            {isProductsPage ? "My Products" : "My Works And Portfolios"}
          </h1>
          <p className="max-w-400 mb-16">
            {isProductsPage
              ? "Explore my latest software products and applications designed to solve real-world problems."
              : "Here's some of the latest for what I've been working on -- Let's see if we can build something together!"
            }
          </p>
        </div>

        {isProductsPage && (
          <div className={classes.toggleContainer}>
            <ToggleButtonGroup
              value={selectedProduct}
              exclusive
              onChange={handleProductChange}
              className={classes.toggleGroup}
            >
              <ToggleButton value="mile-tracker" className={classes.toggleButton}>
                Mile Tracker+
              </ToggleButton>
              <ToggleButton value="privacy-otp" className={classes.toggleButton}>
                Privacy OTP
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        )}

        {isProductsPage ? (
          <Grid container spacing={3}>
            {currentProduct.images.map((item, ind) => (
              <Grid key={ind} item lg={4} md={4} sm={6} xs={12}>
                <div className={currentProduct.useLargeCards ? classes.cardHolderLarge : classes.cardHolder}>
                  <img className={classes.cardImage} src={item.image} alt={item.title} />
                  <div className={classes.cardOverlay}>
                    <h3 className="m-0">{item.title}</h3>
                    <p className="text-inherit">{item.subtitle}</p>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
            {renderProjectSection(
              "Privacy OTP",
              "A secure one-time password generator focused on privacy and security.",
              privacyOtpImages,
              "READ MORE",
              "/Products/PrivacyOTP",
              false,
              false
            )}

            {renderProjectSection(
              "Mile Tracker",
              "Comprehensive mileage tracking solution for business and personal use.",
              mileTrackerImages,
              "READ MORE",
              "/Products/MileTracker",
              true,
              true
            )}

            {renderProjectSection(
              "Border Times",
              "Real-time US-Mexico border crossing wait times with live data updates every 15 minutes.",
              borderTimesImages,
              "READ MORE",
              "/Products/BorderTimes",
              false,
              false
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Gallery1;
