import React, { useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(({ palette, ...theme }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    textAlign: 'center',
    padding: '2rem',
  },
  title: {
    color: '#e2e8f0',
    fontWeight: '700',
    fontSize: '4rem',
    marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: '1.25rem',
    marginBottom: '2rem',
    maxWidth: '500px',
  },
  homeButton: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    border: 'none',
    borderRadius: '8px',
    color: '#ffffff',
    fontWeight: '600',
    padding: '12px 30px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    '&:hover': {
      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
      transform: 'translateY(-1px)',
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();

  // Set proper meta tags for 404 page
  useEffect(() => {
    document.title = '404 - Page Not Found | Christopher Moore';

    // Set HTTP status to 404 if running on server
    if (typeof window !== 'undefined' && window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <Container className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        404
      </Typography>
      <Typography variant="h5" className={classes.subtitle}>
        Sorry, the page you're looking for doesn't exist.
      </Typography>
      <Button
        component={NavLink}
        to="/"
        className={classes.homeButton}
        variant="contained"
      >
        Go Home
      </Button>
    </Container>
  );
};

export default NotFound;