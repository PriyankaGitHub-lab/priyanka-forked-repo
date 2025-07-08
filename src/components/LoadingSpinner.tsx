import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

interface LoadingSpinnerProps {
  message?: string;
}

/**
 * LoadingSpinner component for displaying loading states
 * Demonstrates proper loading state handling with MUI components
 */
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = 'Loading posts...' }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="200px"
      gap={2}
      data-testid="loading-spinner"
    >
      <CircularProgress size={40} />
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;