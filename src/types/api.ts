/**
 * Interface for a single post from the JSONPlaceholder API
 */
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

/**
 * Interface for the API response state 
 */
export interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * Interface for API error response
 */
export interface ApiError {
  message: string;
  status?: number;
} 