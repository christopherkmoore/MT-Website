import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import advancedAnalytics from "../../utils/AdvancedAnalytics";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  appBar: {
    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem 2rem',
    minHeight: '80px',
    gap: '4rem',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
      padding: '0.5rem 1rem',
      minHeight: '70px',
      gap: '0',
    },
  },
  brandName: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: '1.75rem',
    textDecoration: 'none',
    flexGrow: 0,
    letterSpacing: '-0.025em',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
  desktopNav: {
    display: 'flex',
    gap: '3rem',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  navLink: {
    color: '#e2e8f0',
    textDecoration: 'none',
    fontWeight: '600',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    position: 'relative',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    '&:hover': {
      color: '#60a5fa',
      background: 'rgba(96, 165, 250, 0.1)',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(96, 165, 250, 0.2)',
    },
    '&.active': {
      color: '#60a5fa',
      background: 'rgba(96, 165, 250, 0.15)',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '4px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: '#60a5fa',
      },
    },
  },
  menuButton: {
    color: '#e2e8f0',
    background: 'rgba(96, 165, 250, 0.1)',
    border: '1px solid rgba(96, 165, 250, 0.3)',
    borderRadius: '8px',
    padding: '8px',
    transition: 'all 0.3s ease',
    display: 'block',
    '&:hover': {
      background: 'rgba(96, 165, 250, 0.2)',
      color: '#60a5fa',
      transform: 'scale(1.05)',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none !important',
    },
    [theme.breakpoints.down('md')]: {
      display: 'block !important',
    },
  },
  drawer: {
    '& .MuiDrawer-paper': {
      backgroundColor: 'rgba(15, 23, 42, 0.98)',
      color: '#e2e8f0',
      width: 250,
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
  },
  drawerNavLink: {
    color: '#e2e8f0',
    textDecoration: 'none',
    fontWeight: '500',
    '&:hover': {
      color: '#60a5fa',
    },
    '&.active': {
      color: '#60a5fa',
    },
  },
}));

const TopBar11 = (props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { text: "Home", path: "/", external: true },
    { text: "Products", path: "/Products" },
    { text: "Blog", path: "/blog" },
    { text: "Contact", path: "/Contact" },
  ];

  const drawer = (
    <div>
      <div className={classes.drawerHeader}>
        <Typography variant="h6" className={classes.brandName}>
          Christopher Moore
        </Typography>
        <IconButton onClick={handleDrawerToggle} className={classes.menuButton}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.text} onClick={handleDrawerToggle}>
            {item.external ? (
              <a
                href={item.path}
                className={classes.drawerNavLink}
                onClick={() => advancedAnalytics.trackButtonClick(`nav_${item.text.toLowerCase()}`, 'topbar_mobile')}
              >
                <ListItemText primary={item.text} />
              </a>
            ) : (
              <NavLink
                to={item.path}
                className={classes.drawerNavLink}
                onClick={() => advancedAnalytics.trackButtonClick(`nav_${item.text.toLowerCase()}`, 'topbar_mobile')}
              >
                <ListItemText primary={item.text} />
              </NavLink>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" component="div">
            <a href="/" className={classes.brandName}>
              Christopher Moore
            </a>
          </Typography>

          <nav className={classes.desktopNav}>
            {navigationItems.map((item) => (
              item.external ? (
                <a
                  key={item.text}
                  href={item.path}
                  className={classes.navLink}
                  onClick={() => advancedAnalytics.trackButtonClick(`nav_${item.text.toLowerCase()}`, 'topbar_desktop')}
                >
                  {item.text}
                </a>
              ) : (
                <NavLink
                  key={item.text}
                  to={item.path}
                  className={classes.navLink}
                  onClick={() => advancedAnalytics.trackButtonClick(`nav_${item.text.toLowerCase()}`, 'topbar_desktop')}
                >
                  {item.text}
                </NavLink>
              )
            ))}
          </nav>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        className={classes.drawer}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default TopBar11;
