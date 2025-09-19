import { createTheme } from '@mui/material/styles';
import { red, orange, indigo } from '@mui/material/colors';

const miamiViceColors = {
  neonPink: '#ff0080',
  neonBlue: '#0080ff',
  neonPurple: '#8000ff',
  neonCyan: '#00ffff',
  darkPurple: '#1a0033',
  darkBlue: '#000033',
  hotPink: '#ff1493',
  electricBlue: '#00bfff',
};

const themeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: miamiViceColors.neonPink,
      light: miamiViceColors.hotPink,
      dark: '#cc0066',
      contrastText: '#ffffff',
    },
    secondary: {
      main: miamiViceColors.neonBlue,
      light: miamiViceColors.electricBlue,
      dark: '#0066cc',
      contrastText: '#ffffff',
    },
    background: {
      default: 'linear-gradient(135deg, #1a0033 0%, #000033 50%, #330066 100%)',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ff00ff',
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
    MuiCard: {
      root: {
        borderRadius: 8,
      },
    },
    MuiFab: {
      root: {
        textTransform: "none",
      },
    },
  },
};

export const Theme = createTheme({
  ...themeOptions,
});

export const FooterTheme = createTheme({
  ...themeOptions,
  palette: {
    type: "dark",
  },
});
