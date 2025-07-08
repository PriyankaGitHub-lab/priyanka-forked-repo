import axios, { AxiosError } from 'axios';
import { Post, ApiError } from '../types/api';

// Base URL for the JSONPlaceholder API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

let postCache: Post[] | null = null;

/**
 * API service class for handling HTTP requests
 * Note: This is optional - if want to abstract API layer.
 */
class ApiService {
  /**
   * Fetch all posts from the API
   * @returns Promise<Post[]> - Array of posts
   */
  static async fetchPosts(): Promise<Post[]> {
     // Check the in-memory cache first
     if (postCache) {
      console.log('Returning cached posts');
      return Promise.resolve(postCache);
    }
    try {
      const response = await axios.get<Post[]>(`${API_BASE_URL}/posts`);
      return response.data;
    } catch (error) {
      const err = error as AxiosError<ApiError>;
      throw new Error(err.response?.data?.message || 'Failed to fetch posts');
    }
  }

  /**
   * Fetch a single post by ID
   * @param id - Post ID
   * @returns Promise<Post> - Single post
   */
  static async fetchPostById(id: number): Promise<Post> {
    try {
      const response = await axios.get<Post>(`${API_BASE_URL}/posts/${id}`);
      return response.data;
    } catch (error) {
      const err = error as AxiosError<ApiError>;
      throw new Error(err.response?.data?.message || `Failed to fetch post with ID ${id}`);
    }
  }
}

export default ApiService;