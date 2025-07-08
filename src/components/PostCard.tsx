import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { Post } from '../types/api';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        mb: 3,
        borderRadius: 2,
        boxShadow: 1,
      }}
      data-testid={`post-card-${post.id}`}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {post.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph>
          {post.body}
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Chip
            label={`User ID: ${post.userId}`}
            variant="outlined"
            color="primary"
            size="small"
          />
          <Typography variant="caption" color="text.secondary">
            Post #{post.id}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;