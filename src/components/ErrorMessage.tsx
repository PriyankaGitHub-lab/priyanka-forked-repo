// src/components/ErrorMessage.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = 'Something went wrong.' }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    minHeight="200px"
    gap={2}
    data-testid="error-message"
  >
    <Typography variant="h6" color="error">
      ⚠️ Error
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {message}
    </Typography>
  </Box>
);
export default ErrorMessage;