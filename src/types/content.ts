import { User } from './user';

export type MediaType = 'image' | 'video';

export interface Media {
  id: string;
  url: string;
  type: MediaType;
  thumbnailUrl?: string;
  duration?: number; // for videos
}

export interface Post {
  id: string;
  creator: User;
  caption: string;
  media: Media[];
  createdAt: string;
  isPremium: boolean;
  isBlurred: boolean;
  likesCount: number;
  commentsCount: number;
  tipsAmount: number;
  isLiked: boolean;
}

export interface Comment {
  id: string;
  post: Post;
  user: User;
  content: string;
  createdAt: string;
  likesCount: number;
  isLiked: boolean;
}

export interface Interaction {
  id: string;
  type: 'like' | 'comment' | 'tip';
  user: User;
  post: Post;
  createdAt: string;
  amount?: number; // for tips
}

export interface Pagination {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}

export interface FeedResponse {
  posts: Post[];
  pagination: Pagination;
}

export interface FeedFilters {
  creatorId?: string;
  isPremium?: boolean;
  mediaType?: MediaType;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
} 