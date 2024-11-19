import { clientAxios } from '../../config/apiConfig';
import { useContextState } from '../../utils/hooks/useContextState';
import { GetMoviesParams } from './types';

export const apiSearcher = () => {
  const { setLoaded } = useContextState();
  const getMovies = async ({ query, page }: GetMoviesParams) => {
    setLoaded(true);
    try {
      const response = await clientAxios(`/3/search/movie?query=${query}&page=${page}`);
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      setLoaded(false);
    }
  };

  return { getMovies };
};
