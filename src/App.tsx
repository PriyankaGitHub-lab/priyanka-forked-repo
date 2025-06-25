import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import PostList from './components/PostList';

// Create a custom theme for the application
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

/**
 * Main App component
 * Demonstrates proper app structure with theme provider
 */
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PostList />
    </ThemeProvider>
  );
};

export default App; 