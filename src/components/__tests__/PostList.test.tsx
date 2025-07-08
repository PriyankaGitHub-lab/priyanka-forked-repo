import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PostList from '../PostList';
import ApiService from '../../services/ApiService';

// Mock the API service
jest.mock('../../services/api');
const mockedApiService = ApiService as jest.Mocked<typeof ApiService>;

describe('PostList', () => {
  const mockPosts = [
    {
      id: 1,
      title: 'Test Post 1',
      body: 'This is test post 1',
      userId: 1
    },
    {
      id: 2,
      title: 'Test Post 2',
      body: 'This is test post 2',
      userId: 2
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading state initially', () => {
    mockedApiService.fetchPosts.mockImplementation(() => new Promise(() => {}));
    
    render(<PostList />);
    
    expect(screen.getByText('Loading posts...')).toBeInTheDocument();
  });

  it('should render posts after successful fetch', async () => {
    mockedApiService.fetchPosts.mockResolvedValue(mockPosts);
    
    render(<PostList />);
    
    await waitFor(() => {
      expect(screen.getByText('Test Post 1')).toBeInTheDocument();
      expect(screen.getByText('Test Post 2')).toBeInTheDocument();
    });
  });

  it('should render error state on fetch failure', async () => {
    const errorMessage = 'Failed to fetch posts';
    mockedApiService.fetchPosts.mockRejectedValue({ message: errorMessage });
    
    render(<PostList />);
    
    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
      expect(screen.getByText('Try Again')).toBeInTheDocument();
    });
  });

  it('should display correct post count', async () => {
    mockedApiService.fetchPosts.mockResolvedValue(mockPosts);
    
    render(<PostList />);
    
    await waitFor(() => {
      expect(screen.getByText('Fetched 2 posts successfully')).toBeInTheDocument();
    });
  });
}); 