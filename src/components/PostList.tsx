import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Container,
  Typography,
  Box,
  Grid,
  Pagination,
  Stack,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import PostCard from './PostCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import postStore from '../store/PostStore';

const PostList: React.FC = observer(() => {
  const {
    fetchPosts,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    paginatedPosts,
    totalPages,
    currentPage,
    setCurrentPage,
    posts,
    filteredPosts,
  } = postStore;

  useEffect(() => {
    postStore.fetchPosts();
  }, [fetchPosts]);

  if (loading) return <LoadingSpinner message="Fetching posts..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Posts from JSONPlaceholder API Retrieved by Priya
      </Typography>

      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Search posts by title or body..."
          value={searchQuery}
          onChange={(e) => postStore.setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          data-testid="search-input"
        />
      </Box>

      <Typography variant="body1" color="text.secondary" align="center" paragraph>
        Showing {filteredPosts?.length ?? 0} of {posts?.length ?? 0} posts
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {postStore.paginatedPosts.map((post) => (
            <Grid item xs={12} key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {postStore.totalPages > 1 && (
        <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
          <Pagination
            count={postStore.totalPages}
            page={postStore.currentPage}
            onChange={(_, page) => postStore.setCurrentPage(page)}
            color="primary"
            shape="rounded"
            data-testid="pagination"
          />
        </Stack>
      )}
    </Container>
  );
});

export default PostList;