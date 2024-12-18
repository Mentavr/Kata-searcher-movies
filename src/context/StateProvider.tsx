import { useState, type ReactNode, useEffect } from 'react';
import { StateContext } from './StateContext';
import { IRatingMoviesUser, StateMoviesInfo, StateValueType } from './types';
import { apiMovieList } from '../api/movie-list/apiMovieList';
import { ResponceGenres } from '../api/movie-list/types';
import { addNewRating } from '../utils/helpers/addNewRating';

interface IStateProvider {
  children: ReactNode;
}

export const StateProvider = ({ children }: IStateProvider) => {
  const { getGenres } = apiMovieList();

  const [movies, setMovies] = useState<StateMoviesInfo[]>([] as StateMoviesInfo[]);
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [allGenres, setAllGenres] = useState<ResponceGenres[]>([] as ResponceGenres[]);
  const [isEmptyMovies, setEmptyMovies] = useState<boolean>(false);
  const [ratingMoviesUser, setRatingMoviesUser] = useState<IRatingMoviesUser>({} as IRatingMoviesUser);

  const getMoviesInfo = () => {
    const moviesChangeRating = movies.map((movie) => {
      return addNewRating(movie);
    });
    return moviesChangeRating;
  };

  const setStateMovies = (date: StateMoviesInfo[]) => {
    setMovies(date);
  };

  const StateValue: StateValueType = {
    isLoaded,
    setLoaded,
    page,
    setPage,
    getMoviesInfo,
    setStateMovies,
    allGenres,
    isEmptyMovies,
    setEmptyMovies,
    ratingMoviesUser,
    setRatingMoviesUser,
  };

  const fetchGetGenres = async () => {
    try {
      const genresData = await getGenres();
      setAllGenres(genresData.genres);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchGetGenres();
  }, []);

  return <StateContext.Provider value={StateValue}>{children}</StateContext.Provider>;
};
