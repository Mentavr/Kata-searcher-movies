import { ReactNode, useState } from 'react';
import { StateContextRated } from './StateContextRated';
import { StateMoviesInfo, StateRatedValueType } from './types';

interface IStateRatedProvider {
  children: ReactNode;
}

export const StateRatedProvider = ({ children }: IStateRatedProvider) => {
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<StateMoviesInfo[]>([] as StateMoviesInfo[]);

  const getMoviesRatedInfo = () => {
    return movies;
  };

  const setStateRatedMovies = (date: StateMoviesInfo[]) => {
    setMovies(date);
  };

  const StateRatedValue: StateRatedValueType = {
    getMoviesRatedInfo,
    setStateRatedMovies,
    page,
    setPage,
  };

  return <StateContextRated.Provider value={StateRatedValue}>{children}</StateContextRated.Provider>;
};
