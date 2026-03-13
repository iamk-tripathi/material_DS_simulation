import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary:    { main: '#6750A4', contrastText: '#FFFFFF' },
    secondary:  { main: '#625B71', contrastText: '#FFFFFF' },
    error:      { main: '#B3261E', contrastText: '#FFFFFF' },
    background: { default: '#FFFBFE', paper: '#FFFBFE' },
    text:       { primary: '#1C1B1F', secondary: '#49454F' },
  },
  spacing: 4,
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: { fontSize: '3.5625rem', fontWeight: 400 }, // displayLarge
    h2: { fontSize: '2.8125rem', fontWeight: 400 }, // displayMedium
    h3: { fontSize: '2.25rem',   fontWeight: 400 }, // displaySmall
    h4: { fontSize: '2rem',      fontWeight: 400 }, // headlineLarge
    h5: { fontSize: '1.75rem',   fontWeight: 400 }, // headlineMedium
    h6: { fontSize: '1.5rem',    fontWeight: 400 }, // headlineSmall
    body1:   { fontSize: '1rem',      fontWeight: 400 }, // bodyLarge
    body2:   { fontSize: '0.875rem',  fontWeight: 400 }, // bodyMedium
    caption: { fontSize: '0.75rem',   fontWeight: 400 }, // bodySmall
  },
});
