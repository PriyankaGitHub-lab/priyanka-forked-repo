import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

import PostCard from './PostCard';
import LoadingSpinner from './LoadingSpinner';

/**
 * PostList component - Main component that fetches and displays posts
 * Demonstrates:
 * - Component mounting with useEffect
 * - API data fetching
 * - Loading state management
 * - Proper use of React keys in lists
 * - TypeScript best practices
 */
const PostList = () => {
  // Render posts list
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Posts from JSONPlaceholder API
      </Typography>
      
      <Typography variant="body1" color="text.secondary" align="center" paragraph>
        Fetched {/*state.data?.length || 0 */} posts successfully
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {/* TODO: Add posts here */}
        </Grid>
      </Box>
    </Container>
  );
};

export default PostList; 