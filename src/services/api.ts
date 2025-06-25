import axios, { AxiosError } from 'axios';
import { Post, ApiError } from '../types/api';

// Base URL for the JSONPlaceholder API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * API service class for handling HTTP requests
 * Note: This is optional - if want to abstract API layer.
 * You could also use a library like `fetch` or `axios` to make the API calls directly in the component.
 */
class ApiService {
  /**
   * Fetch all posts from the API
   * @returns Promise<Post[]> - Array of posts
   */
  static async fetchPosts(): Promise<Post[]> {
    // TODO: Add fetchPosts
  }

  /**
   * Fetch a single post by ID
   * @param id - Post ID
   * @returns Promise<Post> - Single post
   */
  static async fetchPostById(id: number): Promise<Post> {
    // TODO: Add fetchPostById
  }
}

export default ApiService; 