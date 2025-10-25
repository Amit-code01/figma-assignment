import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0E0E10',
      paper: '#1C1C1F',
    },
    text: {
      primary: '#F1F1F1',
      secondary: '#9B9B9B',
    },
  },
  customShadows: {
    neumoOut:
      '8px 8px 24px rgba(0,0,0,0.7), -8px -8px 24px rgba(255,255,255,0.05)',
    neumoIn:
      'inset 6px 6px 16px rgba(0,0,0,0.6), inset -4px -4px 12px rgba(255,255,255,0.05)',
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
  },
});

export default theme;
