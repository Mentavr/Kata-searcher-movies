import { ResponceGenres } from '../api/movie-list/types';

export interface StateValueType {
  isLoaded: boolean;
  setLoaded: (e: boolean) => void;
  page: number;
  setPage: (e: number) => void;
  getMoviesInfo: () => StateMoviesInfo[];
  setStateMovies: (e: StateMoviesInfo[]) => void;
  allGenres: ResponceGenres[];
  isEmptyMovies: boolean;
  setEmptyMovies: (e: boolean) => void;
  ratingMoviesUser: IRatingMoviesUser;
  setRatingMoviesUser: (e: IRatingMoviesUser) => void;
}

export type IRatingMoviesUser = { id: number; rating: number };

export interface StateRatedValueType {
  getMoviesRatedInfo: () => StateMoviesInfo[];
  setStateRatedMovies: (e: StateMoviesInfo[]) => void;
  page: number;
  setPage: (e: number) => void;
}

export interface StateMoviesInfo {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating: number;
}
