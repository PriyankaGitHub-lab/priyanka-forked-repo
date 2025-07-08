import { makeObservable, observable, action, computed, runInAction } from 'mobx';
import axios from 'axios';
import { Post } from '../types/api';

class PostStore {
  posts: Post[] = [];
  loading: boolean = false;
  error: string | null = null;

  searchQuery: string = '';
  currentPage: number = 1;
  postsPerPage: number = 10;

  constructor() {
    makeObservable(this, {
      posts: observable,
      loading: observable,
      error: observable,
      searchQuery: observable,
      currentPage: observable,

      fetchPosts: action,
      setSearchQuery: action,
      setCurrentPage: action,
      clearPosts: action,

      filteredPosts: computed,
      paginatedPosts: computed,
      totalPages: computed,
    });
  }

  async fetchPosts() {
    if (this.posts.length > 0) return;

    this.loading = true;
    this.error = null;
    try {
      const res = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
      runInAction(() => {
        this.posts = res.data;
        this.loading = false;
      });
    } catch (e: any) {
      runInAction(() => {
        this.error = e.message || 'Failed to fetch posts';
        this.loading = false;
      });
    }
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
    this.currentPage = 1; // Reset to first page on search
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  get filteredPosts(): Post[] {
    const query = this.searchQuery.toLowerCase();
    return this.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query)
    );
  }

  get paginatedPosts(): Post[] {
    const start = (this.currentPage - 1) * this.postsPerPage;
    return this.filteredPosts.slice(start, start + this.postsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPosts.length / this.postsPerPage);
  }

  clearPosts() {
    this.posts = [];
    this.searchQuery = '';
    this.currentPage = 1;
  }
}

const postStore = new PostStore();
export default postStore;